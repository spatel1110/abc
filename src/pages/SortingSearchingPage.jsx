import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimationControls from '../components/AnimationControls';
import SortingVisualizer from '../visualizers/SortingVisualizer';
import CodeBlock from '../components/CodeBlock';
import ProblemSection from '../components/ProblemSection';
import CheatSheet from '../components/CheatSheet';
import { sortingProblems } from '../data/sortingProblems';
import { sortingCheatSheet } from '../data/cheatSheets';

function SortingSearchingVisualizer() {
  const [originalArray, setOriginalArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [algorithm, setAlgorithm] = useState('bubble');
  const intervalRef = useRef(null);

  const generateBubbleSortSteps = useCallback((arr) => {
    const s = [];
    const a = [...arr];
    const sorted = new Set();
    s.push({ array: [...a], compare: [], swap: [], sorted: [], desc: 'Bubble Sort: repeatedly swap adjacent elements if in wrong order' });
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        s.push({ array: [...a], compare: [j, j + 1], swap: [], sorted: [...sorted], desc: `Compare arr[${j}]=${a[j]} and arr[${j + 1}]=${a[j + 1]}` });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          s.push({ array: [...a], compare: [], swap: [j, j + 1], sorted: [...sorted], desc: `Swap! ${a[j + 1]} > ${a[j]} → swapped` });
        }
      }
      sorted.add(a.length - i - 1);
    }
    s.push({ array: [...a], compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: 'Sorted! Bubble sort complete.' });
    return s;
  }, []);

  const generateSelectionSortSteps = useCallback((arr) => {
    const s = [];
    const a = [...arr];
    const sorted = new Set();
    s.push({ array: [...a], compare: [], swap: [], sorted: [], desc: 'Selection Sort: find the minimum and place it at the front' });
    for (let i = 0; i < a.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) {
        s.push({ array: [...a], compare: [minIdx, j], swap: [], sorted: [...sorted], desc: `Finding minimum: comparing arr[${minIdx}]=${a[minIdx]} with arr[${j}]=${a[j]}` });
        if (a[j] < a[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        [a[i], a[minIdx]] = [a[minIdx], a[i]];
        s.push({ array: [...a], compare: [], swap: [i, minIdx], sorted: [...sorted], desc: `Swap arr[${i}] and arr[${minIdx}] — place minimum at position ${i}` });
      }
      sorted.add(i);
    }
    s.push({ array: [...a], compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: 'Sorted! Selection sort complete.' });
    return s;
  }, []);

  const generateInsertionSortSteps = useCallback((arr) => {
    const s = [];
    const a = [...arr];
    const sorted = new Set([0]);
    s.push({ array: [...a], compare: [], swap: [], sorted: [0], desc: 'Insertion Sort: build sorted portion one element at a time' });
    for (let i = 1; i < a.length; i++) {
      let j = i;
      s.push({ array: [...a], compare: [j], swap: [], sorted: [...sorted], desc: `Insert arr[${i}]=${a[i]} into sorted portion` });
      while (j > 0 && a[j] < a[j - 1]) {
        [a[j], a[j - 1]] = [a[j - 1], a[j]];
        s.push({ array: [...a], compare: [], swap: [j, j - 1], sorted: [...sorted], desc: `Shift: swap arr[${j}] and arr[${j - 1}]` });
        j--;
      }
      sorted.add(i);
    }
    s.push({ array: [...a], compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: 'Sorted! Insertion sort complete.' });
    return s;
  }, []);

  const generateQuickSortSteps = useCallback((arr) => {
    const s = [];
    const a = [...arr];
    const sortedSet = new Set();
    s.push({ array: [...a], compare: [], swap: [], sorted: [], pivot: -1, desc: 'Quick Sort: pick a pivot and partition around it' });

    function quickSort(low, high) {
      if (low >= high) {
        if (low === high) sortedSet.add(low);
        return;
      }
      const pivotVal = a[high];
      s.push({ array: [...a], compare: [], swap: [], sorted: [...sortedSet], pivot: high, desc: `Pivot = arr[${high}] = ${pivotVal}` });
      let i = low;
      for (let j = low; j < high; j++) {
        s.push({ array: [...a], compare: [j, high], swap: [], sorted: [...sortedSet], pivot: high, desc: `Compare arr[${j}]=${a[j]} with pivot ${pivotVal}` });
        if (a[j] < pivotVal) {
          [a[i], a[j]] = [a[j], a[i]];
          if (i !== j) s.push({ array: [...a], compare: [], swap: [i, j], sorted: [...sortedSet], pivot: high, desc: `${a[j]} < ${pivotVal}, swap to position ${i}` });
          i++;
        }
      }
      [a[i], a[high]] = [a[high], a[i]];
      s.push({ array: [...a], compare: [], swap: [i, high], sorted: [...sortedSet], pivot: i, desc: `Place pivot at position ${i}` });
      sortedSet.add(i);
      quickSort(low, i - 1);
      quickSort(i + 1, high);
    }
    quickSort(0, a.length - 1);
    s.push({ array: [...a], compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), pivot: -1, desc: 'Sorted! Quick sort complete.' });
    return s;
  }, []);

  const generateBinarySearchSteps = useCallback((arr) => {
    const s = [];
    const a = [...arr].sort((x, y) => x - y);
    const target = a[Math.floor(a.length / 3)]; // Pick a target that exists
    let left = 0, right = a.length - 1;
    s.push({ array: a, compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: `Binary Search: find ${target} in sorted array` });
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      s.push({ array: a, compare: [mid], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), highlight: Array.from({ length: right - left + 1 }, (_, i) => left + i), desc: `Check middle: arr[${mid}]=${a[mid]}, searching in [${left}..${right}]` });
      if (a[mid] === target) {
        s.push({ array: a, compare: [], swap: [mid], sorted: Array.from({ length: a.length }, (_, i) => i), desc: `Found! arr[${mid}] = ${target} ✓` });
        break;
      } else if (a[mid] < target) {
        left = mid + 1;
        s.push({ array: a, compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: `${a[mid]} < ${target}, search right half` });
      } else {
        right = mid - 1;
        s.push({ array: a, compare: [], swap: [], sorted: Array.from({ length: a.length }, (_, i) => i), desc: `${a[mid]} > ${target}, search left half` });
      }
    }
    return s;
  }, []);

  const generateSteps = useCallback((arr, algo) => {
    switch (algo) {
      case 'selection': return generateSelectionSortSteps(arr);
      case 'insertion': return generateInsertionSortSteps(arr);
      case 'quick': return generateQuickSortSteps(arr);
      case 'binary-search': return generateBinarySearchSteps(arr);
      default: return generateBubbleSortSteps(arr);
    }
  }, [generateBubbleSortSteps, generateSelectionSortSteps, generateInsertionSortSteps, generateQuickSortSteps, generateBinarySearchSteps]);

  useEffect(() => {
    setSteps(generateSteps(originalArray, algorithm));
    setCurrentStep(0);
  }, [originalArray, algorithm, generateSteps]);

  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) { setIsPlaying(false); return prev; }
          return prev + 1;
        });
      }, 800 / speed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, steps.length]);

  const step = steps[currentStep] || { array: originalArray, compare: [], swap: [], sorted: [], desc: '' };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button className={`mode-btn ${algorithm === 'bubble' ? 'active' : ''}`} onClick={() => setAlgorithm('bubble')}>Bubble Sort</button>
        <button className={`mode-btn ${algorithm === 'selection' ? 'active' : ''}`} onClick={() => setAlgorithm('selection')}>Selection Sort</button>
        <button className={`mode-btn ${algorithm === 'insertion' ? 'active' : ''}`} onClick={() => setAlgorithm('insertion')}>Insertion Sort</button>
        <button className={`mode-btn ${algorithm === 'quick' ? 'active' : ''}`} onClick={() => setAlgorithm('quick')}>Quick Sort</button>
        <button className={`mode-btn ${algorithm === 'binary-search' ? 'active' : ''}`} onClick={() => setAlgorithm('binary-search')}>Binary Search</button>
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
          if (nums.length > 0) { setOriginalArray(nums); setCurrentStep(0); setIsPlaying(false); }
        }}
        inputPlaceholder="Enter numbers (comma-separated)"
      />
      <div className="visualizer-container">
        <SortingVisualizer
          array={step.array}
          compareIndices={step.compare}
          swapIndices={step.swap}
          sortedIndices={step.sorted || []}
          pivotIndex={step.pivot}
          highlightIndices={step.highlight || []}
        />
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginTop: '1rem' }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
}

export default function SortingSearchingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Sorting & Searching</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Sorting organizes data so you can find things faster. Searching finds specific items efficiently. Together, they form the backbone of almost every algorithm — and interviewers love asking about them.
      </p>

      {/* THEORY */}
      <section className="section">
        <div className="section-title"><h2>📖 Theory</h2></div>
        <h3>Why Sorting & Searching?</h3>
        <p>Sorting makes searching faster. Once data is sorted, you can use binary search to find any item in O(log n) time instead of O(n). Many interview problems become much simpler once you sort the input first.</p>

        <h3>Sorting Algorithms Comparison</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2.2' }}>
          <li><strong>Bubble Sort</strong> — O(n²) — swap adjacent elements repeatedly. Simple but slow. Rarely used in practice.</li>
          <li><strong>Selection Sort</strong> — O(n²) — find minimum, place it at front, repeat. Also slow, but does fewer swaps.</li>
          <li><strong>Insertion Sort</strong> — O(n²) average, O(n) best — builds sorted portion one element at a time. Fast for nearly-sorted data.</li>
          <li><strong>Merge Sort</strong> — O(n log n) — divide array in half, sort each half, merge them. Always O(n log n) but uses O(n) extra space.</li>
          <li><strong>Quick Sort</strong> — O(n log n) average — pick a pivot, partition elements around it, recurse. Fastest in practice for most data.</li>
          <li><strong>Heap Sort</strong> — O(n log n) — uses a heap data structure. O(1) extra space but cache-unfriendly.</li>
        </ul>

        <h3>Binary Search — The Key Insight</h3>
        <p>Binary search works by cutting the search space in half each step. Start with the middle element. If it's your target, you're done. If it's too small, search the right half. If it's too big, search the left half. This gives you O(log n) — finding an item in a billion elements takes only ~30 steps!</p>
      </section>

      {/* CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Cheat Sheet</h2></div>
        <CheatSheet items={sortingCheatSheet} />
      </section>

      {/* CODE EXAMPLES */}
      <section className="section">
        <div className="section-title"><h2>💻 Code Examples</h2></div>
        <CodeBlock title="Binary Search — Standard Template" code={`def binary_search(arr, target):
    """Find target in sorted array. Return index or -1."""
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid         # Found it!
        elif arr[mid] < target:
            left = mid + 1     # Target is in right half
        else:
            right = mid - 1    # Target is in left half

    return -1  # Not found

# Example
arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))   # 3 (index of 7)`} />

        <CodeBlock title="Merge Intervals — Sort + Sweep" code={`def merge_intervals(intervals):
    """Merge overlapping intervals."""
    intervals.sort(key=lambda x: x[0])  # Sort by start time
    merged = [intervals[0]]

    for start, end in intervals[1:]:
        if start <= merged[-1][1]:  # Overlaps with last merged
            merged[-1][1] = max(merged[-1][1], end)  # Extend
        else:
            merged.append([start, end])  # No overlap, add new

    return merged

# Example
print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))
# [[1,6],[8,10],[15,18]]`} />

        <CodeBlock title="Kth Largest Element using Heap" code={`import heapq

def kth_largest(nums, k):
    """Find the kth largest element efficiently."""
    # Use a min-heap of size k
    # The top of the heap will be the kth largest
    heap = nums[:k]
    heapq.heapify(heap)

    for num in nums[k:]:
        if num > heap[0]:  # Bigger than smallest in heap
            heapq.heapreplace(heap, num)  # Remove min, add num

    return heap[0]  # kth largest

# Example
print(kth_largest([3,2,1,5,6,4], 2))  # 5`} />
      </section>

      {/* VISUALIZER */}
      <section className="section">
        <div className="section-title"><h2>🎬 Visualizer</h2></div>
        <p>Watch sorting algorithms work step-by-step! Compare how Bubble, Selection, Insertion, and Quick Sort organize data differently.</p>
        <SortingSearchingVisualizer />
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section">
        <div className="section-title"><h2>💡 Interview Tips</h2></div>
        <div className="tip-card">
          <h4>When to Sort First</h4>
          <p>If a problem involves finding pairs, detecting overlaps, or needs elements "in order," sorting the input first often simplifies the solution dramatically. Sorting costs O(n log n) but can reduce the rest from O(n²) to O(n).</p>
        </div>
        <div className="tip-card">
          <h4>Binary Search Template</h4>
          <p>Most binary search problems follow the same pattern: define a condition, and find the boundary where the condition switches from false to true. Practice the template until it's automatic: while left &lt;= right, check mid, adjust left or right.</p>
        </div>
        <div className="tip-card">
          <h4>Heap for "K-th" Problems</h4>
          <p>Any problem asking for "kth largest," "kth smallest," "top k elements," or "median" — think heap immediately. A min-heap of size k gives you the kth largest in O(n log k) time.</p>
        </div>
        <div className="tip-card">
          <h4>Common Mistakes</h4>
          <p>Off-by-one in binary search (use &lt;= not &lt; for inclusive bounds). Forgetting that Python's heapq is a min-heap (negate values for max-heap). Not handling duplicates in binary search (bisect_left vs bisect_right).</p>
        </div>
      </section>

      {/* LEETCODE PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 LeetCode Problems (29)</h2></div>
        <ProblemSection problems={sortingProblems} topic="sorting" count={29} />
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
