export default function TimeTargets() {
  return (
    <div className="time-targets">
      <div className="tt-header">
        <h3>⏱ Solve Time Targets</h3>
        <p>Practice with these time limits to simulate real interview pressure:</p>
      </div>
      <div className="tt-grid">
        <div className="tt-card tt-easy">
          <span className="tt-time">8-10 min</span>
          <span className="tt-label">Easy</span>
          <span className="tt-detail">Understand + Code + Test</span>
        </div>
        <div className="tt-card tt-medium">
          <span className="tt-time">15-20 min</span>
          <span className="tt-label">Medium</span>
          <span className="tt-detail">Clarify + Approach + Code + Edge Cases</span>
        </div>
        <div className="tt-card tt-hard">
          <span className="tt-time">25-35 min</span>
          <span className="tt-label">Hard</span>
          <span className="tt-detail">Brute Force → Optimize → Code → Test</span>
        </div>
      </div>
      <div className="tt-tip">
        <strong>Pro tip:</strong> If you can't find the optimal approach in 5 minutes, code the brute force first. A working O(n²) solution beats a broken O(n) attempt.
      </div>

      <style>{`
        .time-targets {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .tt-header h3 {
          font-size: 1rem;
          margin: 0 0 0.3rem;
          color: var(--cream);
        }
        .tt-header p {
          font-size: 0.82rem;
          margin: 0 0 1rem;
          color: var(--text-muted);
        }
        .tt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }
        .tt-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.8rem;
          border-radius: var(--radius);
          border: 1px solid var(--border-color);
          text-align: center;
          gap: 0.2rem;
        }
        .tt-easy { border-color: rgba(184,242,230,0.3); background: rgba(184,242,230,0.04); }
        .tt-medium { border-color: rgba(255,166,158,0.3); background: rgba(255,166,158,0.04); }
        .tt-hard { border-color: rgba(255,123,115,0.3); background: rgba(255,123,115,0.04); }
        .tt-time {
          font-family: var(--font-mono);
          font-size: 1.3rem;
          font-weight: 700;
        }
        .tt-easy .tt-time { color: var(--mint); }
        .tt-medium .tt-time { color: var(--coral); }
        .tt-hard .tt-time { color: #ff7b73; }
        .tt-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .tt-detail {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .tt-tip {
          font-size: 0.8rem;
          color: var(--text-secondary);
          background: rgba(255,166,158,0.05);
          border: 1px solid rgba(255,166,158,0.15);
          border-radius: 6px;
          padding: 0.6rem 0.8rem;
        }
        .tt-tip strong { color: var(--coral); }
        @media (max-width: 768px) {
          .tt-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
