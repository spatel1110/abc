import { motion, AnimatePresence } from 'framer-motion';

export default function HashMapVisualizer({ buckets, highlightBucket, operation, mode = 'bucket' }) {
  if (mode === 'simple') {
    return (
      <div className="hashmap-visualizer">
        <div className="simple-map">
          <AnimatePresence>
            {buckets.map((entry, i) => (
              <motion.div
                key={entry.key || i}
                className={`map-entry ${highlightBucket === i ? 'highlighted' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <span className="entry-key">{entry.key}</span>
                <span className="entry-arrow">→</span>
                <span className="entry-value">{entry.value}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {operation && (
          <motion.div className="hash-operation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={operation}>
            {operation}
          </motion.div>
        )}

        <style>{`
          .hashmap-visualizer {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
          }

          .simple-map {
            display: flex;
            flex-direction: column;
            gap: 6px;
            min-width: 250px;
          }

          .map-entry {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 0.6rem 1rem;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            transition: var(--transition);
          }

          .map-entry.highlighted {
            border-color: var(--accent-blue);
            background: rgba(88, 166, 255, 0.1);
          }

          .entry-key {
            color: var(--accent-cyan);
            font-weight: 600;
            min-width: 60px;
          }

          .entry-arrow {
            color: var(--text-muted);
          }

          .entry-value {
            color: var(--accent-green);
          }

          .hash-operation {
            margin-top: 1rem;
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--accent-orange);
            background: rgba(210, 153, 34, 0.1);
            padding: 0.4rem 1rem;
            border-radius: var(--radius);
          }
        `}</style>
      </div>
    );
  }

  // Bucket view
  return (
    <div className="hashmap-visualizer">
      <div className="bucket-view">
        {buckets.map((bucket, i) => (
          <div key={i} className={`bucket-row ${highlightBucket === i ? 'bucket-active' : ''}`}>
            <div className="bucket-index">{i}</div>
            <div className="bucket-slot">
              <AnimatePresence>
                {bucket.items.map((item, j) => (
                  <motion.div
                    key={item.key}
                    className="bucket-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <span className="bi-key">{item.key}</span>
                    <span className="bi-sep">:</span>
                    <span className="bi-val">{item.value}</span>
                    {j < bucket.items.length - 1 && <span className="bi-chain">→</span>}
                  </motion.div>
                ))}
              </AnimatePresence>
              {bucket.items.length === 0 && <span className="bucket-empty">∅</span>}
            </div>
          </div>
        ))}
      </div>
      {operation && (
        <motion.div className="hash-operation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={operation}>
          {operation}
        </motion.div>
      )}

      <style>{`
        .hashmap-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .bucket-view {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 350px;
        }

        .bucket-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.3rem 0;
          border-radius: 4px;
          transition: var(--transition);
        }

        .bucket-row.bucket-active {
          background: rgba(88, 166, 255, 0.05);
        }

        .bucket-index {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .bucket-active .bucket-index {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .bucket-slot {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          min-height: 34px;
          border: 1px dashed var(--border-color);
          border-radius: 4px;
          padding: 0.3rem 0.6rem;
        }

        .bucket-active .bucket-slot {
          border-color: var(--accent-blue);
          border-style: solid;
        }

        .bucket-item {
          display: flex;
          align-items: center;
          gap: 3px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.3rem 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .bi-key { color: var(--accent-cyan); font-weight: 600; }
        .bi-sep { color: var(--text-muted); }
        .bi-val { color: var(--accent-green); }
        .bi-chain { color: var(--accent-orange); margin: 0 4px; }

        .bucket-empty {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .hash-operation {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-orange);
          background: rgba(210, 153, 34, 0.1);
          padding: 0.4rem 1rem;
          border-radius: var(--radius);
        }
      `}</style>
    </div>
  );
}
