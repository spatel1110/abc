import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';
import ProblemVisualizer from './ProblemVisualizer';
import { problemSolutions } from '../data/problemSolutions';
import { problemMeta } from '../data/problemMeta';
import '../components/ProblemVisualizer.css';

export default function ProblemCard({ problem, animation, isSolved, onToggleSolved }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('solutions');
  const solutions = problemSolutions[problem.name];
  const meta = problemMeta[problem.name];

  const getLeetCodeUrl = (name) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  };

  return (
    <div className="pc-card">
      <div className="pc-header" onClick={() => setExpanded(!expanded)}>
        <div className="pc-left">
          <button className={`pc-check ${isSolved ? 'solved' : ''}`} onClick={(e) => { e.stopPropagation(); onToggleSolved(); }} title="Mark as solved">
            {isSolved ? '✓' : '○'}
          </button>
          <span className="pc-expand">{expanded ? '▾' : '▸'}</span>
          <a href={getLeetCodeUrl(problem.name)} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`pc-name ${isSolved ? 'pc-name-solved' : ''}`}>
            {problem.name}
          </a>
        </div>
        <div className="pc-right">
          <span className={`badge badge-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
          <span className="badge badge-frequency">{problem.frequency}</span>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pc-body">
              {/* Tab bar */}
              <div className="pc-tabs">
                {animation && <button className={`pc-tab ${activeTab === 'animation' ? 'active' : ''}`} onClick={() => setActiveTab('animation')}>🎬 Animation</button>}
                {solutions && <button className={`pc-tab ${activeTab === 'solutions' ? 'active' : ''}`} onClick={() => setActiveTab('solutions')}>💻 Solutions</button>}
                {meta && <button className={`pc-tab ${activeTab === 'thought' ? 'active' : ''}`} onClick={() => setActiveTab('thought')}>🧠 Thought Process</button>}
                {meta && <button className={`pc-tab ${activeTab === 'dryrun' ? 'active' : ''}`} onClick={() => setActiveTab('dryrun')}>📋 Dry Run</button>}
              </div>

              {/* Animation tab */}
              {activeTab === 'animation' && animation && (
                <div className="pc-section">
                  <div className="pc-explanation">
                    <span className="pc-pattern">{animation.pattern}</span>
                    <p>{animation.explanation}</p>
                  </div>
                  <ProblemVisualizer problem={animation} />
                </div>
              )}

              {/* Solutions tab */}
              {activeTab === 'solutions' && solutions && (
                <div className="pc-solutions">
                  {['brute', 'better', 'optimal'].map((approach) => {
                    const sol = solutions[approach];
                    if (!sol) return null;
                    const colors = { brute: 'var(--accent-red)', better: 'var(--accent-orange)', optimal: 'var(--accent-green)' };
                    return (
                      <div key={approach} className="pc-sol-card" style={{ '--sol-color': colors[approach] }}>
                        <div className="pc-sol-header">
                          <span className="pc-sol-name" style={{ color: colors[approach] }}>{sol.name}</span>
                          <div className="pc-sol-complexity">
                            <span className="pc-sol-badge">⏱ {sol.time}</span>
                            <span className="pc-sol-badge">💾 {sol.space}</span>
                          </div>
                        </div>
                        <Highlight theme={themes.nightOwl} code={sol.code.trim()} language="python">
                          {({ style, tokens, getLineProps, getTokenProps }) => (
                            <pre style={{ ...style, margin: 0, padding: '0.8rem', borderRadius: '0 0 8px 8px', fontSize: '0.78rem', lineHeight: '1.6', overflow: 'auto' }}>
                              {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                  {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                  ))}
                                </div>
                              ))}
                            </pre>
                          )}
                        </Highlight>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Fallback if no animation but solutions exist */}
              {activeTab === 'animation' && !animation && solutions && (
                <div className="pc-section">
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>Switch to Solutions tab to see 3 approaches for this problem.</p>
                </div>
              )}

              {/* Thought Process tab */}
              {activeTab === 'thought' && meta && (
                <div className="pc-meta-section">
                  <div className="pc-meta-block">
                    <h5 className="pc-meta-title">🧠 How to Arrive at the Solution</h5>
                    <ol className="pc-thought-list">
                      {meta.thoughtProcess.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                  </div>
                  <div className="pc-meta-row">
                    <div className="pc-meta-block">
                      <h5 className="pc-meta-title">⚠️ Edge Cases to Test</h5>
                      <ul className="pc-edge-list">
                        {meta.edgeCases.map((e, i) => <li key={i}><code>{e}</code></li>)}
                      </ul>
                    </div>
                    <div className="pc-meta-block">
                      <h5 className="pc-meta-title">❓ Follow-Up Questions</h5>
                      <ul className="pc-edge-list">
                        {meta.followUps.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                  </div>
                  {meta.related && (
                    <div className="pc-meta-block">
                      <h5 className="pc-meta-title">🔗 Related Problems</h5>
                      <div className="pc-related">
                        {meta.related.map((r, i) => (
                          <a key={i} href={getLeetCodeUrl(r)} target="_blank" rel="noopener noreferrer" className="pc-related-link">{r}</a>
                        ))}
                      </div>
                    </div>
                  )}
                  {meta.timeTarget && (
                    <div className="pc-time-target">⏱ Target: {meta.timeTarget}</div>
                  )}
                </div>
              )}

              {/* Dry Run tab */}
              {activeTab === 'dryrun' && meta && meta.dryRun && (
                <div className="pc-meta-section">
                  <div className="pc-meta-block">
                    <h5 className="pc-meta-title">📋 Step-by-Step Dry Run</h5>
                    <div className="pc-dryrun-input"><strong>Input:</strong> <code>{meta.dryRun.input}</code></div>
                    <div className="pc-dryrun-steps">
                      {meta.dryRun.steps.map((step, i) => (
                        <div key={i} className="pc-dryrun-step">
                          <span className="pc-dryrun-num">{i + 1}</span>
                          <span className="pc-dryrun-text">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .pc-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          background: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .pc-check:hover { border-color: var(--accent-green); color: var(--accent-green); }
        .pc-check.solved {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }
        .pc-name-solved { opacity: 0.6; text-decoration: line-through; }
        .pc-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          margin-bottom: 6px;
          background: var(--bg-secondary);
          transition: all 0.2s;
        }
        .pc-card:hover {
          border-color: rgba(255, 166, 158, 0.3);
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
        .pc-body {
          padding: 0 1rem 1rem 1rem;
          border-top: 1px solid var(--border-color);
        }
        .pc-tabs {
          display: flex;
          gap: 0.3rem;
          padding: 0.8rem 0 0.5rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 0.8rem;
        }
        .pc-tab {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .pc-tab:hover { border-color: var(--coral); color: var(--text-primary); }
        .pc-tab.active {
          background: linear-gradient(135deg, rgba(255,166,158,0.12), rgba(184,242,230,0.06));
          border-color: var(--coral);
          color: var(--coral);
        }
        .pc-explanation {
          padding: 0.5rem 0;
        }
        .pc-pattern {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--coral);
          background: rgba(255, 166, 158, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.3rem;
          border: 1px solid rgba(255, 166, 158, 0.2);
        }
        .pc-explanation p {
          font-size: 0.85rem;
          margin: 0.3rem 0 0 0;
        }
        .pc-solutions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .pc-sol-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          overflow: hidden;
          border-left: 3px solid var(--sol-color);
        }
        .pc-sol-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.8rem;
          background: var(--bg-tertiary);
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pc-sol-name {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
        }
        .pc-sol-complexity {
          display: flex;
          gap: 0.4rem;
        }
        .pc-sol-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background: var(--bg-primary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        .pc-section {
          padding-top: 0.3rem;
        }
        .pc-meta-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .pc-meta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .pc-meta-block {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 0.8rem 1rem;
        }
        .pc-meta-title {
          font-size: 0.82rem;
          color: var(--coral);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .pc-thought-list {
          padding-left: 1.2rem;
          color: var(--text-secondary);
          font-size: 0.83rem;
          line-height: 1.9;
        }
        .pc-thought-list li { margin-bottom: 0.2rem; }
        .pc-edge-list {
          padding-left: 1rem;
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.8;
          list-style: none;
        }
        .pc-edge-list li::before { content: '• '; color: var(--slate); }
        .pc-edge-list code {
          font-size: 0.78rem;
        }
        .pc-related {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pc-related-link {
          font-size: 0.78rem;
          background: var(--bg-tertiary);
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          color: var(--ice);
          text-decoration: none;
          transition: all 0.2s;
        }
        .pc-related-link:hover { border-color: var(--coral); color: var(--coral); text-decoration: none; }
        .pc-time-target {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--mint);
          background: rgba(184,242,230,0.06);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(184,242,230,0.15);
          text-align: center;
        }
        .pc-dryrun-input {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.8rem;
          padding: 0.4rem 0.6rem;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }
        .pc-dryrun-steps {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .pc-dryrun-step {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          padding: 0.3rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        .pc-dryrun-num {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background: var(--coral);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 700;
        }
        .pc-dryrun-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .pc-meta-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
