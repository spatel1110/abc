import { motion } from 'framer-motion';

export default function SortingVisualizer({
  array,
  highlightIndices = [],
  compareIndices = [],
  sortedIndices = [],
  swapIndices = [],
  pivotIndex = -1,
  maxVal,
}) {
  const max = maxVal || Math.max(...array, 1);

  const getBarColor = (index) => {
    if (index === pivotIndex) return 'var(--accent-purple)';
    if (swapIndices.includes(index)) return 'var(--accent-red)';
    if (compareIndices.includes(index)) return 'var(--accent-orange)';
    if (highlightIndices.includes(index)) return 'var(--accent-blue)';
    if (sortedIndices.includes(index)) return 'var(--accent-green)';
    return 'var(--accent-cyan)';
  };

  return (
    <div className="sorting-visualizer">
      <div className="bars-container">
        {array.map((val, i) => (
          <div key={i} className="bar-wrapper">
            <motion.div
              className="bar"
              animate={{
                height: `${(val / max) * 250}px`,
                backgroundColor: getBarColor(i),
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
            <span className="bar-value">{val}</span>
          </div>
        ))}
      </div>

      <div className="legend">
        <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-orange)' }} /> Comparing</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-red)' }} /> Swapping</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-green)' }} /> Sorted</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-purple)' }} /> Pivot</span>
      </div>

      <style>{`
        .sorting-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .bars-container {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          min-height: 280px;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          background: var(--bg-primary);
          width: 100%;
          justify-content: center;
        }

        .bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .bar {
          width: 32px;
          min-width: 20px;
          border-radius: 4px 4px 0 0;
          transition: background-color 0.2s;
        }

        .bar-value {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .legend {
          display: flex;
          gap: 1.2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
