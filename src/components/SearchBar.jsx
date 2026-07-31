import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { listsProblems } from '../data/listsProblems';
import { stringsProblems } from '../data/stringsProblems';
import { dictionariesProblems } from '../data/dictionariesProblems';
import { sortingProblems } from '../data/sortingProblems';
import { stacksQueuesProblems } from '../data/stacksQueuesProblems';

const allProblems = [
  ...listsProblems.map(p => ({ ...p, topic: 'Lists', path: '/lists' })),
  ...stringsProblems.map(p => ({ ...p, topic: 'Strings', path: '/strings' })),
  ...dictionariesProblems.map(p => ({ ...p, topic: 'Dictionaries', path: '/dictionaries' })),
  ...sortingProblems.map(p => ({ ...p, topic: 'Sorting & Searching', path: '/sorting-searching' })),
  ...stacksQueuesProblems.map(p => ({ ...p, topic: 'Stacks & Queues', path: '/stacks-queues' })),
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allProblems.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.topic.toLowerCase().includes(q) ||
      p.difficulty.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  const getLeetCodeUrl = (name) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  };

  return (
    <div className="search-container">
      <div className={`search-input-wrap ${focused ? 'focused' : ''}`}>
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search 188 problems..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        {query && <button className="search-clear" onClick={() => setQuery('')}>✕</button>}
      </div>

      <AnimatePresence>
        {focused && results.length > 0 && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {results.map((p, i) => (
              <a key={i} href={getLeetCodeUrl(p.name)} target="_blank" rel="noopener noreferrer" className="search-result-item">
                <div className="sr-left">
                  <span className="sr-name">{p.name}</span>
                  <span className="sr-topic">{p.topic}</span>
                </div>
                <span className={`badge badge-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .search-container {
          position: relative;
          max-width: 500px;
          margin-bottom: 1.5rem;
        }
        .search-input-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 25px;
          padding: 0.6rem 1rem;
          transition: all 0.3s;
        }
        .search-input-wrap.focused {
          border-color: var(--coral);
          box-shadow: 0 0 20px rgba(255,166,158,0.12);
        }
        .search-icon { font-size: 0.9rem; }
        .search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: var(--font-sans);
        }
        .search-input::placeholder { color: var(--text-muted); }
        .search-clear {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0.2rem;
        }
        .search-results {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          z-index: 50;
          overflow: hidden;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 1rem;
          text-decoration: none;
          transition: background 0.15s;
          border-bottom: 1px solid var(--border-color);
        }
        .search-result-item:last-child { border-bottom: none; }
        .search-result-item:hover { background: rgba(255,166,158,0.04); }
        .sr-left {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .sr-name {
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .sr-topic {
          font-size: 0.7rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
