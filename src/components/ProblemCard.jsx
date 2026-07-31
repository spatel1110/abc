import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProblemVisualizer from './ProblemVisualizer';
import '../components/ProblemVisualizer.css';

export default function ProblemCard({ problem, animation }) {
  const [expanded, setExpanded] = useState(false);

  const getLeetCodeUrl = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  };

  return (
    <div className="pc-card">
      <div className="pc-header" onClick={() => setExpanded(!expanded)}>
        <div className="pc-left">
          <span className="pc-expand">{expanded ? '▾' : '▸'}</span>
          <a href={getLeetCodeUrl(problem.name)} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="pc-name">
            {problem.name}
          </a>
        </div>
        <div className="pc-right">
          <span className={`badge badge-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
          <span className="badge badge-frequency">{problem.frequency}</span>
          <span className="pc-viz-badge">🎬 Animation</span>
        </div>
      </div>

      <AnimatePresence>
        {expanded && animation && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pc-body">
              <div className="pc-explanation">
                <span className="pc-pattern">{animation.pattern}</span>
                <p>{animation.explanation}</p>
              </div>
              <ProblemVisualizer problem={animation} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .pc-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          margin-bottom: 6px;
          background: var(--bg-secondary);
          transition: all 0.2s;
        }
        .pc-card:hover {
          border-color: rgba(88, 166, 255, 0.3);
        }
        .pc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1rem;
          cursor: pointer;
          gap: 1rem;
        }
        .pc-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex: 1;
          min-width: 0;
        }
        .pc-expand {
          color: var(--text-muted);
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .pc-name {
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pc-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .pc-viz-badge {
          font-size: 0.7rem;
          background: rgba(210, 153, 34, 0.1);
          color: var(--accent-orange);
          padding: 0.15rem 0.5rem;
          border-radius: 10px;
          font-weight: 500;
        }
        .pc-body {
          padding: 0 1rem 1rem 1rem;
          border-top: 1px solid var(--border-color);
        }
        .pc-explanation {
          padding: 0.8rem 0;
        }
        .pc-pattern {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
          background: rgba(188, 140, 255, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.4rem;
        }
        .pc-explanation p {
          font-size: 0.85rem;
          margin: 0.3rem 0 0 0;
        }
      `}</style>
    </div>
  );
}
