import { motion } from 'framer-motion';

export default function ArrayVisualizer({
  array,
  highlightIndices = [],
  compareIndices = [],
  sortedIndices = [],
  pointers = [],
  swapIndices = [],
  label = '',
}) {
  const getColor = (index) => {
    if (swapIndices.includes(index)) return 'var(--accent-red)';
    if (compareIndices.includes(index)) return 'var(--accent-orange)';
    if (highlightIndices.includes(index)) return 'var(--accent-blue)';
    if (sortedIndices.includes(index)) return 'var(--accent-green)';
    return 'var(--bg-tertiary)';
  };

  const getBorderColor = (index) => {
    if (swapIndices.includes(index)) return 'var(--accent-red)';
    if (compareIndices.includes(index)) return 'var(--accent-orange)';
    if (highlightIndices.includes(index)) return 'var(--accent-blue)';
    if (sortedIndices.includes(index)) return 'var(--accent-green)';
    return 'var(--border-color)';
  };

  return (
    <div className="array-visualizer">
      {label && <div className="array-label">{label}</div>}
      <div className="array-container">
        {array.map((val, i) => (
          <div key={i} className="array-cell-wrapper">
            <motion.div
              className="array-cell"
              layout
              style={{
                background: getColor(i),
                borderColor: getBorderColor(i),
              }}
              animate={{
                scale: swapIndices.includes(i) ? 1.1 : 1,
                y: swapIndices.includes(i) ? -8 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="cell-value">{val}</span>
            </motion.div>
            <span className="cell-index">{i}</span>
            {pointers
              .filter((p) => p.index === i)
              .map((p, pi) => (
                <motion.div
                  key={pi}
                  className="pointer-label"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: p.color || 'var(--accent-purple)' }}
                >
                  ▲ {p.name}
                </motion.div>
              ))}
          </div>
        ))}
      </div>

      <style>{`
        .array-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .array-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .array-container {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .array-cell-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .array-cell {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-color);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .cell-value {
          user-select: none;
        }

        .cell-index {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .pointer-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
}
