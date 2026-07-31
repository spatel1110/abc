import { useState, useEffect } from 'react';

const STORAGE_KEY = 'dsa-progress';

export function useProgress() {
  const [solved, setSolved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
  }, [solved]);

  const toggle = (name) => {
    setSolved(prev => {
      const next = { ...prev };
      if (next[name]) delete next[name];
      else next[name] = Date.now();
      return next;
    });
  };

  const isSolved = (name) => !!solved[name];
  const count = Object.keys(solved).length;

  return { solved, toggle, isSolved, count };
}

export function ProgressBar({ solved, total, label }) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
  return (
    <div className="progress-bar-container">
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }}></div>
      </div>
      <span className="progress-text">{solved}/{total} ({pct}%)</span>
      <style>{`
        .progress-bar-container {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin: 0.5rem 0;
        }
        .progress-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .progress-track {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 4px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-text {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
          white-space: nowrap;
          min-width: 80px;
        }
      `}</style>
    </div>
  );
}
