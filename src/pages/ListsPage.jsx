import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimationControls from '../components/AnimationControls';
import ArrayVisualizer from '../visualizers/ArrayVisualizer';
import CodeBlock from '../components/CodeBlock';
import ProblemSection from '../components/ProblemSection';
import CheatSheet from '../components/CheatSheet';
import { listsProblems } from '../data/listsProblems';
import { listsCheatSheet } from '../data/cheatSheets';

function ListsVisualizer() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [highlightIndices, setHighlightIndices] = useState([]);
  const [compareIndices, setCompareIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [pointers, setPointers] = useState([]);
  const [swapIndices, setSwapIndices] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [mode, setMode] = useState('two-pointer');
  const intervalRef = useRef(null);

  const generateTwoPointerSteps = useCallback((arr) => {
    const s = [];
    let left = 0, right = arr.length - 1;
    s.push({ highlight: [], compare: [], sorted: [], pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }], swap: [], desc: 'Two pointers: L at start, R at end' });
    while (left < right) {
      s.push({ highlight: [left, right], compare: [], sorted: [], pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }], swap: [], desc: `Comparing arr[${left}]=${arr[left]} and arr[${right}]=${arr[right]}` });
      left++;
      right--;
      s.push({ highlight: [], compare: [], sorted: [], pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }], swap: [], desc: 'Move pointers inward' });
    }
    s.push({ highlight: Array.from({ length: arr.length }, (_, i) => i), compare: [], sorted: Array.from({ length: arr.length }, (_, i) => i), pointers: [], swap: [], desc: 'Done! Pointers have met.' });
    return s;
  }, []);

  const generateSlidingWindowSteps = useCallback((arr) => {
    const s = [];
    const k = 3;
    s.push({ highlight: [], compare: [], sorted: [], pointers: [], swap: [], desc: `Sliding window of size ${k}` });
    for (let i = 0; i <= arr.length - k; i++) {
      const window = Array.from({ length: k }, (_, j) => i + j);
      const sum = window.reduce((acc, idx) => acc + arr[idx], 0);
      s.push({ highlight: window, compare: [], sorted: [], pointers: [{ index: i, name: 'start', color: 'var(--accent-blue)' }, { index: i + k - 1, name: 'end', color: 'var(--accent-green)' }], swap: [], desc: `Window [${i}..${i + k - 1}], sum = ${sum}` });
    }
    s.push({ highlight: [], compare: [], sorted: Array.from({ length: arr.length }, (_, i) => i), pointers: [], swap: [], desc: 'Sliding window complete!' });
    return s;
  }, []);

  const generateSteps = useCallback((arr, m) => {
    if (m === 'sliding-window') return generateSlidingWindowSteps(arr);
    return generateTwoPointerSteps(arr);
  }, [generateTwoPointerSteps, generateSlidingWindowSteps]);

  useEffect(() => {
    setSteps(generateSteps(array, mode));
    setCurrentStep(0);
  }, [array, mode, generateSteps]);

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

  const step = steps[currentStep] || { highlight: [], compare: [], sorted: [], pointers: [], swap: [] };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button className={`mode-btn ${mode === 'two-pointer' ? 'active' : ''}`} onClick={() => setMode('two-pointer')}>Two Pointer</button>
        <button className={`mode-btn ${mode === 'sliding-window' ? 'active' : ''}`} onClick={() => setMode('sliding-window')}>Sliding Window</button>
      </div>
      <AnimationControls
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onStepForward={() => setCurrentStep(Math.min(currentStep + 1, steps.length - 1))}
        onStepBackward={() => setCurrentStep(Math.max(currentStep - 1, 0))}
        onReset={() => { setCurrentStep(0); setIsPlaying(false); }}
        speed={speed}
        onSpeedChange={setSpeed}
        currentStep={currentStep}
        totalSteps={steps.length}
        customInput={customInput}
        onCustomInputChange={setCustomInput}
        onCustomInputSubmit={() => {
          const nums = customInput.split(',').map(Number).filter(n => !isNaN(n));
          if (nums.length > 0) { setArray(nums); setCurrentStep(0); setIsPlaying(false); }
        }}
        inputPlaceholder="Enter numbers (comma-separated)"
      />
      <div className="visualizer-container">
        <ArrayVisualizer
          array={array}
          highlightIndices={step.highlight}
          compareIndices={step.compare}
          sortedIndices={step.sorted}
          pointers={step.pointers}
          swapIndices={step.swap}
        />
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginTop: '1rem' }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
}

export default function ListsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Lists (Arrays)</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        The most fundamental data structure in programming. Lists store ordered collections of items — and they show up in almost every coding interview.
      </p>

      {/* THEORY */}
      <section className="section">
        <div className="section-title"><h2>📖 Theory</h2></div>
        <h3>What is a List?</h3>
        <p>A list (or array) is like a row of numbered boxes. Each box holds one item, and you can find any box instantly by its number (called an "index"). In Python, lists are written with square brackets: <code>[1, 2, 3]</code>.</p>

        <h3>Why Lists Matter in Interviews</h3>
        <p>Lists are the #1 most common data structure in coding interviews. You'll use them in almost every problem — whether you're searching, sorting, or tracking data. Most interview problems that involve sequences of numbers, characters, or objects will use lists.</p>

        <h3>Key Operations & Time Complexity</h3>
        <p>Time complexity tells you how fast an operation is as your data grows. Think of it as a speed rating:</p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Access by index</strong> — <code>O(1)</code> — instant, like looking at box #5 directly</li>
          <li><strong>Append to end</strong> — <code>O(1)</code> — just add a new box at the end</li>
          <li><strong>Insert/delete at start or middle</strong> — <code>O(n)</code> — you have to shift all other boxes over</li>
          <li><strong>Search for a value</strong> — <code>O(n)</code> — worst case, check every box</li>
          <li><strong>Sort</strong> — <code>O(n log n)</code> — Python's built-in sort is very efficient</li>
        </ul>

        <h3>Common Patterns</h3>
        <p><strong>Two Pointers:</strong> Use two variables (often called "left" and "right") that move toward each other or in the same direction. Great for problems involving pairs or sorted arrays.</p>
        <p><strong>Sliding Window:</strong> Keep a "window" of elements and slide it across the array. Perfect for problems asking about subarrays of a certain size or condition.</p>
        <p><strong>Prefix Sum:</strong> Build a running total array so you can quickly find the sum of any subarray. Turns O(n) subarray sum queries into O(1).</p>
      </section>

      {/* CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Cheat Sheet</h2></div>
        <CheatSheet items={listsCheatSheet} />
      </section>

      {/* CODE EXAMPLES */}
      <section className="section">
        <div className="section-title"><h2>💻 Code Examples</h2></div>
        <CodeBlock title="Two Pointer Pattern — Finding a pair that sums to target" code={`def two_sum_sorted(arr, target):
    """Find two numbers in a sorted array that add up to target."""
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return [left, right]  # Found it!
        elif current_sum < target:
            left += 1   # Need bigger sum, move left pointer right
        else:
            right -= 1  # Need smaller sum, move right pointer left

    return []  # No pair found

# Example
print(two_sum_sorted([1, 3, 5, 7, 9], 8))  # [1, 3] → arr[1]+arr[3] = 3+5 = 8`} />

        <CodeBlock title="Sliding Window — Maximum sum subarray of size k" code={`def max_sum_subarray(arr, k):
    """Find the maximum sum of any k consecutive elements."""
    # First window
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # Slide the window: add new element, remove old element
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum

# Example
print(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))  # 9 (subarray [5, 1, 3])`} />

        <CodeBlock title="Prefix Sum — Range sum queries in O(1)" code={`def build_prefix_sum(arr):
    """Build prefix sum array for O(1) range sum queries."""
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

def range_sum(prefix, left, right):
    """Get sum of arr[left..right] in O(1)."""
    return prefix[right + 1] - prefix[left]

# Example
arr = [3, 1, 4, 1, 5, 9]
prefix = build_prefix_sum(arr)
print(range_sum(prefix, 1, 4))  # 11 (sum of [1, 4, 1, 5])`} />
      </section>

      {/* VISUALIZER */}
      <section className="section">
        <div className="section-title"><h2>🎬 Visualizer</h2></div>
        <p>Watch how two-pointer and sliding window techniques work on arrays. Use custom input to try your own data!</p>
        <ListsVisualizer />
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section">
        <div className="section-title"><h2>💡 Interview Tips</h2></div>
        <div className="tip-card">
          <h4>Two Pointer Pattern</h4>
          <p>Use when the array is sorted and you need to find pairs, triplets, or subarrays. Start with one pointer at each end and move them based on your condition. This turns O(n²) brute force into O(n).</p>
        </div>
        <div className="tip-card">
          <h4>Sliding Window Pattern</h4>
          <p>Use when you need the best/longest/shortest subarray meeting some condition. Expand the window by moving the right pointer, shrink it by moving the left pointer. Keeps track of the "current state" efficiently.</p>
        </div>
        <div className="tip-card">
          <h4>In-place Modification</h4>
          <p>Many interview problems ask you to modify an array "in-place" (without extra space). Use swap operations and careful pointer management. The "remove duplicates from sorted array" pattern is a classic example.</p>
        </div>
        <div className="tip-card">
          <h4>Common Mistakes</h4>
          <p>Off-by-one errors with indices. Forgetting that Python slicing is exclusive on the right (arr[0:3] gives indices 0,1,2). Modifying a list while iterating over it (use a copy or iterate backwards).</p>
        </div>
        <div className="tip-card">
          <h4>When to Choose Lists Over Other Structures</h4>
          <p>Use a list when you need ordered data, index-based access, or when the problem involves sequences/subarrays. If you need fast lookups by value, consider a set or dictionary instead.</p>
        </div>
      </section>

      {/* LEETCODE PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 LeetCode Problems (55)</h2></div>
        <ProblemSection problems={listsProblems} topic="lists" count={55} />
      </section>

      <style>{`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `}</style>
    </motion.div>
  );
}
