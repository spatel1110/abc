import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

export default function MemoryPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Memory Optimization in Python</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        Writing correct code is step 1. Writing code that doesn't eat all your RAM is step 2. This section teaches you how Python uses memory under the hood — and how to write memory-efficient code that interviewers love.
      </p>

      {/* HOW PYTHON STORES THINGS */}
      <section className="section">
        <div className="section-title"><h2>🧠 How Python Stores Things in Memory</h2></div>

        <div className="daily-dose">
          <h3>Everything is an Object</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>In Python, even a simple number like <code>5</code> is a full object taking 28 bytes. A list of 1000 integers uses way more memory than you'd expect. Knowing this helps you pick the right structure.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT happens</span>
              <p>Every Python object carries: a reference count, a type pointer, and the actual value. That's overhead. A C integer is 4 bytes. A Python integer is 28 bytes. That's 7x more.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to check</span>
              <p>Use <code>sys.getsizeof()</code> to see actual memory of any object.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Check memory usage of Python objects" code={`import sys

# Integers
sys.getsizeof(0)        # 28 bytes (yes, zero takes 28 bytes!)
sys.getsizeof(1)        # 28 bytes
sys.getsizeof(10**100)  # 72 bytes (big integers grow)

# Strings
sys.getsizeof("")       # 49 bytes (empty string has overhead!)
sys.getsizeof("hello")  # 54 bytes (49 + 5 chars)

# Lists
sys.getsizeof([])       # 56 bytes (empty list)
sys.getsizeof([1,2,3])  # 120 bytes (but doesn't count contents!)

# Real total memory of a list:
import sys
nums = [1, 2, 3, 4, 5]
total = sys.getsizeof(nums) + sum(sys.getsizeof(x) for x in nums)
# 120 + 5*28 = 260 bytes for 5 small integers!`} />

        <div className="daily-dose">
          <h3>References, Not Copies</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>When you do <code>b = a</code>, Python doesn't copy the data. Both <code>a</code> and <code>b</code> point to the SAME object. Modifying one changes the other. This is the #1 source of bugs in interviews.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT happens</span>
              <p>Variables in Python are just "name tags" pointing to objects. Assignment = attaching another name tag to the same box. The box (object) stays in one place in memory.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to verify</span>
              <p>Use <code>id()</code> to see memory address and <code>is</code> to check if two names point to same object.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="References vs Copies — The interview trap" code={`# TRAP: Both point to SAME list
a = [1, 2, 3]
b = a            # b is NOT a copy!
b.append(4)
print(a)         # [1, 2, 3, 4] ← a changed too!
print(a is b)    # True (same object)

# FIX: Make actual copies
b = a[:]         # Shallow copy (slicing)
b = a.copy()     # Shallow copy (method)
b = list(a)      # Shallow copy (constructor)

# For nested lists, you need DEEP copy
import copy
matrix = [[1,2], [3,4]]
deep = copy.deepcopy(matrix)
deep[0][0] = 99
print(matrix)    # [[1,2], [3,4]] ← original safe!`} />
      </section>

      {/* GARBAGE COLLECTION */}
      <section className="section">
        <div className="section-title"><h2>🗑️ Garbage Collection — How Python Frees Memory</h2></div>

        <div className="daily-dose">
          <h3>Reference Counting</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Python automatically frees memory when objects are no longer used. But if you create circular references (A points to B, B points to A), reference counting alone can't free them — causing memory leaks.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT happens</span>
              <p>Every object has a counter: "how many things point to me?" When counter hits 0, Python immediately frees that memory. For circular references, Python runs a separate "cycle collector" periodically.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to manage</span>
              <p>Use <code>del</code> to remove references. Use <code>weakref</code> for circular structures. Call <code>gc.collect()</code> to force garbage collection.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Reference counting and garbage collection" code={`import sys
import gc

# Reference count
a = [1, 2, 3]
print(sys.getrefcount(a))  # 2 (a + function argument)

b = a          # Now 3 references to the list
del a          # Now 2 references
del b          # Now 0 references → memory freed!

# Circular reference problem
class Node:
    def __init__(self):
        self.next = None

a = Node()
b = Node()
a.next = b    # a → b
b.next = a    # b → a (CIRCULAR!)
del a, b      # Ref count won't reach 0!
gc.collect()  # Forces cycle collector to find and free them

# Weakref solution (doesn't increase ref count)
import weakref
class Cache:
    def __init__(self):
        self._cache = weakref.WeakValueDictionary()
    def get(self, key):
        return self._cache.get(key)  # Won't prevent GC`} />
      </section>

      {/* MEMORY-EFFICIENT DATA STRUCTURES */}
      <section className="section">
        <div className="section-title"><h2>⚡ Memory-Efficient Alternatives</h2></div>

        <div className="daily-dose">
          <h3>Generators Instead of Lists</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>A list of 10 million numbers takes ~80MB RAM. A generator producing the same numbers takes ~120 bytes. If you only need to iterate once, generators save massive memory.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT it is</span>
              <p>A generator is a "lazy list" — it produces values one at a time, on demand, instead of storing them all. Uses <code>yield</code> instead of <code>return</code>.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Replace <code>[x for x in range(n)]</code> with <code>(x for x in range(n))</code>. Use <code>yield</code> in functions. Use <code>itertools</code> for common patterns.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Generators — produce values on demand" code={`import sys

# BAD: Creates entire list in memory
squares_list = [x**2 for x in range(1_000_000)]
print(sys.getsizeof(squares_list))  # ~8.4 MB!

# GOOD: Generator — produces one value at a time
squares_gen = (x**2 for x in range(1_000_000))
print(sys.getsizeof(squares_gen))   # 112 bytes!

# Generator function with yield
def fibonacci():
    a, b = 0, 1
    while True:
        yield a        # Pauses here, returns value
        a, b = b, a+b # Resumes from here next time

# Use it: only one number in memory at a time
fib = fibonacci()
for _ in range(10):
    print(next(fib))  # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

# INTERVIEW TIP: Use generators for streaming data
def read_large_file(filepath):
    """Process huge file without loading it all into RAM."""
    with open(filepath) as f:
        for line in f:  # Already a generator!
            yield line.strip()`} />

        <div className="daily-dose">
          <h3>__slots__ — Remove Object Overhead</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Normal Python objects store attributes in a dictionary (<code>__dict__</code>). Each dict takes ~200 bytes. If you have millions of small objects, <code>__slots__</code> saves 40-50% memory.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT it does</span>
              <p><code>__slots__</code> tells Python: "this class will ONLY have these attributes." Python stores them in a fixed-size tuple instead of a dict. Faster access, less memory.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Add <code>__slots__ = ['attr1', 'attr2']</code> to your class. Trade-off: can't add new attributes dynamically.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="__slots__ — 40-50% memory reduction" code={`import sys

# WITHOUT __slots__: each object has a __dict__
class PointNormal:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# WITH __slots__: fixed attributes, no __dict__
class PointSlots:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Memory comparison
p1 = PointNormal(1, 2)
p2 = PointSlots(1, 2)
print(sys.getsizeof(p1.__dict__))  # 104 bytes (the dict)
# p2 has no __dict__ at all!

# With 1 million points:
# Normal: ~160 bytes each = 160 MB
# Slots:  ~56 bytes each  = 56 MB  ← 65% less!

# Trade-off: can't add new attributes
p2.z = 3  # AttributeError! Only x and y allowed`} />

        <div className="daily-dose">
          <h3>array.array vs list — When You Need Raw Numbers</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>A Python list of integers stores references to individual int objects (28 bytes each). <code>array.array</code> stores raw numbers packed together like C. 4 bytes per int instead of 28.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT it is</span>
              <p><code>array.array</code> is a typed container — all elements must be the same type. It stores values contiguously in memory, just like a C array.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Use when you have large arrays of same-type numbers. For numpy-level work, use numpy arrays instead.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="array.array, deque, and namedtuple — memory-efficient alternatives" code={`import sys
from array import array
from collections import deque, namedtuple

# array.array: typed, compact storage
nums_list = list(range(10000))       # ~90 KB
nums_array = array('i', range(10000)) # ~40 KB  ← 55% less!
# 'i' = signed int, 'f' = float, 'd' = double

# deque: O(1) both ends (list is O(n) for popleft)
from collections import deque
d = deque(maxlen=5)  # Fixed size — auto-removes oldest!
for i in range(10):
    d.append(i)
print(d)  # deque([5, 6, 7, 8, 9]) — only last 5 kept

# namedtuple: like a lightweight class, immutable
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)   # 3, 4 (readable like a class)
# Uses MUCH less memory than a regular class
# Can't modify: p.x = 5 → AttributeError

# dataclass with slots (Python 3.10+)
from dataclasses import dataclass
@dataclass(slots=True)
class Vector:
    x: float
    y: float
    z: float
# Combines readability of dataclass + memory savings of slots`} />
      </section>

      {/* COMMON MEMORY PITFALLS */}
      <section className="section">
        <div className="section-title"><h2>🚨 Common Memory Pitfalls in Interviews</h2></div>

        <div className="daily-dose">
          <h3>Pitfall #1: String Concatenation in Loops</h3>
          <div className="wwh-card wwh-why">
            <span className="wwh-label">THE TRAP</span>
            <p><code>s += char</code> in a loop creates a NEW string every iteration. For n characters, that's O(n²) memory allocations total — each one copies the entire string so far.</p>
          </div>
        </div>

        <CodeBlock title="String building — wrong vs right" code={`# ❌ BAD: O(n²) time AND memory
result = ""
for char in "hello world this is a long string":
    result += char  # Creates new string EVERY time!
# Memory: "", "h", "he", "hel", "hell", "hello" ... all allocated

# ✅ GOOD: O(n) — collect in list, join once
chars = []
for char in "hello world this is a long string":
    chars.append(char)  # O(1) append to list
result = "".join(chars)  # Single allocation at the end

# ✅ BEST: Use join directly
result = "".join(c for c in some_iterable)`} />

        <div className="daily-dose">
          <h3>Pitfall #2: Storing What You Can Compute</h3>
          <div className="wwh-card wwh-why">
            <span className="wwh-label">THE TRAP</span>
            <p>Creating a prefix sum array when you only need the running total. Storing an entire grid copy when you can mark in-place. Keeping all nodes in BFS when you only need the current level.</p>
          </div>
        </div>

        <CodeBlock title="Compute instead of store" code={`# ❌ BAD: Storing entire prefix sum array
def has_subarray_sum(nums, target):
    prefix = [0] * (len(nums) + 1)  # O(n) extra space
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    # ... use prefix

# ✅ GOOD: Running sum — O(1) space
def has_subarray_sum(nums, target):
    running_sum = 0
    seen = {0}  # Only store sums we've seen
    for num in nums:
        running_sum += num
        if running_sum - target in seen:
            return True
        seen.add(running_sum)
    return False

# ❌ BAD: Copy matrix to track visited
visited = [[False]*n for _ in range(m)]  # O(m*n) extra

# ✅ GOOD: Modify in-place (if allowed)
grid[i][j] = '#'  # Mark visited by changing value`} />

        <div className="daily-dose">
          <h3>Pitfall #3: Default Mutable Arguments</h3>
          <div className="wwh-card wwh-why">
            <span className="wwh-label">THE TRAP</span>
            <p>Using a mutable default argument like <code>def f(arr=[])</code> shares the SAME list across all calls. It accumulates data forever — a sneaky memory leak.</p>
          </div>
        </div>

        <CodeBlock title="Mutable default arguments — the classic Python gotcha" code={`# ❌ BUG: Same list shared across ALL calls!
def append_to(element, target=[]):
    target.append(element)
    return target

print(append_to(1))  # [1]
print(append_to(2))  # [1, 2] ← WHAT?! Expected [2]!
print(append_to(3))  # [1, 2, 3] ← It keeps growing!

# ✅ FIX: Use None as default, create new list inside
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target

print(append_to(1))  # [1]
print(append_to(2))  # [2] ← Correct!`} />
      </section>

      {/* INTERVIEW MEMORY TRICKS */}
      <section className="section">
        <div className="section-title"><h2>💡 Memory Tricks That Impress Interviewers</h2></div>

        <CodeBlock title="Bit manipulation — store multiple booleans in one integer" code={`# Store 32 boolean flags in a single integer
flags = 0
flags |= (1 << 3)   # Set bit 3 (turn on flag 3)
flags |= (1 << 7)   # Set bit 7
flags & (1 << 3)     # Check bit 3: non-zero = True
flags &= ~(1 << 3)  # Clear bit 3

# Example: Track which characters are seen (26 letters)
def has_all_unique_chars(s):
    seen = 0  # Single integer = 26 bits
    for c in s:
        bit = 1 << (ord(c) - ord('a'))
        if seen & bit:   # Already seen!
            return False
        seen |= bit      # Mark as seen
    return True
# Uses 28 bytes total instead of a set (200+ bytes)!`} />

        <CodeBlock title="In-place algorithms — O(1) space solutions interviewers love" code={`# Reverse array in-place
def reverse(arr):
    l, r = 0, len(arr) - 1
    while l < r:
        arr[l], arr[r] = arr[r], arr[l]
        l += 1; r -= 1

# Rotate array using 3 reverses (O(1) space!)
def rotate(arr, k):
    k %= len(arr)
    arr.reverse()
    arr[:k] = arr[:k][::-1]
    arr[k:] = arr[k:][::-1]

# Mark visited using sign bit (for values 1..n)
def find_duplicates(nums):
    """Find duplicates in O(1) extra space."""
    result = []
    for num in nums:
        idx = abs(num) - 1
        if nums[idx] < 0:
            result.append(abs(num))
        else:
            nums[idx] *= -1
    return result`} />

        <CodeBlock title="itertools — memory-efficient iteration patterns" code={`from itertools import chain, islice, combinations, groupby

# chain: iterate multiple sequences without concatenating
big_list = chain(range(1000), range(1000))  # No new list created!

# islice: slice a generator without materializing
first_10 = islice(fibonacci(), 10)  # Only computes 10 values

# combinations: generate on-the-fly, never stored
for combo in combinations([1,2,3,4], 2):
    print(combo)  # (1,2), (1,3), (1,4), (2,3), (2,4), (3,4)
    # Each combo generated and discarded — O(1) per combo

# groupby: process groups without loading all into memory
data = sorted([(1,'a'), (1,'b'), (2,'c'), (2,'d')])
for key, group in groupby(data, key=lambda x: x[0]):
    print(key, list(group))  # 1: [(1,'a'),(1,'b')], 2: [(2,'c'),(2,'d')]`} />
      </section>

      {/* MEMORY COMPLEXITY CHEAT SHEET */}
      <section className="section">
        <div className="section-title"><h2>📋 Memory Size Quick Reference</h2></div>
        <div className="mem-table">
          <table className="problem-table">
            <thead><tr><th>Object</th><th>Memory</th><th>Better Alternative</th></tr></thead>
            <tbody>
              <tr><td><code>int</code> (small)</td><td>28 bytes</td><td>Use bit manipulation for flags</td></tr>
              <tr><td><code>float</code></td><td>24 bytes</td><td><code>array('f', ...)</code> for large arrays</td></tr>
              <tr><td><code>str</code> (empty)</td><td>49 bytes</td><td>Intern common strings</td></tr>
              <tr><td><code>list</code> (empty)</td><td>56 bytes</td><td><code>tuple</code> if immutable (40 bytes)</td></tr>
              <tr><td><code>dict</code> (empty)</td><td>232 bytes</td><td><code>__slots__</code> class or namedtuple</td></tr>
              <tr><td><code>set</code> (empty)</td><td>216 bytes</td><td><code>frozenset</code> if immutable</td></tr>
              <tr><td>Object with <code>__dict__</code></td><td>~160 bytes</td><td><code>__slots__</code> → ~56 bytes</td></tr>
              <tr><td>List of 1M ints</td><td>~36 MB</td><td><code>array('i',...)</code> → ~4 MB</td></tr>
              <tr><td>Generator</td><td>~112 bytes</td><td>Always prefer over list if single-pass</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
        .daily-dose {
          margin-bottom: 1.5rem;
        }
        .daily-dose h3 {
          margin-bottom: 0.8rem;
        }
        .why-what-how {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.7rem;
        }
        .wwh-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1rem;
          border-top: 3px solid var(--border-color);
        }
        .wwh-why { border-top-color: var(--coral); }
        .wwh-what { border-top-color: var(--ice); }
        .wwh-how { border-top-color: var(--mint); }
        .wwh-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.4rem;
        }
        .wwh-why .wwh-label { color: var(--coral); }
        .wwh-what .wwh-label { color: var(--ice); }
        .wwh-how .wwh-label { color: var(--mint); }
        .wwh-card p {
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.6;
        }
        .mem-table {
          overflow-x: auto;
        }
      `}</style>
    </motion.div>
  );
}
