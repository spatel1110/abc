import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimationControls from '../components/AnimationControls';
import ArrayVisualizer from '../visualizers/ArrayVisualizer';
import CodeBlock from '../components/CodeBlock';
import ProblemSection from '../components/ProblemSection';
import { stringsProblems } from '../data/stringsProblems';

function StringsVisualizer() {
  const [str, setStr] = useState('abcabcbb');
  const [highlightIndices, setHighlightIndices] = useState([]);
  const [pointers, setPointers] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [mode, setMode] = useState('palindrome');
  const intervalRef = useRef(null);

  const generatePalindromeSteps = useCallback((s) => {
    const steps = [];
    let left = 0, right = s.length - 1;
    steps.push({ highlight: [], pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }], desc: 'Check if string is a palindrome: compare from both ends' });
    while (left < right) {
      if (s[left] === s[right]) {
        steps.push({ highlight: [left, right], pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }], desc: `'${s[left]}' == '${s[right]}' ✓ Match!` });
      } else {
        steps.push({ highlight: [left, right], pointers: [{ index: left, name: 'L', color: 'var(--accent-red)' }, { index: right, name: 'R', color: 'var(--accent-red)' }], desc: `'${s[left]}' != '${s[right]}' ✗ Not a palindrome!` });
        break;
      }
      left++;
      right--;
    }
    if (left >= right) {
      steps.push({ highlight: Array.from({ length: s.length }, (_, i) => i), pointers: [], desc: 'It IS a palindrome! All characters matched.' });
    }
    return steps;
  }, []);

  const generateSlidingWindowSteps = useCallback((s) => {
    const steps = [];
    const charSet = new Set();
    let left = 0, maxLen = 0, maxStart = 0;
    steps.push({ highlight: [], pointers: [], desc: 'Find longest substring without repeating characters' });

    for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.add(s[right]);
      const window = Array.from({ length: right - left + 1 }, (_, i) => left + i);
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        maxStart = left;
      }
      steps.push({
        highlight: window,
        pointers: [{ index: left, name: 'L', color: 'var(--accent-blue)' }, { index: right, name: 'R', color: 'var(--accent-green)' }],
        desc: `Window: "${s.slice(left, right + 1)}" (length ${right - left + 1}), max so far: ${maxLen}`
      });
    }
    const finalWindow = Array.from({ length: maxLen }, (_, i) => maxStart + i);
    steps.push({ highlight: finalWindow, pointers: [], desc: `Done! Longest substring: "${s.slice(maxStart, maxStart + maxLen)}" (length ${maxLen})` });
    return steps;
  }, []);

  const generateSteps = useCallback((s, m) => {
    if (m === 'sliding-window') return generateSlidingWindowSteps(s);
    return generatePalindromeSteps(s);
  }, [generatePalindromeSteps, generateSlidingWindowSteps]);

  useEffect(() => {
    setSteps(generateSteps(str, mode));
    setCurrentStep(0);
  }, [str, mode, generateSteps]);

  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) { setIsPlaying(false); return prev; }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, steps.length]);

  const step = steps[currentStep] || { highlight: [], pointers: [], desc: '' };
  const chars = str.split('');

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button className={`mode-btn ${mode === 'palindrome' ? 'active' : ''}`} onClick={() => setMode('palindrome')}>Palindrome Check</button>
        <button className={`mode-btn ${mode === 'sliding-window' ? 'active' : ''}`} onClick={() => setMode('sliding-window')}>Longest Unique Substring</button>
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
        onCustomInputSubmit={() => { if (customInput.trim()) { setStr(customInput.trim()); setCurrentStep(0); setIsPlaying(false); } }}
        inputPlaceholder="Enter a string"
      />
      <div className="visualizer-container">
        <ArrayVisualizer
          array={chars}
          highlightIndices={step.highlight}
          pointers={step.pointers}
        />
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginTop: '1rem' }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
}

export default function StringsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Strings</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Strings are sequences of characters. They look simple, but string problems in interviews test pattern matching, two-pointer techniques, and sliding window — some of the trickiest patterns to master.
      </p>

      {/* THEORY */}
      <section className="section">
        <div className="section-title"><h2>📖 Theory</h2></div>
        <h3>What is a String?</h3>
        <p>A string is a sequence of characters — letters, numbers, symbols, or spaces. In Python, strings are <strong>immutable</strong>, meaning once you create one, you can't change individual characters. You have to create a new string instead.</p>

        <h3>Why Strings Matter in Interviews</h3>
        <p>String problems test your ability to work with sequences efficiently. They combine array techniques (two pointers, sliding window) with character-specific tricks (ASCII values, frequency counting). About 25% of interview questions involve strings.</p>

        <h3>Key Facts About Python Strings</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Immutable</strong> — you can't do <code>s[0] = 'x'</code>. Convert to list first: <code>list(s)</code></li>
          <li><strong>Indexing</strong> — <code>s[0]</code> is first char, <code>s[-1]</code> is last char</li>
          <li><strong>Slicing</strong> — <code>s[1:4]</code> gives characters at index 1, 2, 3</li>
          <li><strong>Concatenation</strong> — <code>s1 + s2</code> creates a new string (O(n) each time!)</li>
          <li><strong>Comparison</strong> — strings compare character by character (lexicographic order)</li>
        </ul>

        <h3>Time Complexity Traps</h3>
        <p>Building strings by concatenation (<code>s += char</code>) in a loop is O(n²) because each concatenation creates a new string. Instead, collect characters in a list and <code>"".join(list)</code> at the end — this is O(n).</p>
      </section>

      {/* CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Cheat Sheet</h2></div>
        <div className="cheat-grid">
          <div className="cheat-item"><code>s.split(sep)</code><p>Split string into list by separator</p></div>
          <div className="cheat-item"><code>sep.join(list)</code><p>Join list items into one string with separator</p></div>
          <div className="cheat-item"><code>s.strip()</code><p>Remove leading/trailing whitespace</p></div>
          <div className="cheat-item"><code>s.lower() / s.upper()</code><p>Convert to lowercase / uppercase</p></div>
          <div className="cheat-item"><code>s.replace(old, new)</code><p>Replace all occurrences of old with new</p></div>
          <div className="cheat-item"><code>s.find(sub)</code><p>Find index of substring (-1 if not found)</p></div>
          <div className="cheat-item"><code>s.startswith(prefix)</code><p>Check if string starts with prefix</p></div>
          <div className="cheat-item"><code>s.isalpha() / s.isdigit()</code><p>Check if all chars are letters / digits</p></div>
          <div className="cheat-item"><code>s.isalnum()</code><p>Check if all characters are alphanumeric</p></div>
          <div className="cheat-item"><code>s[::-1]</code><p>Reverse the string</p></div>
          <div className="cheat-item"><code>ord(c) / chr(n)</code><p>Character ↔ ASCII number conversion</p></div>
          <div className="cheat-item"><code>f"text &#123;var&#125;"</code><p>F-string: embed variables in strings</p></div>
          <div className="cheat-item"><code>s.count(sub)</code><p>Count occurrences of substring</p></div>
          <div className="cheat-item"><code>s.zfill(width)</code><p>Pad with zeros on the left</p></div>
        </div>
      </section>

      {/* CODE EXAMPLES */}
      <section className="section">
        <div className="section-title"><h2>💻 Code Examples</h2></div>
        <CodeBlock title="Palindrome Check — Two Pointer" code={`def is_palindrome(s):
    """Check if a string reads the same forwards and backwards."""
    # Clean the string: only keep letters/numbers, lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True

# Example
print(is_palindrome("A man, a plan, a canal: Panama"))  # True`} />

        <CodeBlock title="Longest Substring Without Repeating Characters" code={`def longest_unique_substring(s):
    """Find length of longest substring with all unique characters."""
    char_set = set()
    left = 0
    max_length = 0

    for right in range(len(s)):
        # Shrink window until no duplicate
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1

        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)

    return max_length

# Example
print(longest_unique_substring("abcabcbb"))  # 3 ("abc")`} />

        <CodeBlock title="Anagram Check using Frequency Count" code={`from collections import Counter

def is_anagram(s, t):
    """Check if t is an anagram of s (same characters, different order)."""
    return Counter(s) == Counter(t)

# Or manually:
def is_anagram_manual(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26  # 26 lowercase letters
    for c in s:
        count[ord(c) - ord('a')] += 1
    for c in t:
        count[ord(c) - ord('a')] -= 1
    return all(x == 0 for x in count)

print(is_anagram("listen", "silent"))  # True`} />
      </section>

      {/* VISUALIZER */}
      <section className="section">
        <div className="section-title"><h2>🎬 Visualizer</h2></div>
        <p>Watch palindrome checking and sliding window techniques work on strings character by character!</p>
        <StringsVisualizer />
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section">
        <div className="section-title"><h2>💡 Interview Tips</h2></div>
        <div className="tip-card">
          <h4>String Building — Avoid += in Loops</h4>
          <p>Never build strings with <code>s += char</code> in a loop. Each concatenation creates a brand new string object. Use a list to collect characters, then <code>"".join(chars)</code> at the end. This changes O(n²) to O(n).</p>
        </div>
        <div className="tip-card">
          <h4>Sliding Window for Substrings</h4>
          <p>When looking for substrings with specific properties (all unique chars, containing all required chars, etc.), use a sliding window with a hash map/set to track the current window's contents.</p>
        </div>
        <div className="tip-card">
          <h4>Frequency Arrays vs Hash Maps</h4>
          <p>If you only deal with lowercase letters, use a fixed array of size 26 instead of a hash map. It's faster and shows the interviewer you understand the constraint. <code>count[ord(c) - ord('a')]</code></p>
        </div>
        <div className="tip-card">
          <h4>Common Mistakes</h4>
          <p>Forgetting strings are immutable in Python. Not handling edge cases (empty string, single character). Using <code>==</code> correctly vs <code>is</code> for string comparison. Not considering uppercase vs lowercase.</p>
        </div>
      </section>

      {/* LEETCODE PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 LeetCode Problems (47)</h2></div>
        <ProblemSection problems={stringsProblems} topic="strings" count={47} />
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
