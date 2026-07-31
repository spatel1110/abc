import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimationControls from '../components/AnimationControls';
import StackVisualizer from '../visualizers/StackVisualizer';
import CodeBlock from '../components/CodeBlock';
import ProblemTable from '../components/ProblemTable';
import { stacksQueuesProblems } from '../data/stacksQueuesProblems';

function StackQueueVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [mode, setMode] = useState('stack');
  const intervalRef = useRef(null);

  const generateStackSteps = useCallback(() => {
    const s = [];
    let items = [];
    let id = 0;
    s.push({ items: [], operation: 'Empty stack — Last In, First Out (LIFO)', isQueue: false });
    // Push operations
    const values = [10, 20, 30, 40];
    for (const v of values) {
      items = [{ value: v, id: id++ }, ...items];
      s.push({ items: [...items], operation: `push(${v}) — added to top`, isQueue: false });
    }
    // Pop operations
    const popped1 = items[0].value;
    items = items.slice(1);
    s.push({ items: [...items], operation: `pop() → ${popped1} — removed from top`, isQueue: false });
    const popped2 = items[0].value;
    items = items.slice(1);
    s.push({ items: [...items], operation: `pop() → ${popped2} — removed from top`, isQueue: false });
    // Push one more
    items = [{ value: 50, id: id++ }, ...items];
    s.push({ items: [...items], operation: `push(50) — added to top`, isQueue: false });
    s.push({ items: [...items], operation: `peek() → ${items[0].value} — look at top without removing`, isQueue: false });
    return s;
  }, []);

  const generateQueueSteps = useCallback(() => {
    const s = [];
    let items = [];
    let id = 0;
    s.push({ items: [], operation: 'Empty queue — First In, First Out (FIFO)', isQueue: true });
    // Enqueue operations
    const values = ['A', 'B', 'C', 'D'];
    for (const v of values) {
      items = [...items, { value: v, id: id++ }];
      s.push({ items: [...items], operation: `enqueue("${v}") — added to rear`, isQueue: true });
    }
    // Dequeue operations
    const dq1 = items[0].value;
    items = items.slice(1);
    s.push({ items: [...items], operation: `dequeue() → "${dq1}" — removed from front`, isQueue: true });
    const dq2 = items[0].value;
    items = items.slice(1);
    s.push({ items: [...items], operation: `dequeue() → "${dq2}" — removed from front`, isQueue: true });
    items = [...items, { value: 'E', id: id++ }];
    s.push({ items: [...items], operation: `enqueue("E") — added to rear`, isQueue: true });
    s.push({ items: [...items], operation: `front() → "${items[0].value}" — peek at front`, isQueue: true });
    return s;
  }, []);

  const generateParenthesesSteps = useCallback(() => {
    const s = [];
    const input = '({[]})';
    let stack = [];
    let id = 0;
    s.push({ items: [], operation: `Validate: "${input}" — use stack for matching brackets`, isQueue: false });
    const matching = { ')': '(', ']': '[', '}': '{' };
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      if ('({['.includes(c)) {
        stack = [{ value: c, id: id++ }, ...stack];
        s.push({ items: [...stack], operation: `Push '${c}' — opening bracket at index ${i}`, isQueue: false });
      } else {
        if (stack.length > 0 && stack[0].value === matching[c]) {
          stack = stack.slice(1);
          s.push({ items: [...stack], operation: `Pop '${matching[c]}' — matches '${c}' at index ${i} ✓`, isQueue: false });
        }
      }
    }
    s.push({ items: [...stack], operation: stack.length === 0 ? 'Stack empty → Valid! ✓ All brackets matched' : 'Stack not empty → Invalid! ✗', isQueue: false });
    return s;
  }, []);

  const generateSteps = useCallback((m) => {
    switch (m) {
      case 'queue': return generateQueueSteps();
      case 'parentheses': return generateParenthesesSteps();
      default: return generateStackSteps();
    }
  }, [generateStackSteps, generateQueueSteps, generateParenthesesSteps]);

  useEffect(() => {
    setSteps(generateSteps(mode));
    setCurrentStep(0);
  }, [mode, generateSteps]);

  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) { setIsPlaying(false); return prev; }
          return prev + 1;
        });
      }, 1200 / speed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, steps.length]);

  const step = steps[currentStep] || { items: [], operation: '', isQueue: false };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button className={`mode-btn ${mode === 'stack' ? 'active' : ''}`} onClick={() => setMode('stack')}>Stack (LIFO)</button>
        <button className={`mode-btn ${mode === 'queue' ? 'active' : ''}`} onClick={() => setMode('queue')}>Queue (FIFO)</button>
        <button className={`mode-btn ${mode === 'parentheses' ? 'active' : ''}`} onClick={() => setMode('parentheses')}>Valid Parentheses</button>
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
        onCustomInputSubmit={() => { setCurrentStep(0); setIsPlaying(false); }}
        inputPlaceholder={mode === 'parentheses' ? 'Enter brackets e.g. ({[]})' : 'Enter values (comma-separated)'}
      />
      <div className="visualizer-container">
        <StackVisualizer
          items={step.items}
          operation={step.operation}
          isQueue={step.isQueue}
        />
      </div>
    </div>
  );
}

export default function StacksQueuesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Stacks & Queues</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Stacks and queues control the order you process things. A stack processes the newest item first (like a stack of plates). A queue processes the oldest item first (like a line at a store).
      </p>

      {/* THEORY */}
      <section className="section">
        <div className="section-title"><h2>📖 Theory</h2></div>
        <h3>Stack — Last In, First Out (LIFO)</h3>
        <p>Imagine a stack of plates: you always take from the top and add to the top. The last plate you put on is the first one you take off. That's LIFO — Last In, First Out.</p>
        <p>In programming, stacks are used for: undo operations, function call tracking, expression evaluation, and backtracking algorithms.</p>

        <h3>Queue — First In, First Out (FIFO)</h3>
        <p>Imagine a line at a coffee shop: the first person in line gets served first. That's FIFO — First In, First Out.</p>
        <p>In programming, queues are used for: BFS (breadth-first search), task scheduling, buffering, and any "process in order" scenarios.</p>

        <h3>Time Complexity</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Push/Enqueue</strong> — <code>O(1)</code> — add to top/rear instantly</li>
          <li><strong>Pop/Dequeue</strong> — <code>O(1)</code> — remove from top/front instantly</li>
          <li><strong>Peek</strong> — <code>O(1)</code> — look at top/front without removing</li>
          <li><strong>Search</strong> — <code>O(n)</code> — must check each element</li>
        </ul>

        <h3>Monotonic Stack — Advanced Pattern</h3>
        <p>A monotonic stack keeps its elements in sorted order (either always increasing or always decreasing). When you add a new element, you pop off everything that violates the order. This pattern solves "next greater element," "daily temperatures," and "largest rectangle" problems in O(n).</p>
      </section>

      {/* CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Cheat Sheet</h2></div>
        <div className="cheat-grid">
          <div className="cheat-item"><code>stack = []</code><p>Create a stack using a regular list</p></div>
          <div className="cheat-item"><code>stack.append(x)</code><p>Push x onto top of stack — O(1)</p></div>
          <div className="cheat-item"><code>stack.pop()</code><p>Pop and return top element — O(1)</p></div>
          <div className="cheat-item"><code>stack[-1]</code><p>Peek at top without removing</p></div>
          <div className="cheat-item"><code>len(stack) == 0</code><p>Check if stack is empty</p></div>
          <div className="cheat-item"><code>from collections import deque</code><p>Import deque for efficient queue</p></div>
          <div className="cheat-item"><code>q = deque()</code><p>Create a queue</p></div>
          <div className="cheat-item"><code>q.append(x)</code><p>Enqueue — add to rear — O(1)</p></div>
          <div className="cheat-item"><code>q.popleft()</code><p>Dequeue — remove from front — O(1)</p></div>
          <div className="cheat-item"><code>q[0]</code><p>Peek at front of queue</p></div>
          <div className="cheat-item"><code>q.appendleft(x)</code><p>Add to front (useful for deque)</p></div>
          <div className="cheat-item"><code>from queue import Queue</code><p>Thread-safe queue (for concurrency)</p></div>
        </div>
      </section>

      {/* CODE EXAMPLES */}
      <section className="section">
        <div className="section-title"><h2>💻 Code Examples</h2></div>
        <CodeBlock title="Valid Parentheses — Classic Stack Problem" code={`def is_valid_parentheses(s):
    """Check if brackets are properly matched and nested."""
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}

    for char in s:
        if char in '({[':
            stack.append(char)  # Push opening brackets
        elif char in ')}]':
            if not stack or stack[-1] != matching[char]:
                return False  # No match or stack empty
            stack.pop()  # Pop matching opening bracket

    return len(stack) == 0  # Stack should be empty

# Examples
print(is_valid_parentheses("({[]})"))  # True
print(is_valid_parentheses("([)]"))    # False`} />

        <CodeBlock title="Daily Temperatures — Monotonic Stack" code={`def daily_temperatures(temps):
    """For each day, find how many days until a warmer temperature."""
    n = len(temps)
    result = [0] * n
    stack = []  # Stack of indices (decreasing temperatures)

    for i in range(n):
        # Pop all days that are colder than today
        while stack and temps[i] > temps[stack[-1]]:
            prev_day = stack.pop()
            result[prev_day] = i - prev_day  # Days to wait
        stack.append(i)

    return result

# Example: [73,74,75,71,69,72,76,73]
# Result:  [1, 1, 4, 2, 1, 1, 0, 0]
print(daily_temperatures([73,74,75,71,69,72,76,73]))`} />

        <CodeBlock title="BFS with Queue — Level Order Traversal" code={`from collections import deque

def bfs_level_order(graph, start):
    """Breadth-first search using a queue."""
    visited = set([start])
    queue = deque([start])
    levels = []

    while queue:
        level_size = len(queue)
        current_level = []

        for _ in range(level_size):
            node = queue.popleft()  # Process front of queue
            current_level.append(node)

            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)  # Add to rear

        levels.append(current_level)

    return levels

# Example graph
graph = {'A': ['B','C'], 'B': ['D','E'], 'C': ['F'], 'D': [], 'E': [], 'F': []}
print(bfs_level_order(graph, 'A'))  # [['A'], ['B','C'], ['D','E','F']]`} />
      </section>

      {/* VISUALIZER */}
      <section className="section">
        <div className="section-title"><h2>🎬 Visualizer</h2></div>
        <p>Watch push/pop operations on a stack, enqueue/dequeue on a queue, and see how parentheses matching uses a stack in real-time!</p>
        <StackQueueVisualizer />
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section">
        <div className="section-title"><h2>💡 Interview Tips</h2></div>
        <div className="tip-card">
          <h4>When to Use a Stack</h4>
          <p>Matching/nesting problems (parentheses, HTML tags). "Next greater/smaller element" problems. Undo functionality. Expression evaluation. DFS (depth-first search). Anything where you process the most recent item first.</p>
        </div>
        <div className="tip-card">
          <h4>When to Use a Queue</h4>
          <p>BFS (breadth-first search). Level-order processing. Task scheduling in order. Sliding window maximum (with deque). Any "process in the order received" scenario.</p>
        </div>
        <div className="tip-card">
          <h4>Monotonic Stack Pattern</h4>
          <p>When you need the "next greater element" or "previous smaller element" for every item in an array, use a monotonic stack. It processes all elements in O(n) total — each element is pushed and popped at most once.</p>
        </div>
        <div className="tip-card">
          <h4>Common Mistakes</h4>
          <p>Popping from an empty stack (always check <code>if stack:</code> first). Using <code>list.pop(0)</code> for a queue (that's O(n) — use <code>deque.popleft()</code> for O(1)). Forgetting to check the stack at the end (leftover items often mean invalid input).</p>
        </div>
        <div className="tip-card">
          <h4>Stack vs Queue Decision</h4>
          <p>Ask yourself: "Do I need the most RECENT item (stack/DFS) or the OLDEST item (queue/BFS)?" That single question usually tells you which to use.</p>
        </div>
      </section>

      {/* LEETCODE PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 LeetCode Problems (29)</h2></div>
        <ProblemTable problems={stacksQueuesProblems} />
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
