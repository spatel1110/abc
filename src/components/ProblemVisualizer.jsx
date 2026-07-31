import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Generic Problem Visualizer that animates step-by-step solution walkthroughs.
 * Each problem provides its own `steps` array where each step describes:
 *  - array/string/dict/stack state
 *  - highlighted indices, pointers, annotations
 *  - description of what's happening
 *
 * Visualization types:
 *  - "array": array boxes with highlights/pointers
 *  - "bars": bar chart (for sorting)
 *  - "string": character boxes
 *  - "hashmap": key-value pairs or buckets
 *  - "stack": vertical stack with push/pop
 *  - "queue": horizontal queue
 *  - "matrix": 2D grid
 *  - "linked-list": nodes with arrows
 */
export default function ProblemVisualizer({ problem }) {
  const { steps, title, pattern, difficulty } = problem;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [problem]);

  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, steps.length]);

  const step = steps[currentStep] || steps[0];
  if (!step) return null;

  return (
    <div className="pv-container">
      {/* Controls */}
      <div className="pv-controls">
        <div className="pv-ctrl-group">
          <button className="pv-btn" onClick={() => { setCurrentStep(0); setIsPlaying(false); }} title="Reset">⟲</button>
          <button className="pv-btn" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep <= 0}>◂</button>
          <button className="pv-btn pv-btn-play" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button className="pv-btn" onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep >= steps.length - 1}>▸</button>
        </div>
        <div className="pv-ctrl-group">
          <span className="pv-speed-label">Speed:</span>
          <input type="range" min="0.5" max="3" step="0.5" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} className="pv-slider" />
          <span className="pv-speed-val">{speed}x</span>
        </div>
        <span className="pv-step-info">Step {currentStep + 1}/{steps.length}</span>
      </div>

      {/* Visualization Area */}
      <div className="pv-viz-area">
        {step.type === 'array' && <ArrayViz step={step} />}
        {step.type === 'string' && <StringViz step={step} />}
        {step.type === 'bars' && <BarsViz step={step} />}
        {step.type === 'hashmap' && <HashViz step={step} />}
        {step.type === 'stack' && <StackViz step={step} />}
        {step.type === 'queue' && <QueueViz step={step} />}
        {step.type === 'matrix' && <MatrixViz step={step} />}
        {step.type === 'pointers' && <PointerViz step={step} />}
        {step.type === 'twoarray' && <TwoArrayViz step={step} />}
        {(!step.type || step.type === 'info') && <InfoViz step={step} />}
      </div>

      {/* Description */}
      <motion.div className="pv-desc" key={currentStep} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
        {step.desc}
      </motion.div>

      {/* Variable tracker */}
      {step.vars && (
        <div className="pv-vars">
          {Object.entries(step.vars).map(([k, v]) => (
            <span key={k} className="pv-var"><span className="pv-var-name">{k}:</span> <span className="pv-var-val">{String(v)}</span></span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============== Sub-visualization components ============== */

function ArrayViz({ step }) {
  const { data = [], highlights = [], pointers = [], sorted = [], swaps = [], window = [] } = step;
  return (
    <div className="pv-array">
      {data.map((val, i) => {
        let cls = 'pv-cell';
        if (swaps.includes(i)) cls += ' pv-swap';
        else if (highlights.includes(i)) cls += ' pv-hl';
        else if (window.includes(i)) cls += ' pv-window';
        else if (sorted.includes(i)) cls += ' pv-sorted';
        return (
          <div key={i} className="pv-cell-wrap">
            <motion.div className={cls} layout animate={{ y: swaps.includes(i) ? -6 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              {val}
            </motion.div>
            <span className="pv-idx">{i}</span>
            {pointers.filter(p => p.idx === i).map((p, pi) => (
              <span key={pi} className="pv-ptr" style={{ color: p.color || 'var(--accent-purple)' }}>▲{p.label}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function StringViz({ step }) {
  const { data = '', highlights = [], pointers = [], window = [] } = step;
  const chars = typeof data === 'string' ? data.split('') : data;
  return (
    <div className="pv-array">
      {chars.map((ch, i) => {
        let cls = 'pv-cell pv-char';
        if (highlights.includes(i)) cls += ' pv-hl';
        else if (window.includes(i)) cls += ' pv-window';
        return (
          <div key={i} className="pv-cell-wrap">
            <div className={cls}>{ch}</div>
            <span className="pv-idx">{i}</span>
            {pointers.filter(p => p.idx === i).map((p, pi) => (
              <span key={pi} className="pv-ptr" style={{ color: p.color || 'var(--accent-purple)' }}>▲{p.label}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function BarsViz({ step }) {
  const { data = [], highlights = [], sorted = [], swaps = [], pivot } = step;
  const max = Math.max(...data, 1);
  return (
    <div className="pv-bars">
      {data.map((val, i) => {
        let color = 'var(--accent-cyan)';
        if (i === pivot) color = 'var(--accent-purple)';
        else if (swaps.includes(i)) color = 'var(--accent-red)';
        else if (highlights.includes(i)) color = 'var(--accent-orange)';
        else if (sorted.includes(i)) color = 'var(--accent-green)';
        return (
          <div key={i} className="pv-bar-wrap">
            <motion.div className="pv-bar" animate={{ height: `${(val / max) * 160}px`, backgroundColor: color }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
            <span className="pv-bar-val">{val}</span>
          </div>
        );
      })}
    </div>
  );
}

function HashViz({ step }) {
  const { data = [], highlights = [] } = step;
  return (
    <div className="pv-hash">
      {data.map((entry, i) => (
        <motion.div key={entry.key || i} className={`pv-hash-entry ${highlights.includes(i) ? 'pv-hl' : ''}`} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <span className="pv-hk">{entry.key}</span>
          <span className="pv-harrow">→</span>
          <span className="pv-hv">{entry.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StackViz({ step }) {
  const { data = [], highlights = [] } = step;
  return (
    <div className="pv-stack">
      <div className="pv-stack-label">Top ↑</div>
      <div className="pv-stack-items">
        <AnimatePresence>
          {data.map((val, i) => (
            <motion.div key={val + '-' + i} className={`pv-stack-item ${highlights.includes(i) ? 'pv-hl' : ''} ${i === 0 ? 'pv-stack-top' : ''}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {val}
            </motion.div>
          ))}
        </AnimatePresence>
        {data.length === 0 && <div className="pv-empty">Empty</div>}
      </div>
    </div>
  );
}

function QueueViz({ step }) {
  const { data = [], highlights = [] } = step;
  return (
    <div className="pv-queue">
      <span className="pv-q-label">Front →</span>
      <div className="pv-q-items">
        <AnimatePresence>
          {data.map((val, i) => (
            <motion.div key={val + '-' + i} className={`pv-q-item ${highlights.includes(i) ? 'pv-hl' : ''}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              {val}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <span className="pv-q-label">← Rear</span>
    </div>
  );
}

function MatrixViz({ step }) {
  const { data = [[]], highlights = [] } = step;
  return (
    <div className="pv-matrix">
      {data.map((row, r) => (
        <div key={r} className="pv-matrix-row">
          {row.map((val, c) => {
            const isHl = highlights.some(([hr, hc]) => hr === r && hc === c);
            return (
              <div key={c} className={`pv-matrix-cell ${isHl ? 'pv-hl' : ''}`}>{val}</div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function PointerViz({ step }) {
  const { data = [], highlights = [], pointers = [], window = [] } = step;
  return (
    <div className="pv-array">
      {data.map((val, i) => {
        let cls = 'pv-cell';
        if (highlights.includes(i)) cls += ' pv-hl';
        else if (window.includes(i)) cls += ' pv-window';
        return (
          <div key={i} className="pv-cell-wrap">
            <div className={cls}>{val}</div>
            <span className="pv-idx">{i}</span>
            {pointers.filter(p => p.idx === i).map((p, pi) => (
              <span key={pi} className="pv-ptr" style={{ color: p.color || 'var(--accent-purple)' }}>▲{p.label}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function TwoArrayViz({ step }) {
  const { data1 = [], data2 = [], highlights1 = [], highlights2 = [], label1 = 'Input', label2 = 'Output' } = step;
  return (
    <div className="pv-twoarray">
      <div>
        <div className="pv-ta-label">{label1}</div>
        <div className="pv-array">
          {data1.map((val, i) => (
            <div key={i} className="pv-cell-wrap">
              <div className={`pv-cell ${highlights1.includes(i) ? 'pv-hl' : ''}`}>{val}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="pv-ta-label">{label2}</div>
        <div className="pv-array">
          {data2.map((val, i) => (
            <div key={i} className="pv-cell-wrap">
              <div className={`pv-cell ${highlights2.includes(i) ? 'pv-hl' : ''}`}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoViz({ step }) {
  return (
    <div className="pv-info">
      {step.visual && <pre className="pv-info-pre">{step.visual}</pre>}
    </div>
  );
}
