import { motion } from 'framer-motion';

export default function AnimationControls({
  isPlaying,
  onPlay,
  onPause,
  onStepForward,
  onStepBackward,
  onReset,
  speed,
  onSpeedChange,
  currentStep,
  totalSteps,
  customInput,
  onCustomInputChange,
  onCustomInputSubmit,
  inputPlaceholder = 'Enter values (comma-separated)',
  autoPlay = false,
  onAutoPlayToggle,
}) {
  return (
    <div className="animation-controls">
      <div className="controls-row">
        <div className="controls-group">
          <motion.button
            className="ctrl-btn"
            onClick={onReset}
            whileTap={{ scale: 0.9 }}
            title="Reset"
          >
            ⟲
          </motion.button>
          <motion.button
            className="ctrl-btn"
            onClick={onStepBackward}
            whileTap={{ scale: 0.9 }}
            title="Step Back"
            disabled={currentStep <= 0}
          >
            ◂
          </motion.button>
          <motion.button
            className="ctrl-btn ctrl-btn-play"
            onClick={isPlaying ? onPause : onPlay}
            whileTap={{ scale: 0.9 }}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </motion.button>
          <motion.button
            className="ctrl-btn"
            onClick={onStepForward}
            whileTap={{ scale: 0.9 }}
            title="Step Forward"
            disabled={currentStep >= totalSteps - 1}
          >
            ▸
          </motion.button>
        </div>

        <div className="controls-group">
          <span className="speed-label">Speed:</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
            className="speed-slider"
          />
          <span className="speed-value">{speed}x</span>
        </div>

        <div className="step-indicator">
          Step {currentStep + 1} / {totalSteps}
        </div>
        {onAutoPlayToggle && (
          <label className="autoplay-toggle">
            <input type="checkbox" checked={autoPlay} onChange={onAutoPlayToggle} />
            <span>Auto-play</span>
          </label>
        )}
      </div>

      {onCustomInputChange && (
        <div className="custom-input-row">
          <input
            type="text"
            value={customInput}
            onChange={(e) => onCustomInputChange(e.target.value)}
            placeholder={inputPlaceholder}
            className="custom-input"
            onKeyDown={(e) => e.key === 'Enter' && onCustomInputSubmit?.()}
          />
          <motion.button
            className="ctrl-btn ctrl-btn-submit"
            onClick={onCustomInputSubmit}
            whileTap={{ scale: 0.9 }}
          >
            Visualize
          </motion.button>
        </div>
      )}

      <style>{`
        .animation-controls {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1rem 1.2rem;
          margin-bottom: 1rem;
        }

        .controls-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .controls-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ctrl-btn {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .ctrl-btn:hover:not(:disabled) {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .ctrl-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .ctrl-btn-play {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          border-color: var(--coral);
          color: white;
          font-size: 1rem;
          box-shadow: 0 0 20px rgba(255,166,158,0.25);
        }

        .ctrl-btn-play:hover {
          box-shadow: 0 0 30px rgba(255,166,158,0.4);
          color: white !important;
          border-color: var(--coral) !important;
        }

        .ctrl-btn-submit {
          width: auto;
          padding: 0 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }

        .ctrl-btn-submit:hover {
          color: white !important;
          border-color: var(--accent-green) !important;
          opacity: 0.9;
        }

        .speed-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .speed-slider {
          width: 80px;
          accent-color: var(--accent-blue);
        }

        .speed-value {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-blue);
          min-width: 28px;
        }

        .step-indicator {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-left: auto;
        }

        .autoplay-toggle {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .autoplay-toggle input {
          accent-color: var(--coral);
        }

        .custom-input-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-color);
        }

        .custom-input {
          flex: 1;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 0.5rem 0.8rem;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          outline: none;
          transition: var(--transition);
        }

        .custom-input:focus {
          border-color: var(--accent-blue);
        }

        .custom-input::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
