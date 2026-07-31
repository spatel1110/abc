import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const topics = [
  {
    path: '/lists',
    name: 'Lists',
    icon: '[ ]',
    count: 55,
    color: 'var(--accent-blue)',
    desc: 'Arrays, two pointers, sliding window, prefix sums',
  },
  {
    path: '/strings',
    name: 'Strings',
    icon: '" "',
    count: 47,
    color: 'var(--accent-green)',
    desc: 'Palindromes, anagrams, substring problems, pattern matching',
  },
  {
    path: '/dictionaries',
    name: 'Dictionaries',
    icon: '{ }',
    count: 28,
    color: 'var(--accent-cyan)',
    desc: 'Hash maps, frequency counting, grouping, caching',
  },
  {
    path: '/sorting-searching',
    name: 'Sorting & Searching',
    icon: '↕↔',
    count: 29,
    color: 'var(--accent-orange)',
    desc: 'Binary search, merge sort, quick sort, heaps',
  },
  {
    path: '/stacks-queues',
    name: 'Stacks & Queues',
    icon: '▐▌',
    count: 29,
    color: 'var(--accent-purple)',
    desc: 'LIFO/FIFO, monotonic stacks, BFS, parentheses matching',
  },
];

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="hero-accent">&lt;/&gt;</span> DSA in Python
          </h1>
          <p className="hero-subtitle">
            Master Data Structures & Algorithms for coding interviews — with step-by-step visualizations, clean Python code, and 188 curated LeetCode problems.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-number">5</span>
          <span className="stat-label">Core Topics</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">188</span>
          <span className="stat-label">LeetCode Problems</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">10+</span>
          <span className="stat-label">Interactive Visualizers</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Python</span>
        </div>
      </div>

      {/* Topic Cards */}
      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Start Learning</h2>
      <div className="topic-grid">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <Link to={topic.path} className="topic-card" style={{ '--card-accent': topic.color }}>
              <div className="topic-icon">{topic.icon}</div>
              <div className="topic-info">
                <h3 className="topic-name">{topic.name}</h3>
                <p className="topic-desc">{topic.desc}</p>
                <div className="topic-meta">
                  <span className="topic-count">{topic.count} problems</span>
                  <span className="topic-arrow">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* How to use */}
      <section className="section" style={{ marginTop: '3rem' }}>
        <div className="section-title"><h2>🚀 How to Use This Site</h2></div>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-num">1</div>
            <h4>Read the Theory</h4>
            <p>Start with the plain-English explanation. Understand what the data structure does and why it exists.</p>
          </div>
          <div className="step-item">
            <div className="step-num">2</div>
            <h4>Watch the Visualizer</h4>
            <p>See the algorithm in action! Step through animations to build intuition for how operations work internally.</p>
          </div>
          <div className="step-item">
            <div className="step-num">3</div>
            <h4>Study the Code</h4>
            <p>Read the Python examples. They progress from basic to advanced, with comments explaining every step.</p>
          </div>
          <div className="step-item">
            <div className="step-num">4</div>
            <h4>Solve Problems</h4>
            <p>Apply what you learned to the curated LeetCode problems. Start with Easy, progress to Medium and Hard.</p>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          text-align: center;
          padding: 3rem 1rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, rgba(88,166,255,0.05) 0%, rgba(188,140,255,0.05) 100%);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-accent {
          font-family: var(--font-mono);
          color: var(--accent-blue);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1.2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat-number {
          font-family: var(--font-mono);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-blue);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .topic-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: var(--transition);
          border-left: 3px solid var(--card-accent);
        }

        .topic-card:hover {
          border-color: var(--card-accent);
          transform: translateX(4px);
          text-decoration: none;
        }

        .topic-icon {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          color: var(--card-accent);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(88,166,255,0.05);
          border-radius: var(--radius);
          flex-shrink: 0;
        }

        .topic-info {
          flex: 1;
        }

        .topic-name {
          color: var(--text-primary);
          margin: 0 0 0.3rem;
          font-size: 1.1rem;
        }

        .topic-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .topic-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .topic-count {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--card-accent);
        }

        .topic-arrow {
          color: var(--text-muted);
          font-size: 1.2rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.2rem;
        }

        .step-item {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1.2rem;
        }

        .step-num {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-blue);
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .step-item h4 {
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }

        .step-item p {
          font-size: 0.85rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .hero-title { font-size: 2rem; }
        }
      `}</style>
    </motion.div>
  );
}
