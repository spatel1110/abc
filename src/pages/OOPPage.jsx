import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

export default function OOPPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 style={{ background: 'linear-gradient(135deg, var(--coral), var(--ice))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.4rem' }}>
        Object-Oriented Programming — From Zero to Interview Ready
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        Forget memorizing definitions. This page teaches you OOP the way a senior engineer would explain it over coffee.
        If you know Python basics (variables, functions, lists) — you're ready. Let's build your intuition from scratch.
      </p>


      {/* 1. WHAT IS OOP? */}
      <section className="section">
        <div className="section-title"><h2>🧠 What Is OOP?</h2></div>
        <div className="daily-dose">
          <h3>Programming is about organizing code. OOP is ONE way to organize it.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>Think of a TV remote. It has <strong>data</strong> (current channel, volume level) and <strong>actions</strong> (change channel, mute, power off). The remote bundles related data and behavior together. That's an object.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">PLAIN ENGLISH</span>
              <p>Without OOP, you'd have scattered variables and functions everywhere. OOP says: "Group related stuff together." A Player object has health, position, AND the ability to move/attack. Everything about a player lives in one place.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">WHY BOTHER?</span>
              <p>Real programs have thousands of variables. OOP stops chaos. Each object manages its own state. You think in terms of "things" rather than raw data floating around.</p>
            </div>
          </div>
        </div>


        <CodeBlock title="Procedural vs OOP — same problem, two approaches" code={`# === PROCEDURAL (scattered data + functions) ===
player_name = "Alice"
player_health = 100
player_x = 0

def move_player(x, dx):
    return x + dx

def take_damage(health, dmg):
    return max(0, health - dmg)

# Problems: What if you have 50 players?
# You'd need 50 separate variables. Nightmare.

# === OOP (everything about a player lives together) ===
class Player:
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
        self.x = 0

    def move(self, dx):
        self.x += dx

    def take_damage(self, dmg):
        self.health = max(0, self.health - dmg)

# Now 50 players? Easy.
players = [Player(f"Player_{i}") for i in range(50)]
players[0].move(5)       # Only player 0 moves
players[1].take_damage(20)  # Only player 1 takes damage`} />
      </section>


      {/* 2. CLASSES & OBJECTS */}
      <section className="section">
        <div className="section-title"><h2>🏗️ Classes & Objects — The Foundation</h2></div>
        <div className="daily-dose">
          <h3>Class = Blueprint. Object = Actual Thing.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>A class is like a house blueprint. It says "every house has a door, windows, and a roof." But the blueprint isn't a house — you can't live in paper. When you BUILD a house from that blueprint, THAT's an object. You can build 100 different houses from one blueprint.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">KEY CONCEPTS</span>
              <p><code>__init__</code> = the constructor. It runs automatically when you create an object. Think of it as "set up this specific house." <code>self</code> = "this particular house." When house #3 says <code>self.color</code>, it means the color of house #3, not house #7.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">INSTANCE vs CLASS ATTRIBUTES</span>
              <p><strong>Instance attributes</strong> = each house has its own color. <strong>Class attributes</strong> = all houses share the same architect. Instance: <code>self.color = "blue"</code>. Class: defined outside <code>__init__</code>, shared by everyone.</p>
            </div>
          </div>
        </div>


        <CodeBlock title="Person class — your first class explained line by line" code={`class Person:
    # Class attribute — shared by ALL Person objects
    species = "Homo sapiens"

    def __init__(self, name, age):
        # Instance attributes — unique to EACH person
        self.name = name    # This person's name
        self.age = age      # This person's age

    def greet(self):
        # Method — something a person can DO
        return f"Hi, I'm {self.name} and I'm {self.age}!"

    def have_birthday(self):
        self.age += 1
        return f"Happy birthday {self.name}! Now {self.age}."

# Creating objects (instances) from the class (blueprint)
alice = Person("Alice", 25)   # __init__ runs automatically
bob = Person("Bob", 30)       # Different person, same blueprint

print(alice.greet())           # Hi, I'm Alice and I'm 25!
print(bob.greet())             # Hi, I'm Bob and I'm 30!
print(alice.species)           # Homo sapiens (shared)
print(bob.species)             # Homo sapiens (same value!)`} />

        <CodeBlock title="ListNode — the class you'll use in EVERY linked list interview" code={`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val      # Data this node holds
        self.next = next    # Pointer to next node (or None)

    def __repr__(self):
        return f"ListNode({self.val})"

# Building a linked list: 1 -> 2 -> 3
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)

# Traversing it
current = head
while current:
    print(current.val, end=" -> ")
    current = current.next
# Output: 1 -> 2 -> 3 ->`} />
      </section>


      {/* 3. ENCAPSULATION */}
      <section className="section">
        <div className="section-title"><h2>🔒 Encapsulation — Protect Your Data</h2></div>
        <div className="daily-dose">
          <h3>Don't let outsiders mess with your internal state directly.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>An ATM machine. You can't reach inside and grab cash. You use the interface — buttons, screen, card slot. The machine CONTROLS what you can do. It validates your PIN, checks your balance, THEN gives you money. That's encapsulation.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">THREE LEVELS IN PYTHON</span>
              <p><code>self.name</code> = public (anyone can access). <code>self._name</code> = private by convention ("please don't touch"). <code>self.__name</code> = name-mangling (Python renames it to prevent accidental access). <code>@property</code> = the "security guard" that validates before allowing changes.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">WHY INTERVIEWS CARE</span>
              <p>It shows you think about API design. If someone can set <code>account.balance = -1000</code> directly, that's a bug waiting to happen. Encapsulation prevents this by forcing access through validated methods.</p>
            </div>
          </div>
        </div>


        <CodeBlock title="BankAccount — encapsulation with validation" code={`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner          # Public — anyone can see the owner
        self.__balance = balance    # Private — can't do account.__balance

    @property
    def balance(self):
        """The security guard — controls READ access."""
        return self.__balance

    @balance.setter
    def balance(self, amount):
        """The security guard — controls WRITE access."""
        if amount < 0:
            raise ValueError("Nice try. Balance can't be negative.")
        self.__balance = amount

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        return f"Deposited \${amount}. New balance: \${self.__balance}"

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds!")
        self.__balance -= amount
        return f"Withdrew \${amount}. Remaining: \${self.__balance}"

# Usage
acc = BankAccount("Alice", 1000)
acc.deposit(500)        # Works! Balance is now 1500
acc.withdraw(200)       # Works! Balance is now 1300
# acc.balance = -999    # BLOCKED! ValueError raised
# acc.__balance = -999  # Doesn't work — name mangling`} />

        <CodeBlock title="Temperature — @property for computed values" code={`class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero? Physics says no.")
        self._celsius = value

    @property
    def fahrenheit(self):
        """Computed on the fly — no stored value!"""
        return self._celsius * 9/5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9  # Reuses celsius setter validation!

temp = Temperature(100)
print(temp.fahrenheit)    # 212.0
temp.fahrenheit = 32      # Sets celsius to 0
print(temp.celsius)       # 0.0`} />
      </section>


      {/* 4. INHERITANCE */}
      <section className="section">
        <div className="section-title"><h2>🧬 Inheritance — Don't Repeat Yourself</h2></div>
        <div className="daily-dose">
          <h3>Child gets everything from parent for free. Can add new stuff or change existing behavior.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>You inherit traits from your parents — eye color, height, maybe a talent for cooking. But you ALSO develop your own skills (maybe you learned guitar). And sometimes you do something differently than your parents (they cook traditional food, you cook fusion). That's method overriding.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">KEY MECHANICS</span>
              <p><code>class Dog(Animal)</code> = Dog inherits from Animal. <code>super().__init__()</code> = "run the parent's setup first." Method overriding = redefine a parent's method in the child. MRO = the order Python checks when multiple parents exist.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">WHEN TO USE</span>
              <p>"Is-a" relationship: A Dog IS an Animal ✓. A Car IS a Vehicle ✓. A Car IS an Engine? NO — a car HAS an engine (that's composition, covered later).</p>
            </div>
          </div>
        </div>


        <CodeBlock title="Vehicle hierarchy — inheritance in action" code={`class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.is_running = False

    def start(self):
        self.is_running = True
        return f"{self.make} {self.model} started."

    def stop(self):
        self.is_running = False
        return f"{self.make} {self.model} stopped."

class Car(Vehicle):
    def __init__(self, make, model, year, doors=4):
        super().__init__(make, model, year)  # Parent sets up make/model/year
        self.doors = doors  # Car adds its own attribute

    def honk(self):
        return "Beep beep!"  # Car-specific method

class Truck(Vehicle):
    def __init__(self, make, model, year, payload_tons):
        super().__init__(make, model, year)
        self.payload_tons = payload_tons

    def start(self):
        # Override parent — trucks have a different start sequence
        self.is_running = True
        return f"{self.make} {self.model} rumbles to life! (Payload: {self.payload_tons}T)"

car = Car("Toyota", "Camry", 2023)
truck = Truck("Ford", "F-150", 2023, 1.5)
print(car.start())    # Toyota Camry started. (inherited from Vehicle)
print(truck.start())  # Ford F-150 rumbles to life! (overridden)
print(car.honk())     # Beep beep! (Car-specific)`} />

        <CodeBlock title="Animal hierarchy — super() and method overriding" code={`class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

    def __repr__(self):
        return f"{self.__class__.__name__}('{self.name}')"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")  # Parent handles name + sound
        self.breed = breed              # Dog adds breed

    def fetch(self):
        return f"{self.name} fetches the ball!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def speak(self):  # OVERRIDE — cats have attitude
        return f"{self.name} stares at you... then says Meow."

# MRO (Method Resolution Order) — Python checks child first, then parent
print(Dog.__mro__)
# [Dog, Animal, object] — checks Dog first, then Animal, then base object`} />
      </section>


      {/* 5. POLYMORPHISM */}
      <section className="section">
        <div className="section-title"><h2>🎭 Polymorphism — One Interface, Many Forms</h2></div>
        <div className="daily-dose">
          <h3>"Poly" = many. "Morph" = forms. Same method name, different behavior depending on the object.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>A "Start" button. On a car — it starts the engine. On a computer — it boots the OS. On a washing machine — it begins the cycle. Same action name, completely different behavior. That's polymorphism.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">DUCK TYPING</span>
              <p>Python doesn't care what TYPE an object is. It only cares what the object CAN DO. "If it walks like a duck and quacks like a duck — it's a duck." If your object has a <code>.area()</code> method, Python will call it. It doesn't check if it's officially a "Shape."</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">WHY IT'S POWERFUL</span>
              <p>You can write ONE function that works with ANY object that has the right methods. Process 10 different payment types with the same code. Calculate area of any shape without knowing which shape it is.</p>
            </div>
          </div>
        </div>


        <CodeBlock title="Shape — polymorphism with ABC (Abstract Base Class)" code={`from abc import ABC, abstractmethod
import math

class Shape(ABC):
    """Abstract class — you CANNOT create a Shape() directly.
    Forces every child to implement area() and perimeter()."""

    @abstractmethod
    def area(self):
        pass  # No implementation — children MUST provide their own

    @abstractmethod
    def perimeter(self):
        pass

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
    def __init__(self, w, h):
        self.w, self.h = w, h

    def area(self):
        return self.w * self.h

    def perimeter(self):
        return 2 * (self.w + self.h)

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c

    def area(self):  # Heron's formula
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))

    def perimeter(self):
        return self.a + self.b + self.c

# POLYMORPHISM IN ACTION — one loop handles ALL shapes
shapes = [Circle(5), Rectangle(3, 4), Triangle(3, 4, 5)]
for shape in shapes:
    print(shape.describe())  # Each calls its OWN area()!

total_area = sum(s.area() for s in shapes)  # Works with ANY shape`} />

        <CodeBlock title="Payment system — real-world polymorphism" code={`from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

    @abstractmethod
    def refund(self, amount):
        pass

class CreditCard(Payment):
    def __init__(self, card_number):
        self.card = card_number[-4:]  # Store last 4 only

    def pay(self, amount):
        return f"Charged \${amount} to card ending in {self.card}"

    def refund(self, amount):
        return f"Refunded \${amount} to card ending in {self.card}"

class PayPal(Payment):
    def __init__(self, email):
        self.email = email

    def pay(self, amount):
        return f"Sent \${amount} via PayPal to {self.email}"

    def refund(self, amount):
        return f"PayPal refund of \${amount} to {self.email}"

class Crypto(Payment):
    def __init__(self, wallet):
        self.wallet = wallet[:8]

    def pay(self, amount):
        return f"Transferred \${amount} in BTC to {self.wallet}..."

    def refund(self, amount):
        return f"Crypto refund of \${amount} to {self.wallet}..."

# ONE function handles ALL payment types — that's polymorphism!
def checkout(payment_method, amount):
    return payment_method.pay(amount)

methods = [CreditCard("4111111111111234"), PayPal("alice@mail.com"), Crypto("0xABC123DEF456")]
for method in methods:
    print(checkout(method, 99.99))`} />
      </section>


      {/* 6. ABSTRACTION */}
      <section className="section">
        <div className="section-title"><h2>🎪 Abstraction — Hide the Complexity</h2></div>
        <div className="daily-dose">
          <h3>You drive a car without knowing how the engine works. That's abstraction.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>When you call <code>list.sort()</code>, you don't care if it uses Timsort or Mergesort. You just know: "I call sort, my list gets sorted." The HOW is hidden. You only see the WHAT.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">ABSTRACTION vs ENCAPSULATION</span>
              <p><strong>Abstraction</strong> = hiding complexity (you don't know how sort works). <strong>Encapsulation</strong> = hiding data (you can't access the internal array directly). Abstraction is about DESIGN. Encapsulation is about ACCESS CONTROL.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW TO USE IT</span>
              <p>Define an abstract class that says WHAT methods exist. Each implementation decides HOW. Users of your class only interact with the "what" — they never see the messy internals.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="DatabaseConnection — abstraction in practice" code={`from abc import ABC, abstractmethod

class DatabaseConnection(ABC):
    """Abstract interface — defines WHAT a database can do.
    Doesn't say HOW. That's up to each implementation."""

    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def query(self, sql):
        pass

    @abstractmethod
    def close(self):
        pass

    def execute_safely(self, sql):
        """Template method — uses abstract methods without knowing HOW they work."""
        self.connect()
        result = self.query(sql)
        self.close()
        return result

class PostgresDB(DatabaseConnection):
    def connect(self):
        return "Connected to PostgreSQL on port 5432"

    def query(self, sql):
        return f"PostgreSQL executing: {sql}"

    def close(self):
        return "PostgreSQL connection closed"

class MongoDB(DatabaseConnection):
    def connect(self):
        return "Connected to MongoDB cluster"

    def query(self, sql):
        return f"MongoDB translating SQL to aggregation: {sql}"

    def close(self):
        return "MongoDB connection closed"

# User doesn't care which DB — same interface!
def run_report(db: DatabaseConnection):
    return db.execute_safely("SELECT * FROM users")

run_report(PostgresDB())  # Works!
run_report(MongoDB())     # Also works! Same interface.`} />
      </section>


      {/* 7. DUNDER METHODS */}
      <section className="section">
        <div className="section-title"><h2>🔮 Dunder Methods — Python's Secret Hooks</h2></div>
        <div className="daily-dose">
          <h3>When you write len(obj), Python actually calls obj.__len__(). These "magic methods" let YOUR objects work with built-in operations.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">IMAGINE THIS</span>
              <p>Python has "hooks" everywhere. When you type <code>a + b</code>, Python secretly calls <code>a.__add__(b)</code>. When you type <code>print(x)</code>, it calls <code>x.__str__()</code>. By defining these methods in YOUR class, your objects suddenly work with +, ==, len(), print(), for loops, and more!</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">MOST IMPORTANT DUNDERS</span>
              <p><code>__init__</code>=constructor, <code>__repr__</code>=debug string, <code>__str__</code>=print string, <code>__eq__/__hash__</code>=equality/dicts, <code>__lt__</code>=sorting, <code>__len__</code>=len(), <code>__iter__</code>=for loops, <code>__getitem__</code>=indexing[], <code>__add__</code>=+ operator, <code>__contains__</code>=in keyword</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">RULE OF THUMB</span>
              <p>If your class represents a container → add <code>__len__</code> + <code>__iter__</code>. If it's comparable → add <code>__eq__</code> + <code>__lt__</code>. If you'll print it → add <code>__repr__</code>. If it goes in a set/dict → add <code>__hash__</code>.</p>
            </div>
          </div>
        </div>


        <CodeBlock title="Card class — complete dunder method showcase" code={`class Card:
    RANKS = {str(i): i for i in range(2, 11)}
    RANKS.update({'J': 11, 'Q': 12, 'K': 13, 'A': 14})

    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit

    def __repr__(self):
        """For debugging: Card('A', '♠')"""
        return f"Card('{self.rank}', '{self.suit}')"

    def __str__(self):
        """For printing: A♠"""
        return f"{self.rank}{self.suit}"

    def __eq__(self, other):
        """Two cards are equal if same rank AND suit"""
        return isinstance(other, Card) and self.rank == other.rank and self.suit == other.suit

    def __hash__(self):
        """Needed to put Cards in sets/dicts"""
        return hash((self.rank, self.suit))

    def __lt__(self, other):
        """Compare by rank value — enables sorting!"""
        return self.RANKS[self.rank] < self.RANKS[other.rank]

    def __add__(self, other):
        """Add two cards = sum of their rank values"""
        return self.RANKS[self.rank] + self.RANKS[other.rank]

# Now Card works with ALL Python built-ins!
hand = [Card('A', '♠'), Card('K', '♥'), Card('3', '♦'), Card('Q', '♣')]
print(sorted(hand))         # Sorted by rank! [3♦, Q♣, K♥, A♠]
print(Card('A', '♠') == Card('A', '♠'))  # True
print(Card('A', '♠') + Card('K', '♥'))   # 27 (14 + 13)
print({Card('A', '♠'), Card('A', '♠')})  # Only one! (hashable)`} />
      </section>


      {/* 8. CLASS vs INSTANCE vs STATIC METHODS */}
      <section className="section">
        <div className="section-title"><h2>⚙️ Class vs Instance vs Static Methods</h2></div>
        <div className="daily-dose">
          <h3>Three types of methods — each with a specific job.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">INSTANCE METHOD (default)</span>
              <p>Has access to <code>self</code> — the specific object. Use it when the method needs to read/write instance data. Example: <code>dog.bark()</code> — it needs to know WHICH dog is barking.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">@classmethod</span>
              <p>Has access to <code>cls</code> — the class itself. Use it for "factory methods" — alternative ways to create objects. Example: <code>Date.from_string("2023-12-25")</code> creates a Date without calling <code>__init__</code> directly.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">@staticmethod</span>
              <p>Has access to NOTHING — no self, no cls. It's just a utility function that logically belongs with the class. Example: <code>Date.is_valid(2023, 13, 45)</code> — doesn't need an instance to check if a date is valid.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Date class — all three method types" code={`class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    # INSTANCE METHOD — needs self (this specific date)
    def __repr__(self):
        return f"{self.year}-{self.month:02d}-{self.day:02d}"

    def is_leap_year(self):
        """Needs self.year — so it's an instance method."""
        y = self.year
        return y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)

    # CLASS METHOD — alternative constructor (factory method)
    @classmethod
    def from_string(cls, date_string):
        """Creates a Date from '2023-12-25' format.
        Uses cls() instead of Date() — works with subclasses too!"""
        year, month, day = map(int, date_string.split('-'))
        return cls(year, month, day)

    @classmethod
    def today(cls):
        """Another factory — creates today's date."""
        import datetime
        t = datetime.date.today()
        return cls(t.year, t.month, t.day)

    # STATIC METHOD — utility, doesn't need self or cls
    @staticmethod
    def is_valid(year, month, day):
        """Pure validation — doesn't need any instance or class data."""
        return 1 <= month <= 12 and 1 <= day <= 31 and year > 0

# Usage
d1 = Date(2023, 12, 25)           # Normal constructor
d2 = Date.from_string("2024-01-15")  # Factory method
d3 = Date.today()                     # Another factory
print(Date.is_valid(2023, 13, 1))     # False — no instance needed`} />
      </section>


      {/* 9. COMPOSITION vs INHERITANCE */}
      <section className="section">
        <div className="section-title"><h2>🧩 Composition vs Inheritance</h2></div>
        <div className="daily-dose">
          <h3>"Has-a" vs "Is-a" — the most important design decision in OOP.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">THE RULE</span>
              <p>A Dog IS an Animal → inheritance. A Car HAS an Engine → composition. If you're unsure, prefer composition. It's more flexible and easier to change later.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">WHY PREFER COMPOSITION</span>
              <p>Inheritance locks you in. If you inherit from 3 classes, changes to ANY parent can break your child. Composition lets you swap parts. Want a different engine? Just plug in a new one.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">HOW TO DECIDE</span>
              <p>Ask: "Is my class a SPECIALIZED VERSION of the parent?" → inheritance. "Does my class USE another class as a tool/part?" → composition. When in doubt → composition.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Car with Engine — composition example" code={`class Engine:
    def __init__(self, horsepower, fuel_type):
        self.horsepower = horsepower
        self.fuel_type = fuel_type
        self.is_running = False

    def start(self):
        self.is_running = True
        return f"{self.fuel_type} engine ({self.horsepower}hp) started"

    def stop(self):
        self.is_running = False
        return "Engine stopped"

class GPS:
    def navigate(self, destination):
        return f"Navigating to {destination}..."

class Car:
    """Car HAS an engine and HAS a GPS. Not IS-an-engine."""
    def __init__(self, make, engine, gps=None):
        self.make = make
        self.engine = engine   # Composition — Car HAS an Engine
        self.gps = gps         # Composition — Car HAS a GPS

    def start(self):
        return f"{self.make}: {self.engine.start()}"

    def drive_to(self, place):
        if not self.gps:
            return "No GPS installed!"
        return self.gps.navigate(place)

# Swap engines easily! That's the power of composition.
v8 = Engine(450, "Gasoline")
electric = Engine(670, "Electric")

sports_car = Car("Ferrari", v8, GPS())
tesla = Car("Tesla", electric, GPS())

print(sports_car.start())  # Ferrari: Gasoline engine (450hp) started
print(tesla.start())       # Tesla: Electric engine (670hp) started`} />
      </section>


      {/* 10. SOLID PRINCIPLES */}
      <section className="section">
        <div className="section-title"><h2>📐 SOLID Principles (Simplified)</h2></div>
        <div className="daily-dose">
          <h3>Five rules that keep your code from becoming spaghetti. Here are the two that matter most for interviews.</h3>
          <div className="why-what-how">
            <div className="wwh-card wwh-why">
              <span className="wwh-label">S — SINGLE RESPONSIBILITY</span>
              <p>One class = one job. A <code>UserAuth</code> class handles login/logout. It does NOT also send emails, generate reports, and manage the database. If your class does 5 things, split it into 5 classes.</p>
            </div>
            <div className="wwh-card wwh-what">
              <span className="wwh-label">O — OPEN/CLOSED</span>
              <p>Open for extension, closed for modification. Instead of editing existing code when adding features, EXTEND it. Add a new <code>PayPal</code> class instead of adding if-else to the existing payment code.</p>
            </div>
            <div className="wwh-card wwh-how">
              <span className="wwh-label">L, I, D — QUICK SUMMARY</span>
              <p><strong>L</strong>iskov: child classes should work anywhere parent is expected. <strong>I</strong>nterface Segregation: don't force classes to implement methods they don't use. <strong>D</strong>ependency Inversion: depend on abstractions (interfaces), not concrete classes.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="SOLID in practice — before and after" code={`# BAD — violates Single Responsibility (does too many things)
class UserManager:
    def authenticate(self, user, password): ...
    def send_welcome_email(self, user): ...    # Not its job!
    def generate_report(self, user): ...       # Not its job!

# GOOD — each class has ONE responsibility
class Authenticator:
    def authenticate(self, user, password): ...

class EmailService:
    def send_welcome_email(self, user): ...

class ReportGenerator:
    def generate_report(self, user): ...

# BAD — violates Open/Closed (must modify existing code for new shapes)
def calculate_area(shape):
    if shape.type == "circle":
        return 3.14 * shape.radius ** 2
    elif shape.type == "rectangle":   # Adding square? Edit this function.
        return shape.w * shape.h
    # Every new shape = edit this function. Fragile!

# GOOD — open for extension, closed for modification
class Shape(ABC):
    @abstractmethod
    def area(self): pass

class Circle(Shape):
    def area(self): return 3.14 * self.radius ** 2

# Adding a new shape? Just add a new class. NEVER touch existing code.
class Hexagon(Shape):
    def area(self): return 2.598 * self.side ** 2`} />
      </section>


      {/* 11. DESIGN PATTERNS */}
      <section className="section">
        <div className="section-title"><h2>🎨 Design Patterns That Appear in Interviews</h2></div>
        <div className="daily-dose">
          <h3>You don't need all 23 patterns. These four show up constantly.</h3>
          <div className="wwh-card wwh-what">
            <span className="wwh-label">WHICH PATTERNS TO KNOW</span>
            <p><strong>Iterator</strong> — flatten nested lists, custom traversal. <strong>Singleton</strong> — global config, connection pools. <strong>Observer</strong> — event systems, pub/sub. <strong>Factory</strong> — create objects without specifying exact class.</p>
          </div>
        </div>

        <CodeBlock title="Iterator Pattern — flatten nested list (LC 341)" code={`class FlattenIterator:
    """Lazily flattens [1, [2, [3, 4]], 5] without creating a new list."""
    def __init__(self, nested_list):
        # Stack holds items in reverse so we pop from the "front"
        self._stack = list(reversed(nested_list))

    def __iter__(self):
        return self

    def __next__(self):
        while self._stack:
            top = self._stack.pop()
            if isinstance(top, list):
                # Put list items back on stack (reversed to maintain order)
                self._stack.extend(reversed(top))
            else:
                return top
        raise StopIteration

# Usage — works with for loops!
nested = [1, [2, [3, 4]], [5, 6], 7]
print(list(FlattenIterator(nested)))  # [1, 2, 3, 4, 5, 6, 7]`} />

        <CodeBlock title="Singleton, Observer, and Factory patterns" code={`# === SINGLETON — only one instance ever exists ===
class Config:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.settings = {}
        return cls._instance

    def set(self, key, value):
        self.settings[key] = value

c1 = Config()
c2 = Config()
c1.set("theme", "dark")
print(c2.settings)  # {'theme': 'dark'} — same object!
print(c1 is c2)     # True

# === OBSERVER — event/notification system ===
class EventBus:
    def __init__(self):
        self._subscribers = {}

    def subscribe(self, event, callback):
        self._subscribers.setdefault(event, []).append(callback)

    def publish(self, event, data=None):
        for callback in self._subscribers.get(event, []):
            callback(data)

bus = EventBus()
bus.subscribe("user_login", lambda user: print(f"Welcome {user}!"))
bus.subscribe("user_login", lambda user: print(f"Log: {user} signed in"))
bus.publish("user_login", "Alice")  # Both callbacks fire!

# === FACTORY — create objects without knowing exact class ===
class NotificationFactory:
    @staticmethod
    def create(channel, message):
        if channel == "email":
            return EmailNotification(message)
        elif channel == "sms":
            return SMSNotification(message)
        elif channel == "push":
            return PushNotification(message)
        raise ValueError(f"Unknown channel: {channel}")

# Usage: caller doesn't need to know class names
notif = NotificationFactory.create("email", "Hello!")`} />
      </section>


      {/* 12. REAL INTERVIEW PROBLEMS */}
      <section className="section">
        <div className="section-title"><h2>🎯 Real Interview OOP Problems</h2></div>
        <div className="daily-dose">
          <h3>These three problems appear in interviews at Google, Meta, Amazon constantly.</h3>
          <div className="wwh-card wwh-why">
            <span className="wwh-label">WHAT INTERVIEWERS LOOK FOR</span>
            <p>Clean API, proper encapsulation, correct time complexity, edge case handling, and Pythonic code (using dunders). These aren't "design" questions — they're "implement this data structure as a class" questions.</p>
          </div>
        </div>

        <CodeBlock title="LRU Cache — O(1) get and put (LC 146)" code={`from collections import OrderedDict

class LRUCache:
    """Least Recently Used Cache.
    Key insight: OrderedDict remembers insertion order AND
    lets you move items to the end in O(1)."""

    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        # Mark as recently used by moving to end
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)  # Update = recently used
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove LEAST recent (front)

# Walkthrough:
cache = LRUCache(2)
cache.put(1, "A")    # cache: {1: A}
cache.put(2, "B")    # cache: {1: A, 2: B}
cache.get(1)         # "A" — now 1 is most recent: {2: B, 1: A}
cache.put(3, "C")    # Evicts key 2 (least recent): {1: A, 3: C}
cache.get(2)         # -1 (evicted!)`} />


        <CodeBlock title="Min Stack — O(1) push, pop, top, AND getMin (LC 155)" code={`class MinStack:
    """Trick: store (value, current_minimum) at each level.
    When you pop, the previous minimum is still stored below!"""

    def __init__(self):
        self._stack = []  # Each entry: (value, min_at_this_level)

    def push(self, val):
        current_min = min(val, self._stack[-1][1]) if self._stack else val
        self._stack.append((val, current_min))

    def pop(self):
        self._stack.pop()

    def top(self):
        return self._stack[-1][0]

    def getMin(self):
        return self._stack[-1][1]

# Walkthrough:
ms = MinStack()
ms.push(5)   # stack: [(5, 5)]
ms.push(3)   # stack: [(5, 5), (3, 3)]  — min is now 3
ms.push(7)   # stack: [(5, 5), (3, 3), (7, 3)]  — min still 3
ms.getMin()  # 3
ms.pop()     # removes 7, stack: [(5, 5), (3, 3)]
ms.getMin()  # 3 (still correct!)
ms.pop()     # removes 3, stack: [(5, 5)]
ms.getMin()  # 5 (previous min restored automatically!)`} />

        <CodeBlock title="Design HashMap from scratch (LC 706)" code={`class MyHashMap:
    """Hash map using separate chaining (list of buckets).
    Each bucket is a list of (key, value) pairs."""

    def __init__(self, size=1000):
        self.size = size
        self.buckets = [[] for _ in range(size)]

    def _hash(self, key):
        """Maps any key to a bucket index."""
        return key % self.size

    def put(self, key, value):
        bucket = self.buckets[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)  # Update existing
                return
        bucket.append((key, value))  # New key

    def get(self, key):
        bucket = self.buckets[self._hash(key)]
        for k, v in bucket:
            if k == key:
                return v
        return -1  # Not found

    def remove(self, key):
        bucket = self.buckets[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                return

# Usage
hm = MyHashMap()
hm.put(1, "hello")
hm.put(1001, "world")  # Same bucket as 1! (1001 % 1000 == 1)
print(hm.get(1))       # "hello"
print(hm.get(1001))    # "world" — separate chaining handles collision
hm.remove(1)
print(hm.get(1))       # -1`} />
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
