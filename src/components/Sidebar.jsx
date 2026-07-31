import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const topics = [
  { path: '/patterns', name: 'Patterns Guide', icon: '🧠', count: 12, color: '#FFA69E' },
  { path: '/lists', name: 'Lists', icon: '⟦⟧', count: 55, color: '#AED9E0' },
  { path: '/strings', name: 'Strings', icon: '❝❞', count: 47, color: '#B8F2E6' },
  { path: '/dictionaries', name: 'Dictionaries', icon: '⟨⟩', count: 28, color: '#FAF3DD' },
  { path: '/sorting-searching', name: 'Sorting & Searching', icon: '⇅⇄', count: 29, color: '#FFA69E' },
  { path: '/stacks-queues', name: 'Stacks & Queues', icon: '⊏⊐', count: 29, color: '#5E6472' },
  { path: '/memory', name: 'Memory Optimization', icon: '⚡', count: null, color: '#B8F2E6' },
  { path: '/oop', name: 'OOP in Python', icon: '🏗️', count: null, color: '#AED9E0' },
];

export default function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -270 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <NavLink to="/" className="sidebar-logo">
        <div className="logo-glow"></div>
        <span className="logo-icon">&lt;DSA/&gt;</span>
        <span className="logo-text">Python</span>
        <span className="logo-sub">INTERVIEW PREP</span>
      </NavLink>

      <nav className="sidebar-nav">
        <div className="nav-section-label">TOPICS</div>
        {topics.map((topic) => (
          <NavLink
            key={topic.path}
            to={topic.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }
          >
            <span className="nav-icon" style={{ color: topic.color }}>{topic.icon}</span>
            <span className="nav-name">{topic.name}</span>
            {topic.count && <span className="nav-count">{topic.count}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-stats">
          <div className="footer-stat">
            <span className="footer-num">188</span>
            <span className="footer-label">Problems</span>
          </div>
          <div className="footer-stat">
            <span className="footer-num">5</span>
            <span className="footer-label">Topics</span>
          </div>
        </div>
      </div>

      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          z-index: 100;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .logo-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,166,158,0.06) 0%, transparent 60%);
          animation: float 6s ease-in-out infinite;
        }

        .logo-icon {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .logo-text {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 0.2rem;
          position: relative;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          margin-top: 0.2rem;
          position: relative;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.2rem 0.8rem;
        }

        .nav-section-label {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          padding: 0.5rem 0.8rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.75rem 0.9rem;
          border-radius: var(--radius);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: var(--transition);
          margin-bottom: 0.3rem;
          border: 1px solid transparent;
        }

        .nav-item:hover {
          background: rgba(255,166,158,0.05);
          color: var(--text-primary);
          text-decoration: none;
          border-color: rgba(255,166,158,0.15);
        }

        .nav-item-active {
          background: linear-gradient(135deg, rgba(255,166,158,0.1) 0%, rgba(184,242,230,0.05) 100%);
          color: var(--coral);
          border-color: rgba(255,166,158,0.3);
          box-shadow: 0 0 15px rgba(255,166,158,0.08);
        }

        .nav-icon {
          font-size: 1rem;
          width: 28px;
          text-align: center;
        }

        .nav-name {
          flex: 1;
          font-weight: 500;
        }

        .nav-count {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          background: var(--bg-tertiary);
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }

        .nav-item-active .nav-count {
          background: rgba(255,166,158,0.12);
          color: var(--coral);
          border-color: rgba(255,166,158,0.25);
        }

        .sidebar-footer {
          padding: 1.2rem;
          border-top: 1px solid var(--border-color);
        }

        .footer-stats {
          display: flex;
          justify-content: space-around;
        }

        .footer-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.1rem;
        }

        .footer-num {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </motion.aside>
  );
}
