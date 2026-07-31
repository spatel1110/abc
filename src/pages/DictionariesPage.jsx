import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimationControls from '../components/AnimationControls';
import HashMapVisualizer from '../visualizers/HashMapVisualizer';
import CodeBlock from '../components/CodeBlock';
import ProblemSection from '../components/ProblemSection';
import { dictionariesProblems } from '../data/dictionariesProblems';

function DictVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [mode, setMode] = useState('bucket');
  const intervalRef = useRef(null);

  const NUM_BUCKETS = 7;

  const hashFn = (key) => {
    let hash = 0;
    const str = String(key);
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % NUM_BUCKETS;
    }
    return hash;
  };

  const generateBucketSteps = useCallback(() => {
    const entries = [
      { key: 'apple', value: 5 },
      { key: 'banana', value: 3 },
      { key: 'cherry', value: 8 },
      { key: 'date', value: 2 },
      { key: 'grape', value: 7 },
    ];
    const s = [];
    const buckets = Array.from({ length: NUM_BUCKETS }, () => ({ items: [] }));
    s.push({ buckets: JSON.parse(JSON.stringify(buckets)), highlight: -1, operation: 'Empty hash table with 7 buckets' });

    for (const entry of entries) {
      const idx = hashFn(entry.key);
      buckets[idx].items.push(entry);
      s.push({
        buckets: JSON.parse(JSON.stringify(buckets)),
        highlight: idx,
        operation: `hash("${entry.key}") = ${idx} → Insert {${entry.key}: ${entry.value}} into bucket ${idx}`
      });
    }
    s.push({ buckets: JSON.parse(JSON.stringify(buckets)), highlight: -1, operation: 'All items inserted! Notice how collisions chain in the same bucket.' });
    return s;
  }, []);

  const generateSimpleSteps = useCallback(() => {
    const s = [];
    const entries = [];
    const ops = [
      { key: 'name', value: '"Alice"' },
      { key: 'age', value: '25' },
      { key: 'city', value: '"NYC"' },
      { key: 'job', value: '"Engineer"' },
    ];
    s.push({ entries: [], highlight: -1, operation: 'Empty dictionary: {}' });
    for (let i = 0; i < ops.length; i++) {
      entries.push(ops[i]);
      s.push({ entries: [...entries], highlight: i, operation: `d["${ops[i].key}"] = ${ops[i].value}` });
    }
    // Lookup
    s.push({ entries: [...entries], highlight: 1, operation: 'd["age"] → 25 (O(1) lookup!)' });
    // Delete
    const afterDel = entries.filter(e => e.key !== 'city');
    s.push({ entries: afterDel, highlight: -1, operation: 'del d["city"] — removed!' });
    return s;
  }, []);

  useEffect(() => {
    setSteps(mode === 'bucket' ? generateBucketSteps() : generateSimpleSteps());
    setCurrentStep(0);
  }, [mode, generateBucketSteps, generateSimpleSteps]);

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

  const step = steps[currentStep] || {};

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button className={`mode-btn ${mode === 'bucket' ? 'active' : ''}`} onClick={() => setMode('bucket')}>Hash Buckets (Internal)</button>
        <button className={`mode-btn ${mode === 'simple' ? 'active' : ''}`} onClick={() => setMode('simple')}>Key-Value View</button>
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
          // Parse key:value pairs
          setCurrentStep(0); setIsPlaying(false);
        }}
        inputPlaceholder="Enter key:value pairs (e.g. a:1,b:2,c:3)"
      />
      <div className="visualizer-container">
        {mode === 'bucket' ? (
          <HashMapVisualizer
            buckets={step.buckets || Array.from({ length: NUM_BUCKETS }, () => ({ items: [] }))}
            highlightBucket={step.highlight}
            operation={step.operation}
            mode="bucket"
          />
        ) : (
          <HashMapVisualizer
            buckets={step.entries || []}
            highlightBucket={step.highlight}
            operation={step.operation}
            mode="simple"
          />
        )}
      </div>
    </div>
  );
}

export default function DictionariesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Dictionaries (Hash Maps)</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Dictionaries give you instant lookups. They map keys to values, and finding any value takes O(1) time on average — making them the go-to tool for counting, grouping, and caching.
      </p>

      {/* THEORY */}
      <section className="section">
        <div className="section-title"><h2>📖 Theory</h2></div>
        <h3>What is a Dictionary?</h3>
        <p>A dictionary (also called a hash map or hash table) stores key-value pairs. Think of it like a real dictionary: you look up a word (the key) and get its definition (the value). In Python, it's written as <code>{`{"apple": 5, "banana": 3}`}</code>.</p>

        <h3>How Hashing Works (Simple Explanation)</h3>
        <p>When you add a key, Python runs it through a "hash function" — a formula that converts the key into a number. That number tells Python which "bucket" (storage slot) to put the value in. When you look up that key later, Python runs the same formula, jumps straight to the right bucket, and returns the value. That's why lookups are so fast!</p>

        <h3>Collisions</h3>
        <p>Sometimes two different keys hash to the same bucket number. This is called a "collision." Python handles this by chaining — storing multiple items in the same bucket as a linked list. This is rare with a good hash function, but it's why worst-case lookup is O(n) instead of O(1).</p>

        <h3>Time Complexity</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Insert / Lookup / Delete</strong> — <code>O(1)</code> average — near-instant!</li>
          <li><strong>Iterate all items</strong> — <code>O(n)</code> — must visit every pair</li>
          <li><strong>Space</strong> — <code>O(n)</code> — stores all key-value pairs</li>
        </ul>
      </section>

      {/* CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Cheat Sheet</h2></div>
        <div className="cheat-grid">
          <div className="cheat-item"><code>d[key] = value</code><p>Set pair → <span className="cheat-ex">d={}; d["a"]=1 → {'{'}'a':1{'}'}</span></p></div>
          <div className="cheat-item"><code>d.get(key, default)</code><p>Safe get → <span className="cheat-ex">{'{}' }.get("x",0) → 0 (no KeyError)</span></p></div>
          <div className="cheat-item"><code>d.keys()</code><p>All keys → <span className="cheat-ex">{'{'}1:"a",2:"b"{'}'}.keys() → [1,2]</span></p></div>
          <div className="cheat-item"><code>d.values()</code><p>All values → <span className="cheat-ex">{'{'}1:"a",2:"b"{'}'}.values() → ['a','b']</span></p></div>
          <div className="cheat-item"><code>d.items()</code><p>Key-value pairs → <span className="cheat-ex">{'{'}1:"a"{'}'}.items() → [(1,'a')]</span></p></div>
          <div className="cheat-item"><code>key in d</code><p>Check exists O(1) → <span className="cheat-ex">"a" in {'{'}"a":1{'}'} → True</span></p></div>
          <div className="cheat-item"><code>del d[key]</code><p>Remove pair → <span className="cheat-ex">del d["a"] removes key 'a'</span></p></div>
          <div className="cheat-item"><code>d.setdefault(key, val)</code><p>Get or set → <span className="cheat-ex">d.setdefault("x",[]).append(1)</span></p></div>
          <div className="cheat-item"><code>Counter(list)</code><p>Count items → <span className="cheat-ex">Counter([1,1,2]) → {'{'}1:2, 2:1{'}'}</span></p></div>
          <div className="cheat-item"><code>defaultdict(int)</code><p>Auto-default → <span className="cheat-ex">d=defaultdict(int); d["x"]+=1 → {'{'}x:1{'}'}</span></p></div>
          <div className="cheat-item"><code>d.pop(key)</code><p>Remove & return → <span className="cheat-ex">{'{'}1:2{'}'}.pop(1) → 2, d={'{'}{'}'}</span></p></div>
          <div className="cheat-item"><code>d.update(other)</code><p>Merge → <span className="cheat-ex">{'{'}1:1{'}'}.update({'{'}2:2{'}'}) → {'{'}1:1,2:2{'}'}</span></p></div>
          <div className="cheat-item"><code>{`{k:v for k,v in ...}`}</code><p>Dict comp → <span className="cheat-ex">{'{'}x:x*2 for x in [1,2]{'}'} → {'{'}1:2,2:4{'}'}</span></p></div>
          <div className="cheat-item"><code>len(d)</code><p>Count pairs → <span className="cheat-ex">len({'{'}"a":1,"b":2{'}'}) → 2</span></p></div>
        </div>
      </section>

      {/* CODE EXAMPLES */}
      <section className="section">
        <div className="section-title"><h2>💻 Code Examples</h2></div>
        <CodeBlock title="Two Sum — Classic Hash Map Pattern" code={`def two_sum(nums, target):
    """Find indices of two numbers that add up to target."""
    seen = {}  # value → index

    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i

    return []

# Example: target=9, nums=[2, 7, 11, 15]
# Step 1: seen={2:0}, looking for 7 → not found
# Step 2: seen={2:0, 7:1}, looking for 2 → found at index 0!
print(two_sum([2, 7, 11, 15], 9))  # [0, 1]`} />

        <CodeBlock title="Group Anagrams — Sorting as Hash Key" code={`from collections import defaultdict

def group_anagrams(strs):
    """Group words that are anagrams of each other."""
    groups = defaultdict(list)

    for word in strs:
        # Sort the word to create a "signature"
        # All anagrams have the same sorted form
        key = tuple(sorted(word))
        groups[key].append(word)

    return list(groups.values())

# Example
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(words))
# [["eat","tea","ate"], ["tan","nat"], ["bat"]]`} />

        <CodeBlock title="Frequency Counting with Counter" code={`from collections import Counter

def top_k_frequent(nums, k):
    """Find the k most frequent elements."""
    count = Counter(nums)  # {element: frequency}
    # most_common returns [(element, count), ...] sorted by frequency
    return [elem for elem, freq in count.most_common(k)]

# Example
print(top_k_frequent([1,1,1,2,2,3], 2))  # [1, 2]`} />
      </section>

      {/* VISUALIZER */}
      <section className="section">
        <div className="section-title"><h2>🎬 Visualizer</h2></div>
        <p>Watch how hash maps work internally! See hashing, bucket placement, and collisions in real-time.</p>
        <DictVisualizer />
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section">
        <div className="section-title"><h2>💡 Interview Tips</h2></div>
        <div className="tip-card">
          <h4>The "Complement" Pattern</h4>
          <p>Many problems ask "find two things that satisfy X." Store what you've seen so far in a dict, and for each new element, check if its "complement" (the thing you need) is already in the dict. This is the Two Sum pattern — it works for many variations.</p>
        </div>
        <div className="tip-card">
          <h4>Frequency Counting</h4>
          <p>When a problem involves counting occurrences, duplicates, or "most/least frequent," immediately think <code>Counter</code> or a frequency dict. It's the fastest way to aggregate data.</p>
        </div>
        <div className="tip-card">
          <h4>Using Dict as a Cache</h4>
          <p>If you're computing the same thing multiple times (recursion, overlapping subproblems), store results in a dict. This is memoization — it can turn exponential solutions into polynomial ones.</p>
        </div>
        <div className="tip-card">
          <h4>Common Mistakes</h4>
          <p>Using a list as a dict key (lists aren't hashable — use tuples instead). Forgetting <code>d[key]</code> raises KeyError if key is missing (use <code>d.get(key, default)</code>). Not considering that dict iteration order is insertion order in Python 3.7+.</p>
        </div>
        <div className="tip-card">
          <h4>When to Choose Dict Over List</h4>
          <p>Use a dict when you need fast lookups by some key, counting, or mapping relationships. Use a list when you need ordered access by index or when the data is naturally sequential.</p>
        </div>
      </section>

      {/* LEETCODE PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 LeetCode Problems (28)</h2></div>
        <ProblemSection problems={dictionariesProblems} topic="dictionaries" count={28} />
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
