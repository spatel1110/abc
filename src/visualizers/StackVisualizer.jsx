import { motion, AnimatePresence } from 'framer-motion';

export default function StackVisualizer({ items, operation, isQueue = false, label = '' }) {
  return (
    <div className="stack-visualizer">
      {label && <div className="stack-label">{label}</div>}
      <div className={`stack-container ${isQueue ? 'queue-mode' : ''}`}>
        <div className="stack-header">
          {isQueue ? '← Front' : '← Top'}
        </div>
        <div className={`stack-items ${isQueue ? 'horizontal' : ''}`}>
          <AnimatePresence>
            {items.map((item, i) => (
              <motion.div
                key={item.id || i}
                className={`stack-item ${i === 0 && !isQueue ? 'top-item' : ''} ${
                  i === 0 && isQueue ? 'front-item' : ''
                } ${i === items.length - 1 && isQueue ? 'rear-item' : ''}`}
                initial={{ opacity: 0, x: isQueue ? 50 : 0, y: isQueue ? 0 : -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: isQueue ? -50 : 0, y: isQueue ? 0 : -30, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <span className="item-value">{item.value}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && (
            <div className="empty-message">Empty</div>
          )}
        </div>
        <div className="stack-footer">
          {isQueue ? 'Rear →' : 'Bottom →'}
        </div>
      </div>
      {operation && (
        <motion.div
          className="operation-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          key={operation}
        >
          {operation}
        </motion.div>
      )}

      <style>{`
        .stack-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .stack-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .stack-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 120px;
        }

        .queue-mode {
          flex-direction: row;
          min-width: auto;
        }

        .stack-header, .stack-footer {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          padding: 0.3rem 0;
        }

        .stack-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
          padding: 0.5rem;
          min-height: 200px;
          min-width: 100px;
          justify-content: flex-end;
        }

        .stack-items.horizontal {
          flex-direction: row;
          min-height: auto;
          min-width: 200px;
          align-items: center;
          justify-content: flex-start;
        }

        .stack-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.6rem 1.2rem;
          text-align: center;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .top-item, .front-item {
          background: rgba(88, 166, 255, 0.15);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .rear-item {
          background: rgba(63, 185, 80, 0.15);
          border-color: var(--accent-green);
          color: var(--accent-green);
        }

        .empty-message {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-style: italic;
          padding: 2rem 0;
        }

        .operation-indicator {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-orange);
          background: rgba(210, 153, 34, 0.1);
          padding: 0.4rem 1rem;
          border-radius: var(--radius);
          border: 1px solid rgba(210, 153, 34, 0.3);
        }
      `}</style>
    </div>
  );
}
