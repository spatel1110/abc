import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const topics = [
  { path: '/lists', name: 'Lists', icon: '[ ]', count: 55 },
  { path: '/strings', name: 'Strings', icon: '" "', count: 47 },
  { path: '/dictionaries', name: 'Dictionaries', icon: '{ }', count: 28 },
  { path: '/sorting-searching', name: 'Sorting & Searching', icon: '↕↔', count: 29 },
  { path: '/stacks-queues', name: 'Stacks & Queues', icon: '▐▌', count: 29 },
];

export default function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -260 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <NavLink to="/" className="sidebar-logo">
        <span className="logo-icon">&#60;/&#62;</span>
        <span className="logo-text">DSA Python</span>
        <span className="logo-sub">Interview Prep</span>
      </NavLink>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Topics</div>
        {topics.map((topic) => (
          <NavLink
            key={topic.path}
            to={topic.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }
          >
            <span className="nav-icon">{topic.icon}</span>
            <span className="nav-name">{topic.name}</span>
            <span className="nav-count">{topic.count}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-badge">188 Problems</div>
        <div className="footer-text">5 Core Topics</div>
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
          padding: 1.5rem 1rem;
          border-bottom: 1px solid var(--border-color);
          text-decoration: none;
        }

        .logo-icon {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          color: var(--accent-blue);
          font-weight: 700;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 0.3rem;
        }

        .logo-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0.8rem;
        }

        .nav-section-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          padding: 0.5rem 0.8rem;
          margin-bottom: 0.3rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.7rem 0.8rem;
          border-radius: var(--radius);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition);
          margin-bottom: 0.2rem;
        }

        .nav-item:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          text-decoration: none;
        }

        .nav-item-active {
          background: rgba(88, 166, 255, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(88, 166, 255, 0.2);
        }

        .nav-icon {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          width: 28px;
          text-align: center;
          opacity: 0.7;
        }

        .nav-name {
          flex: 1;
          font-weight: 500;
        }

        .nav-count {
          font-size: 0.7rem;
          background: var(--bg-tertiary);
          padding: 0.15rem 0.5rem;
          border-radius: 10px;
          color: var(--text-muted);
        }

        .nav-item-active .nav-count {
          background: rgba(88, 166, 255, 0.15);
          color: var(--accent-blue);
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }

        .footer-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-green);
          font-weight: 600;
        }

        .footer-text {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
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
