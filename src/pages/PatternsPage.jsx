import { useState } from 'react';
import { motion } from 'framer-motion';
import { patternList } from '../data/patterns';

export default function PatternsPage() {
  const [selected, setSelected] = useState(null);

  const getLeetCodeUrl = (name) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Pattern Recognition Guide</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        Every interview problem follows a pattern. Learn to recognize the pattern from the problem statement, and the solution writes itself.
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Read the <strong>Trigger Words</strong> — these are keywords in problem statements that tell you which pattern to use. This is how experienced engineers solve problems in under 5 minutes.
      </p>

      {/* Decision Flowchart */}
      <section className="section">
        <div className="section-title"><h2>🧠 Quick Decision Framework</h2></div>
        <div className="decision-grid">
          <div className="decision-card">
            <span className="dc-q">Array is sorted?</span>
            <span className="dc-a">→ Binary Search or Two Pointers</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Need subarray/substring?</span>
            <span className="dc-a">→ Sliding Window or Prefix Sum</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Finding pairs/complements?</span>
            <span className="dc-a">→ Hash Map</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Kth largest/smallest?</span>
            <span className="dc-a">→ Heap (Priority Queue)</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Next greater/smaller?</span>
            <span className="dc-a">→ Monotonic Stack</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Connected regions in grid?</span>
            <span className="dc-a">→ BFS / DFS</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Generate all combinations?</span>
            <span className="dc-a">→ Backtracking</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Overlapping subproblems?</span>
            <span className="dc-a">→ Dynamic Programming</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Interval overlap/merge?</span>
            <span className="dc-a">→ Sort + Greedy</span>
          </div>
          <div className="decision-card">
            <span className="dc-q">Matching/nesting brackets?</span>
            <span className="dc-a">→ Stack</span>
          </div>
        </div>
      </section>

      {/* Pattern Cards */}
      <section className="section">
        <div className="section-title"><h2>📋 All Patterns ({patternList.length})</h2></div>
        <div className="pattern-grid">
          {patternList.map((pattern, i) => (
            <motion.div
              key={pattern.name}
              className={`pattern-card ${selected === i ? 'expanded' : ''}`}
              onClick={() => setSelected(selected === i ? null : i)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{ '--p-color': pattern.color }}
            >
              <div className="pc-top">
                <span className="pc-icon">{pattern.icon}</span>
                <div className="pc-info">
                  <h3 className="pc-title">{pattern.name}</h3>
                  <span className="pc-count">{pattern.problems.length} problems</span>
                </div>
                <span className="pc-arrow">{selected === i ? '▾' : '▸'}</span>
              </div>

              {selected === i && (
                <motion.div className="pc-expanded" initial={{ height: 0 }} animate={{ height: 'auto' }}>
                  <p className="pc-desc">{pattern.description}</p>

                  <div className="pc-section">
                    <h4>🎯 When to Use</h4>
                    <ul className="pc-list">
                      {pattern.whenToUse.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>

                  <div className="pc-section">
                    <h4>🔑 Trigger Words in Problem Statements</h4>
                    <div className="pc-triggers">
                      {pattern.triggerWords.map((word, j) => (
                        <span key={j} className="pc-trigger">{word}</span>
                      ))}
                    </div>
                  </div>

                  <div className="pc-section">
                    <h4>📝 Problems (Easy → Hard)</h4>
                    <div className="pc-problems">
                      {pattern.problems.map((p, j) => (
                        <a key={j} href={getLeetCodeUrl(p.name)} target="_blank" rel="noopener noreferrer" className="pc-problem">
                          <span className="pc-p-name">{p.name}</span>
                          <div className="pc-p-meta">
                            <span className={`badge badge-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
                            <span className="pc-p-topic">{p.topic}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .decision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.7rem;
        }
        .decision-card {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 0.8rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          transition: var(--transition);
        }
        .decision-card:hover {
          border-color: var(--coral);
          transform: translateY(-1px);
        }
        .dc-q {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--cream);
        }
        .dc-a {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--mint);
        }

        .pattern-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pattern-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--p-color);
          border-radius: var(--radius);
          padding: 1rem 1.2rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .pattern-card:hover {
          border-color: var(--p-color);
          box-shadow: 0 0 15px rgba(255,166,158,0.06);
        }
        .pattern-card.expanded {
          border-color: var(--p-color);
        }
        .pc-top {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .pc-icon {
          font-size: 1.3rem;
          width: 36px;
          text-align: center;
        }
        .pc-info { flex: 1; }
        .pc-title {
          font-size: 1rem;
          color: var(--cream);
          margin: 0;
        }
        .pc-count {
          font-size: 0.75rem;
          color: var(--slate);
        }
        .pc-arrow {
          color: var(--slate);
          font-size: 0.8rem;
        }
        .pc-expanded {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
        .pc-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .pc-section {
          margin-bottom: 1rem;
        }
        .pc-section h4 {
          font-size: 0.85rem;
          color: var(--coral);
          margin-bottom: 0.5rem;
        }
        .pc-list {
          padding-left: 1.2rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.8;
        }
        .pc-triggers {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pc-trigger {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          background: rgba(184,242,230,0.08);
          color: var(--mint);
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          border: 1px solid rgba(184,242,230,0.2);
        }
        .pc-problems {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .pc-problem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.7rem;
          background: var(--bg-tertiary);
          border-radius: 6px;
          text-decoration: none;
          transition: var(--transition);
        }
        .pc-problem:hover {
          background: rgba(255,166,158,0.05);
          text-decoration: none;
        }
        .pc-p-name {
          font-size: 0.83rem;
          color: var(--ice);
        }
        .pc-p-meta {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .pc-p-topic {
          font-size: 0.7rem;
          color: var(--slate);
        }
      `}</style>
    </motion.div>
  );
}
