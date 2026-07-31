import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

export default function OOPPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Object-Oriented Programming in Python</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        OOP is the backbone of system design interviews. Classes, the four pillars, dunder methods, design patterns, and real interview problems — everything you need to write clean, extensible Python under pressure.
      </p>

      {/* CLASSES & OBJECTS */}
      <section className="section">
        <div className="section-title"><h2>🏗️ Classes & Objects</h2></div>

        <div className="daily-dose">
          <h3>The Blueprint Analogy</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Interviewers expect you to model problems as classes. A class is a blueprint; objects are houses built from it. <code>__init__</code> is the constructor that sets up each instance's state.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT to know</span>
              <p><code>self</code> refers to the current instance. Instance attributes live on <code>self</code>. Class attributes are shared. <code>__init__</code> runs automatically on creation.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Define attributes in <code>__init__</code>, add methods for behavior. Use classes to encapsulate state + operations that belong together.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="ListNode and Stack — interview staples" code={`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    def __repr__(self):
        return f"ListNode({self.val})"

class Stack:
    def __init__(self):
        self._items = []
    def push(self, val):
        self._items.append(val)
    def pop(self):
        if not self._items:
            raise IndexError("pop from empty stack")
        return self._items.pop()
    def peek(self):
        return self._items[-1] if self._items else None
    def is_empty(self):
        return len(self._items) == 0
    def __len__(self):
        return len(self._items)`} />
      </section>

      {/* FOUR PILLARS */}
      <section className="section">
        <div className="section-title"><h2>🏛️ The Four Pillars of OOP</h2></div>

        <div className="daily-dose">
          <h3>Encapsulation</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Protects internal state from accidental corruption. Interviewers check if you hide details and expose controlled access via properties.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT to know</span>
              <p><code>_single</code> = private by convention. <code>__double</code> = name-mangled to <code>_Class__attr</code>. <code>@property</code> = controlled getter/setter.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Use <code>@property</code> for validation, computed attributes, or read-only access. Prefix internals with <code>_</code>.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="BankAccount — encapsulation with @property" code={`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # name-mangled
    @property
    def balance(self):
        return self.__balance
    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount`} />

        <div className="daily-dose">
          <h3>Inheritance</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Reuse code via parent classes. Override methods for specialized behavior. <code>super()</code> calls the parent — essential for cooperative inheritance.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT to know</span>
              <p>Child inherits all parent methods/attributes. Override by redefining. Use <code>super().__init__()</code> to initialize parent state. Python supports multiple inheritance via MRO.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Put shared logic in parent. Override only what differs. Always call <code>super()</code> in <code>__init__</code>.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Animal hierarchy — inheritance and super()" code={`class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    def speak(self):
        return f"{self.name} says {self.sound}!"
    def __repr__(self):
        return f"{self.__class__.__name__}({self.name!r})"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")
        self.breed = breed
    def fetch(self):
        return f"{self.name} fetches the ball!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")
    def speak(self):  # Override parent method
        return f"{self.name} ignores you... then says Meow."

dog = Dog("Rex", "Labrador")
cat = Cat("Whiskers")
print(dog.speak())  # Rex says Woof!
print(cat.speak())  # Whiskers ignores you... then says Meow.`} />

        <div className="daily-dose">
          <h3>Polymorphism & Abstraction</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Polymorphism = same interface, different behavior. Write code that works on ANY shape, ANY payment method. Abstraction hides complexity behind simple interfaces.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT to know</span>
              <p>Python uses duck typing: "if it quacks like a duck, it IS a duck." ABC enforces interface contracts — subclasses MUST implement abstract methods or instantiation fails.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Use <code>ABC</code> + <code>@abstractmethod</code> to define contracts. Implement in subclasses. Call via parent type for polymorphic behavior.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Shape hierarchy — ABC and polymorphism" code={`from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self): pass
    @abstractmethod
    def perimeter(self): pass
    def describe(self):
        return f"{self.__class__.__name__}: area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height
    def perimeter(self):
        return 2 * (self.width + self.height)

# Polymorphism — same interface, different behavior
shapes = [Circle(5), Rectangle(3, 4), Circle(1)]
total_area = sum(s.area() for s in shapes)  # Works on ANY shape!`} />
      </section>

      {/* DUNDER METHODS */}
      <section className="section">
        <div className="section-title"><h2>🔮 Dunder (Magic) Methods</h2></div>

        <div className="daily-dose">
          <h3>Make Your Classes Pythonic</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">WHY it matters</span>
              <p>Dunder methods let your objects work with <code>+</code>, <code>==</code>, <code>len()</code>, <code>for</code> loops, <code>[]</code> indexing, and <code>print()</code>. Interviewers love classes that integrate naturally with Python.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHAT to know</span>
              <p><code>__repr__</code>=debug string, <code>__eq__/__hash__</code>=equality/sets, <code>__lt__</code>=sorting, <code>__iter__/__getitem__</code>=iteration/indexing, <code>__add__</code>=operators.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW to use</span>
              <p>Implement dunders that make sense: containers get <code>__len__</code>+<code>__iter__</code>, numeric types get <code>__add__</code>+<code>__eq__</code>.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Vector class — full dunder method showcase" code={`class Vector:
    def __init__(self, *components):
        self._data = tuple(components)
    def __repr__(self):
        return f"Vector({', '.join(map(str, self._data))})"
    def __eq__(self, other):
        return isinstance(other, Vector) and self._data == other._data
    def __hash__(self):
        return hash(self._data)
    def __add__(self, other):
        return Vector(*(a + b for a, b in zip(self._data, other._data)))
    def __lt__(self, other):
        return sum(x**2 for x in self._data) < sum(x**2 for x in other._data)
    def __len__(self):
        return len(self._data)
    def __iter__(self):
        return iter(self._data)
    def __getitem__(self, index):
        return self._data[index]

# Usage — integrates naturally with Python
v1, v2 = Vector(1, 2, 3), Vector(4, 5, 6)
print(v1 + v2)              # Vector(5, 7, 9)
print(len(v1))              # 3
print(v1[0])                # 1
print(v1 == Vector(1,2,3))  # True
print(sorted([v2, v1]))     # [Vector(1,2,3), Vector(4,5,6)]
print({v1: "unit"})         # Works as dict key (hashable!)`} />
      </section>

      {/* DESIGN PATTERNS */}
      <section className="section">
        <div className="section-title"><h2>🎨 Design Patterns for Interviews</h2></div>

        <div className="daily-dose">
          <h3>Patterns That Actually Show Up</h3>
          <div className="wwh-card wwh-why">
            <span className="wwh-label">KEY INSIGHT</span>
            <p>You don't need all 23 GoF patterns. Interviews test Iterator (flatten nested lists), Singleton (global config), and Observer (event systems).</p>
          </div>
        </div>

        <CodeBlock title="Iterator Pattern — FlattenIterator (LC 341)" code={`class FlattenIterator:
    """Flattens a nested list like [1, [2, [3]], 4] lazily."""
    def __init__(self, nested_list):
        self._stack = list(reversed(nested_list))
    def __iter__(self):
        return self
    def __next__(self):
        while self._stack:
            top = self._stack.pop()
            if isinstance(top, list):
                self._stack.extend(reversed(top))
            else:
                return top
        raise StopIteration

it = FlattenIterator([1, [2, [3, 4]], 5])
print(list(it))  # [1, 2, 3, 4, 5]`} />

        <CodeBlock title="Singleton and Observer patterns" code={`# Singleton — only one instance ever exists
class Singleton:
    _instance = None
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1, s2 = Singleton(), Singleton()
print(s1 is s2)  # True — same object!

# Observer — simple event system
class EventSystem:
    def __init__(self):
        self._listeners = {}
    def on(self, event, callback):
        self._listeners.setdefault(event, []).append(callback)
    def emit(self, event, *args):
        for cb in self._listeners.get(event, []):
            cb(*args)

events = EventSystem()
events.on("login", lambda user: print(f"{user} logged in"))
events.on("login", lambda user: print(f"Log: {user} at server"))
events.emit("login", "Alice")  # Both callbacks fire`} />
      </section>

      {/* INTERVIEW PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 OOP Problems from Real Interviews</h2></div>

        <div className="daily-dose">
          <h3>Classic Design Questions</h3>
          <div className="wwh-card wwh-what">
            <span className="wwh-label">WHAT INTERVIEWERS LOOK FOR</span>
            <p>Clean API design, proper encapsulation, correct time complexity, and edge case handling. LRU Cache, Min Stack, and HashMap appear constantly.</p>
          </div>
        </div>

        <CodeBlock title="LRU Cache — using OrderedDict (LC 146)" code={`from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove LRU

cache = LRUCache(2)
cache.put(1, 1); cache.put(2, 2)
cache.get(1)     # 1 (marks key 1 as recent)
cache.put(3, 3)  # Evicts key 2
cache.get(2)     # -1 (evicted!)`} />

        <CodeBlock title="Min Stack — O(1) getMin (LC 155)" code={`class MinStack:
    def __init__(self):
        self._stack = []  # stores (value, current_min)
    def push(self, val):
        curr_min = min(val, self._stack[-1][1]) if self._stack else val
        self._stack.append((val, curr_min))
    def pop(self):       self._stack.pop()
    def top(self):       return self._stack[-1][0]
    def getMin(self):    return self._stack[-1][1]

ms = MinStack()
ms.push(3); ms.push(1); ms.push(2)
ms.getMin()  # 1
ms.pop(); ms.getMin()  # 1 (still correct!)`} />

        <CodeBlock title="Design HashMap from scratch (LC 706)" code={`class MyHashMap:
    def __init__(self, size=1000):
        self.size = size
        self.buckets = [[] for _ in range(size)]
    def _hash(self, key):
        return key % self.size
    def put(self, key, value):
        bucket = self.buckets[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value); return
        bucket.append((key, value))
    def get(self, key):
        for k, v in self.buckets[self._hash(key)]:
            if k == key: return v
        return -1
    def remove(self, key):
        bucket = self.buckets[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key: bucket.pop(i); return

hm = MyHashMap()
hm.put(1, 10); hm.put(2, 20)
hm.get(1)     # 10
hm.remove(1); hm.get(1)  # -1`} />
      </section>

      <style>{`
        .daily-dose { margin-bottom: 1.5rem; }
        .daily-dose h3 { margin-bottom: 0.8rem; }
        .why-what-how { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.7rem; }
        .wwh-card { background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 1rem; border-top: 3px solid var(--border-color); }
        .wwh-why { border-top-color: var(--coral); }
        .wwh-what { border-top-color: var(--ice); }
        .wwh-how { border-top-color: var(--mint); }
        .wwh-label { font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem; }
        .wwh-why .wwh-label { color: var(--coral); }
        .wwh-what .wwh-label { color: var(--ice); }
        .wwh-how .wwh-label { color: var(--mint); }
        .wwh-card p { font-size: 0.85rem; margin: 0; line-height: 1.6; }
      `}</style>
    </motion.div>
  );
}
