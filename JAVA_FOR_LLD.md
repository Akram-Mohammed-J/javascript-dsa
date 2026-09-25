# Java: Beginner to Pro — Full Course

A complete, example-driven path through Java: from "Hello World" to professional-grade concepts like concurrency, streams, and design patterns.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Java Fundamentals](#2-java-fundamentals) — _incl. casting, wrapper classes, `this`/`super`, `static`, packages, `Scanner`, formatting_
3. [Control Flow](#3-control-flow)
4. [Arrays & Strings](#4-arrays--strings)
5. [Methods](#5-methods)
6. [Object-Oriented Programming (OOPs)](#6-object-oriented-programming-oops) — _incl. [access modifiers](#access-modifiers), association/aggregation/composition, SOLID, inner classes, `Comparable`/`Comparator`, sealed classes, and more_
7. [Exception Handling](#7-exception-handling) — _incl. multi-catch & exception chaining_
8. [Collections Framework](#8-collections-framework)
9. [Generics](#9-generics) — _incl. bounded wildcards & type erasure_
10. [File I/O](#10-file-io)
11. [Modern APIs & Utilities](#11-modern-apis--utilities) — _`java.time`, regex, serialization_
12. [Lambdas & Functional Interfaces](#12-lambdas--functional-interfaces)
13. [Streams API](#13-streams-api)
14. [Multithreading & Concurrency](#14-multithreading--concurrency) — _incl. thread lifecycle, `wait`/`notify`, deadlocks, `volatile`, concurrent collections_
15. [Design Patterns](#15-design-patterns)
16. [Testing with JUnit](#16-testing-with-junit)
17. [Build Tools (Maven/Gradle)](#17-build-tools-mavengradle)
18. [JVM Memory Model & Garbage Collection](#18-jvm-memory-model--garbage-collection)
19. [Best Practices & Pro Tips](#19-best-practices--pro-tips)
20. [Mini Projects](#20-mini-projects)

---

## 1. Getting Started

### What is Java?

Java is a statically-typed, object-oriented, platform-independent language. Code compiles to **bytecode**, which runs on the **JVM (Java Virtual Machine)** — that's the "write once, run anywhere" promise.

### Setup

1. Install a JDK (Java Development Kit) — JDK 17 or 21 (LTS versions) are good defaults.
2. Verify installation:
   ```bash
   java -version
   javac -version
   ```
3. Use an IDE: IntelliJ IDEA, Eclipse, or VS Code with the Java extension pack.

### Your First Program

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Compile and run from the command line:

```bash
javac HelloWorld.java
java HelloWorld
```

**Breaking it down:**

- `public class HelloWorld` — the class name must match the filename (`HelloWorld.java`).
- `public static void main(String[] args)` — the entry point every Java app needs.
- `System.out.println(...)` — prints to the console.

---

## 2. Java Fundamentals

### Variables & Data Types

Java is statically typed — every variable has a declared type.

```java
// Primitive types
int age = 30;
double price = 19.99;
boolean isActive = true;
char grade = 'A';
long population = 8_000_000_000L;
float ratio = 3.14f;
byte smallNumber = 127;
short mediumNumber = 32000;

// Reference type
String name = "Alice";

// Type inference (Java 10+)
var city = "New York"; // inferred as String
```

| Type      | Size   | Example        |
| --------- | ------ | -------------- |
| `byte`    | 8-bit  | `127`          |
| `short`   | 16-bit | `32000`        |
| `int`     | 32-bit | `2147483647`   |
| `long`    | 64-bit | `9999999999L`  |
| `float`   | 32-bit | `3.14f`        |
| `double`  | 64-bit | `3.14159`      |
| `char`    | 16-bit | `'A'`          |
| `boolean` | 1-bit  | `true`/`false` |

### Constants

```java
final double PI = 3.14159;
```

### Operators

#### Arithmetic Operators

```java
int a = 10, b = 3;

System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3  (integer division — truncates)
System.out.println(a % b);  // 1  (remainder / modulo)

// Mixing int and double promotes to double
System.out.println(a / (double) b); // 3.3333333333333335
```

#### Relational (Comparison) Operators

```java
System.out.println(a > b);   // true
System.out.println(a < b);   // false
System.out.println(a >= b);  // true
System.out.println(a <= b);  // false
System.out.println(a == b);  // false — equality
System.out.println(a != b);  // true  — inequality
```

> **Careful with `==` on objects.** For primitives, `==` compares values. For reference types (objects), `==` compares _memory references_, not content — use `.equals()` to compare content:
>
> ```java
> String s1 = new String("hi");
> String s2 = new String("hi");
> System.out.println(s1 == s2);      // false — different objects
> System.out.println(s1.equals(s2)); // true  — same content
> ```

#### Logical Operators

```java
boolean result = (a > 5) && (b < 5); // AND — true
boolean either = (a > 5) || (b > 5); // OR  — true
boolean not = !(a > 5);              // NOT — false
```

`&&` and `||` are **short-circuiting**: the right-hand side isn't evaluated if the left side already determines the result. This matters for both performance and safety:

```java
String name = null;
// Safe: name != null is checked first; if false, .equals() is never called
if (name != null && name.equals("Alice")) {
    System.out.println("Match");
}
```

There are also non-short-circuiting logical operators `&` and `|`, which always evaluate both sides — rarely used for booleans in practice, but common as **bitwise** operators (below).

#### Bitwise & Shift Operators

Operate directly on the binary representation of integers — common in low-level code, flags/bitmasks, and performance-sensitive work.

```java
int x = 5;   // 0101
int y = 3;   // 0011

System.out.println(x & y);   // 1  (0001) — AND: 1 if both bits are 1
System.out.println(x | y);   // 7  (0111) — OR: 1 if either bit is 1
System.out.println(x ^ y);   // 6  (0110) — XOR: 1 if bits differ
System.out.println(~x);      // -6        — NOT: flips all bits

System.out.println(x << 1);  // 10 — left shift (multiply by 2)
System.out.println(x >> 1);  // 2  — right shift (divide by 2, sign-preserving)
System.out.println(-8 >>> 1); // unsigned right shift — fills with 0, ignores sign
```

#### Assignment Operators

```java
int counter = 0;
counter++;   // post-increment -> 1
counter--;   // post-decrement -> 0
++counter;   // pre-increment  -> 1

int x = 5;
x += 3;  // x = x + 3  -> 8
x -= 2;  // x = x - 2  -> 6
x *= 2;  // x = x * 2  -> 12
x /= 4;  // x = x / 4  -> 3
x %= 2;  // x = x % 2  -> 1
x <<= 1; // x = x << 1
x &= 1;  // x = x & 1
```

**Pre vs. post increment** — subtle but a classic interview trap:

```java
int a = 5;
int b = a++; // b = 5, then a becomes 6 (post: use old value, then increment)
int c = ++a; // a becomes 7 first, then c = 7 (pre: increment, then use new value)
```

#### Ternary Operator

A compact one-line `if/else` that returns a value:

```java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status); // Adult

// Can be chained, but keep it readable
String category = (age < 13) ? "Child" : (age < 20) ? "Teen" : "Adult";
```

#### `instanceof` Operator

Checks whether an object is an instance of a given type — commonly used before casting:

```java
Object obj = "Hello";

if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// Pattern matching for instanceof (Java 16+) — casts and binds in one step
if (obj instanceof String s) {
    System.out.println(s.length()); // no separate cast needed
}
```

#### Operator Precedence (high to low, common ones)

1. `()` `[]` `.` — grouping, array access, member access
2. `++` `--` `!` `~` (unary)
3. `*` `/` `%`
4. `+` `-`
5. `<<` `>>` `>>>`
6. `<` `<=` `>` `>=` `instanceof`
7. `==` `!=`
8. `&`
9. `^`
10. `|`
11. `&&`
12. `||`
13. `? :` (ternary)
14. `=` `+=` `-=` etc. (assignment)

> When in doubt, use parentheses — `(a + b) * c` is clearer than relying on memorized precedence rules, and costs nothing at runtime.

### String Basics

```java
String greeting = "Hello";
String name = "World";

String message = greeting + ", " + name + "!"; // concatenation
System.out.println(message.length());          // 12
System.out.println(message.toUpperCase());      // HELLO, WORLD!
System.out.println(message.contains("World"));  // true
System.out.println(message.substring(0, 5));    // Hello

// Text blocks (Java 15+)
String html = """
    <html>
        <body>Hi</body>
    </html>
    """;
```

---

### Type Casting

Converting a value from one type to another.

**Widening (implicit)** — smaller type to larger type, done automatically, no data loss:

```java
int i = 100;
long l = i;      // int -> long, automatic
double d = l;    // long -> double, automatic
```

**Narrowing (explicit)** — larger type to smaller type, requires a cast, can lose data:

```java
double price = 19.99;
int rounded = (int) price; // 19 — decimal part is truncated, not rounded

long big = 123456789012L;
int truncated = (int) big; // overflow — result is unpredictable/wrong
```

**Upcasting vs. downcasting** (for objects, ties into inheritance):

```java
Animal a = new Dog();      // upcasting — implicit, always safe (Dog IS-A Animal)

Dog d = (Dog) a;            // downcasting — explicit, only safe if `a` really holds a Dog
if (a instanceof Dog dog) { // guard with instanceof to avoid ClassCastException
    dog.speak();
}
```

### Wrapper Classes & Autoboxing

Every primitive has a corresponding **wrapper class** (an object version): `int`→`Integer`, `double`→`Double`, `boolean`→`Boolean`, `char`→`Character`, etc. Wrapper classes are needed anywhere Java requires an object — e.g., generics (`List<Integer>`, not `List<int>`).

```java
int primitive = 10;
Integer boxed = primitive;      // autoboxing — automatic primitive -> wrapper
int unboxed = boxed;            // auto-unboxing — automatic wrapper -> primitive

List<Integer> numbers = new ArrayList<>();
numbers.add(5); // autoboxed to Integer automatically
```

**The classic `==` trap with wrapper classes:** Java caches `Integer` objects for values -128 to 127. Outside that range, autoboxing creates new objects, so `==` (reference comparison) can silently give the wrong answer.

```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true — both pulled from the integer cache

Integer x = 200;
Integer y = 200;
System.out.println(x == y); // false! — outside cache range, different objects
System.out.println(x.equals(y)); // true — always use .equals() for wrapper comparisons
```

> **Rule:** always use `.equals()` to compare wrapper objects, never `==`. Same advice as for `String`.

### `this` vs. `super`

`this` refers to the **current object instance**; `super` refers to the **parent class**.

```java
class Animal {
    String name = "Animal";

    Animal(String name) {
        this.name = name; // "this.name" (field) vs "name" (parameter) — resolves ambiguity
    }

    void speak() {
        System.out.println(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);        // calls the parent constructor — must be the first statement
    }

    @Override
    void speak() {
        super.speak();      // calls the parent's version of speak() first
        System.out.println(this.name + " barks");
    }
}
```

`this` is also used to call another constructor in the same class ("constructor chaining"):

```java
class Point {
    int x, y;

    Point() {
        this(0, 0); // delegates to the two-arg constructor below
    }

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

### The `static` Keyword

`static` means "belongs to the class itself, not to any individual instance." Static members are shared across all objects and can be accessed without creating an instance.

```java
class Counter {
    static int totalCount = 0; // shared across ALL instances
    int id;                    // unique per instance

    Counter() {
        totalCount++;          // increments the shared counter
        this.id = totalCount;
    }

    static void printTotal() { // static method — can't use "this", can't access instance fields
        System.out.println("Total created: " + totalCount);
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
Counter.printTotal(); // Total created: 2 — called on the class, not an instance
```

**Static blocks** run once, when the class is first loaded — useful for one-time setup of static fields:

```java
class Config {
    static final Map<String, String> SETTINGS;

    static {
        SETTINGS = new HashMap<>();
        SETTINGS.put("env", "production");
        SETTINGS.put("version", "1.0");
    }
}
```

**Static nested classes** don't need an instance of the outer class to exist (contrast with regular inner classes, covered in the OOP section):

```java
class Outer {
    static class Nested {
        void greet() { System.out.println("Hello from nested class"); }
    }
}

Outer.Nested nested = new Outer.Nested(); // no Outer instance required
```

> Rule of thumb: use `static` for anything that logically belongs to the _class as a whole_ (utility methods, constants, shared counters) rather than to any particular object.

### Packages & Imports

**Packages** organize related classes into namespaces and help avoid naming collisions.

```java
package com.example.myapp; // must be the first line in the file

public class MyClass {
    // ...
}
```

Typical convention: reverse domain name, e.g. `com.company.project.module`.

```java
// Importing a single class
import java.util.List;

// Importing everything in a package (use sparingly — can obscure where classes come from)
import java.util.*;

// Static import — brings in static members directly, no need to qualify them
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

double area = PI * sqrt(4); // instead of Math.PI, Math.sqrt(4)
```

Classes in the same package can see each other's package-private members without importing anything (see the Access Modifiers section).

### Reading User Input (`Scanner`)

```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Hello " + name + ", you are " + age + " years old.");

        scanner.close(); // good practice, though not strictly required for System.in
    }
}
```

Common `Scanner` methods: `nextLine()` (whole line), `next()` (single token), `nextInt()`, `nextDouble()`, `nextBoolean()`, `hasNextLine()` (check before reading, avoid exceptions).

> **Gotcha:** mixing `nextInt()`/`nextDouble()` with `nextLine()` is a classic bug — the numeric methods don't consume the trailing newline, so a subsequent `nextLine()` reads an empty string. Add an extra `scanner.nextLine()` to consume it, as shown in the To-Do App mini project.

### String Formatting

```java
String name = "Alice";
int age = 30;
double gpa = 3.876;

// String.format — returns a formatted String
String formatted = String.format("Name: %s, Age: %d, GPA: %.2f", name, age, gpa);
System.out.println(formatted); // Name: Alice, Age: 30, GPA: 3.88

// printf — same format specifiers, prints directly
System.out.printf("Name: %s, Age: %d%n", name, age);

// Common format specifiers: %s (string), %d (int), %f (float/double), %.2f (2 decimal places),
// %n (platform-independent newline), %-10s (left-justify in 10 chars), %05d (zero-padded)
System.out.printf("%-10s|%5d%n", "Bob", 42); // Bob       |   42
```

## 3. Control Flow

### If / Else

```java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C or below");
}
```

### Switch

```java
// Classic switch
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Another day");
}

// Modern switch expression (Java 14+)
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Unknown";
};
```

### Loops

```java
// for loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// while loop
int count = 0;
while (count < 3) {
    System.out.println("count = " + count);
    count++;
}

// do-while
int n = 0;
do {
    System.out.println("n = " + n);
    n++;
} while (n < 3);

// for-each (iterating a collection/array)
int[] numbers = {1, 2, 3, 4};
for (int num : numbers) {
    System.out.println(num);
}
```

### Break & Continue

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) break;      // exits loop entirely
    if (i % 2 == 0) continue; // skips to next iteration
    System.out.println(i);
}
```

---

## 4. Arrays & Strings

### Arrays

```java
// Declaration & initialization
int[] scores = {90, 85, 77, 92};
String[] names = new String[3];
names[0] = "Alice";

// 2D arrays
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(grid[1][2]); // 6

// Iterating
for (int score : scores) {
    System.out.println(score);
}

// Common utilities
import java.util.Arrays;

int[] arr = {5, 3, 1, 4, 2};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 2, 3, 4, 5]
```

### StringBuilder (mutable strings — efficient in loops)

```java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 5; i++) {
    sb.append(i).append(", ");
}
System.out.println(sb.toString()); // 0, 1, 2, 3, 4,
```

### Common String Methods

```java
String s = "  Hello, Java!  ";
System.out.println(s.trim());              // "Hello, Java!"
System.out.println(s.trim().split(","));    // splits into array
System.out.println(String.join("-", "a", "b", "c")); // "a-b-c"
System.out.println(s.trim().equalsIgnoreCase("hello, java!")); // true
```

---

## 5. Methods

```java
public class Calculator {

    // Standard method
    public static int add(int a, int b) {
        return a + b;
    }

    // Method overloading
    public static double add(double a, double b) {
        return a + b;
    }

    // Varargs
    public static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) total += n;
        return total;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));          // 5
        System.out.println(add(2.5, 3.5));       // 6.0
        System.out.println(sum(1, 2, 3, 4, 5));  // 15
    }
}
```

**Recursion example:**

```java
public static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

---

## 6. Object-Oriented Programming (OOPs)

Java's four pillars: **Encapsulation, Inheritance, Polymorphism, Abstraction.**

### Classes & Objects

```java
public class Car {
    // Fields (state)
    private String model;
    private int year;

    // Constructor
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    // Methods (behavior)
    public void drive() {
        System.out.println(model + " is driving.");
    }

    // Getters/setters (encapsulation)
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}

// Usage
Car myCar = new Car("Tesla Model 3", 2024);
myCar.drive(); // Tesla Model 3 is driving.
```

### Access Modifiers

Access modifiers control **visibility** — which classes/packages can see and use a field, method, constructor, or class. They're central to encapsulation: they let you decide exactly what part of your class is a public "API" versus private internal detail.

Java has four levels, from most to least restrictive:

| Modifier                          | Same class | Same package | Subclass (different package) | Everywhere |
| --------------------------------- | :--------: | :----------: | :--------------------------: | :--------: |
| `private`                         |     ✅     |      ❌      |              ❌              |     ❌     |
| _(no modifier)_ — package-private |     ✅     |      ✅      |              ❌              |     ❌     |
| `protected`                       |     ✅     |      ✅      |              ✅              |     ❌     |
| `public`                          |     ✅     |      ✅      |              ✅              |     ✅     |

```java
public class BankAccount {

    private double balance;         // only visible inside BankAccount
    String accountHolder;           // package-private — visible to classes in the same package
    protected String accountType;   // visible in same package + to subclasses anywhere
    public String accountNumber;    // visible everywhere

    private void logTransaction(String msg) { // internal helper, hidden from outside
        System.out.println("[LOG] " + msg);
    }

    protected void applyInterest(double rate) { // meant to be used/overridden by subclasses
        balance += balance * rate;
    }

    public void deposit(double amount) { // the public API callers actually use
        balance += amount;
        logTransaction("Deposited " + amount);
    }

    public double getBalance() { // controlled read access to a private field
        return balance;
    }
}
```

**Guidelines for choosing a modifier:**

- **`private`** — default choice for fields. Almost all fields should be `private`, exposed only through getters/setters or other public methods (encapsulation in action).
- **package-private (no modifier)** — useful for helper classes/methods meant to be shared only within the same package, but hidden from outside code — common in library/module design.
- **`protected`** — for members a subclass needs to extend or override, but that shouldn't be part of the public API for everyone else.
- **`public`** — reserved for the intentional, stable API of a class: the methods/constructors external code is meant to call.

**Top-level classes** can only be `public` or package-private (no `private`/`protected` at the top level):

```java
public class Visible {}     // usable from any package
class PackageOnly {}        // usable only within this file's package
```

**Constructors** follow the same rules and are commonly used to control instantiation:

```java
public class Singleton {
    private Singleton() {} // private constructor — prevents "new Singleton()" from outside
}
```

> Rule of thumb: start with the most restrictive modifier that works, and only widen it (`private` → package-private → `protected` → `public`) when you have an actual reason to. It's much easier to loosen access later than to tighten it once external code depends on it.

### Inheritance

```java
public class Vehicle {
    protected String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    public void honk() {
        System.out.println("Beep!");
    }
}

public class Motorcycle extends Vehicle {
    public Motorcycle(String brand) {
        super(brand); // calls parent constructor
    }

    @Override
    public void honk() {
        System.out.println(brand + " motorcycle: Vroom!");
    }
}
```

### Polymorphism

```java
Vehicle v = new Motorcycle("Harley");
v.honk(); // Harley motorcycle: Vroom! (runtime polymorphism)
```

### Abstraction (Abstract Classes & Interfaces)

```java
// Abstract class — can have partial implementation
public abstract class Shape {
    abstract double area(); // must be implemented by subclasses

    void describe() {
        System.out.println("Area = " + area());
    }
}

public class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Interface — pure contract (can have default methods too)
public interface Drivable {
    void drive();

    default void stop() {
        System.out.println("Stopping...");
    }
}

public class Truck implements Drivable {
    @Override
    public void drive() {
        System.out.println("Truck driving on highway.");
    }
}
```

### Enums

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.MONDAY;
if (today == Day.MONDAY) {
    System.out.println("Start of the work week.");
}
```

### Overloading vs. Overriding

Two concepts that look similar but mean very different things.

**Overloading** — same method name, different parameter list, resolved at **compile time** (same class, or a subclass adding new variants).

```java
public class Printer {
    void print(String s) { System.out.println(s); }
    void print(int i) { System.out.println(i); }
    void print(String s, int times) {
        for (int i = 0; i < times; i++) System.out.println(s);
    }
}
```

**Overriding** — subclass redefines a parent method with the **same signature**, resolved at **runtime** (this is what enables polymorphism). Requires `@Override` in practice, and the method can't be `private`, `static`, or `final` in the parent.

```java
class Animal {
    void speak() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof!"); }
}
```

### Abstraction vs. Encapsulation

These are often confused:

- **Encapsulation** is about _hiding data_ — bundling fields with the methods that operate on them, and restricting direct access (`private` fields + public getters/setters). It's a _how_.
- **Abstraction** is about _hiding complexity_ — exposing only what's necessary and hiding implementation detail behind a simpler interface (abstract classes, interfaces). It's a _what_.

> Rule of thumb: encapsulation protects an object's internal _state_; abstraction hides an object's internal _behavior/complexity_ behind a simple contract.

### Association, Aggregation & Composition

These three describe **relationships between classes** — how objects relate to and depend on one another. They form a spectrum of coupling, from loosest to tightest.

#### Association

The most general relationship: one class **uses or interacts with** another, but neither owns the other. Both objects can exist independently, and the relationship can be one-to-one, one-to-many, or many-to-many.

```java
class Teacher {
    void teach(Student student) {
        System.out.println("Teaching " + student.getName());
    }
}

class Student {
    private String name;
    public Student(String name) { this.name = name; }
    public String getName() { return name; }
}
```

`Teacher` and `Student` are associated — a teacher teaches students — but neither owns the other's lifecycle. A `Student` can exist without any `Teacher`, and vice versa.

#### Aggregation ("has-a", weak ownership)

A special, one-directional form of association where one class **contains** another, but the contained object's lifecycle is **independent** — it can exist on its own, before or after the container.

```java
class Department {
    private List<Professor> professors; // Department "has" professors

    public Department(List<Professor> professors) {
        this.professors = professors; // professors created elsewhere, just referenced
    }
}

class Professor {
    private String name;
    public Professor(String name) { this.name = name; }
}

// Usage — professors exist independently of the department
Professor p1 = new Professor("Dr. Smith");
Professor p2 = new Professor("Dr. Lee");
Department cs = new Department(List.of(p1, p2));
// If `cs` is destroyed, p1 and p2 still exist — they could join another department.
```

#### Composition ("has-a", strong ownership)

A stricter form of aggregation: the contained object's lifecycle is **bound** to the container. If the container is destroyed, the contained parts are destroyed too — they can't meaningfully exist outside it.

```java
class Engine {
    void start() { System.out.println("Engine starting..."); }
}

class Car {
    private final Engine engine; // Car "owns" its Engine

    public Car() {
        this.engine = new Engine(); // created inside, tied to Car's lifecycle
    }

    void start() {
        engine.start();
    }
}
// There is no independent "Engine" floating around outside a Car in this design —
// when the Car object is gone, so is its Engine.
```

| Relationship    | Ownership        | Lifecycle dependency | Example                 |
| --------------- | ---------------- | -------------------- | ----------------------- |
| **Association** | None             | Independent          | Teacher ↔ Student       |
| **Aggregation** | Weak ("has-a")   | Independent          | Department ○— Professor |
| **Composition** | Strong ("has-a") | Dependent            | Car ●— Engine           |

> Also worth knowing: **Inheritance** ("is-a") vs. these relationships ("has-a"). A `Dog` **is an** `Animal` (inheritance); a `Car` **has an** `Engine` (composition). Favoring composition over inheritance (mentioned in the Best Practices section) means preferring "has-a" designs — assembling behavior from parts — over deep "is-a" class hierarchies, because it's more flexible and avoids fragile base-class problems.

### Cohesion & Coupling

Two of the most important quality metrics for class/module design.

**Cohesion** — how closely related and focused the responsibilities _within_ a single class or module are. **High cohesion** (good) means a class does one well-defined thing; **low cohesion** (bad) means it's a grab-bag of unrelated responsibilities.

```java
// Low cohesion — this class does unrelated things (bad)
class UtilityMess {
    void sendEmail(String to, String body) { /* ... */ }
    double calculateTax(double income) { /* ... */ }
    void connectToDatabase() { /* ... */ }
}

// High cohesion — each class has a single, focused purpose (good)
class EmailService {
    void sendEmail(String to, String body) { /* ... */ }
}

class TaxCalculator {
    double calculateTax(double income) { /* ... */ }
}

class DatabaseConnector {
    void connect() { /* ... */ }
}
```

**Coupling** — how much one class depends on the internal details of another. **Low coupling** (good) means classes can change independently; **high coupling** (bad) means a change in one class ripples through many others.

```java
// High coupling — OrderService is tightly bound to a concrete MySQL class
class OrderService {
    private MySQLDatabase db = new MySQLDatabase(); // hardcoded dependency
}

// Low coupling — depends on an interface, not a concrete implementation
interface Database {
    void save(String data);
}

class OrderService2 {
    private final Database db; // depends on abstraction

    public OrderService2(Database db) { // injected — easy to swap implementations
        this.db = db;
    }
}
```

> **Goal in good OOP design:** high cohesion _within_ classes, low coupling _between_ classes. This is also why "program to interfaces" (Best Practices section) matters — it's a direct technique for reducing coupling.

### `equals()`, `hashCode()`, `toString()`

```java
public class Point {
    private int x, y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Point)) return false;
        Point p = (Point) obj;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
}
```

### Records (Java 16+) — concise immutable data classes

```java
public record Point(int x, int y) {}

Point p = new Point(3, 4);
System.out.println(p);      // Point[x=3, y=4]
System.out.println(p.x());  // 3
```

---

### Inner, Nested, Local & Anonymous Classes

Java lets you define a class inside another class or even inside a method — useful for tightly-scoped helper logic.

```java
class Outer {
    private int value = 10;

    // Inner class (non-static) — tied to an instance of Outer, can access its fields directly
    class Inner {
        void show() {
            System.out.println("Outer value: " + value);
        }
    }
}

Outer outer = new Outer();
Outer.Inner inner = outer.new Inner(); // needs an Outer instance to create
inner.show();
```

```java
void processOrder() {
    // Local class — defined inside a method, scoped to that method only
    class OrderValidator {
        boolean isValid(int amount) {
            return amount > 0;
        }
    }

    OrderValidator validator = new OrderValidator();
    System.out.println(validator.isValid(50));
}
```

```java
// Anonymous class — a one-off implementation of an interface/abstract class, no name needed
Runnable task = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running anonymously");
    }
};
task.run();

// Same idea, comparator example — common before lambdas existed
Comparator<String> byLength = new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return a.length() - b.length();
    }
};
```

> In modern Java, lambdas (Section 11) replace most anonymous class use for functional interfaces — but anonymous classes are still useful when you need to override _multiple_ methods or hold extra state, which a lambda can't do.

### `Comparable` vs. `Comparator`

Both let you define sort order, but they solve different problems.

**`Comparable<T>`** — the class itself defines its _natural, default_ ordering. Implemented by the class, one ordering only.

```java
class Employee implements Comparable<Employee> {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public int compareTo(Employee other) {
        return Double.compare(this.salary, other.salary); // natural order: by salary
    }
}

List<Employee> employees = new ArrayList<>(List.of(
    new Employee("Alice", 75000),
    new Employee("Bob", 65000)
));
Collections.sort(employees); // uses compareTo() automatically
```

**`Comparator<T>`** — an _external_, pluggable strategy for ordering — lets you define as many different orderings as you want, without modifying the class.

```java
Comparator<Employee> byName = Comparator.comparing(e -> e.name);
Comparator<Employee> bySalaryDesc = Comparator.comparingDouble((Employee e) -> e.salary).reversed();

employees.sort(byName);
employees.sort(bySalaryDesc);

// Chaining comparators
Comparator<Employee> byNameThenSalary = Comparator
    .comparing((Employee e) -> e.name)
    .thenComparingDouble(e -> e.salary);
```

> Rule of thumb: implement `Comparable` for a class's one "obvious" default order (e.g. numbers sort ascending); use `Comparator` for anything situational or when you need multiple orderings.

### `Iterator` & `Iterable`

The for-each loop (`for (T item : collection)`) isn't magic — it works on any class implementing `Iterable<T>`, which provides an `Iterator<T>`.

```java
import java.util.*;

class NumberRange implements Iterable<Integer> {
    private int start, end;

    NumberRange(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            int current = start;

            @Override
            public boolean hasNext() {
                return current <= end;
            }

            @Override
            public Integer next() {
                return current++;
            }
        };
    }
}

// Now this class can be used in a for-each loop:
for (int n : new NumberRange(1, 5)) {
    System.out.println(n); // 1 2 3 4 5
}
```

This is exactly how `ArrayList`, `HashSet`, and every other built-in collection supports for-each — they all implement `Iterable`.

### Sealed Classes & Pattern Matching for Switch (Java 17/21+)

**Sealed classes** restrict exactly which classes are allowed to extend/implement them — giving you exhaustive, closed hierarchies (useful for modeling a fixed set of cases, like an ADT).

```java
public sealed interface Shape permits Circle, Square, Triangle {}

public final class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
}

public final class Square implements Shape {
    double side;
    Square(double side) { this.side = side; }
}

public final class Triangle implements Shape {
    double base, height;
    Triangle(double base, double height) { this.base = base; this.height = height; }
}
```

**Pattern matching for `switch`** (Java 21+) pairs naturally with sealed types — the compiler can verify you've handled every case:

```java
static double area(Shape shape) {
    return switch (shape) {
        case Circle c -> Math.PI * c.radius * c.radius;
        case Square s -> s.side * s.side;
        case Triangle t -> 0.5 * t.base * t.height;
        // no `default` needed — compiler knows these are the only possible subtypes
    };
}
```

### Shallow Copy vs. Deep Copy

**Shallow copy** — copies an object's fields as-is; if a field is a reference to another object, both the original and copy share (point to) the _same_ nested object.

```java
class Address {
    String city;
    Address(String city) { this.city = city; }
}

class Person implements Cloneable {
    String name;
    Address address; // reference field

    Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // shallow copy — Address is shared, not duplicated
    }
}

Person original = new Person("Alice", new Address("NYC"));
Person shallowCopy = (Person) original.clone();
shallowCopy.address.city = "Boston";
System.out.println(original.address.city); // "Boston" — original was affected too!
```

**Deep copy** — recursively copies nested objects too, so the copy is fully independent.

```java
class PersonDeep implements Cloneable {
    String name;
    Address address;

    PersonDeep(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    @Override
    protected Object clone() {
        return new PersonDeep(this.name, new Address(this.address.city)); // new Address too
    }
}
```

> In practice, most professional codebases avoid `Cloneable` (it's a famously awkward API) and instead write explicit copy constructors or use immutable objects (records, `final` fields) to avoid the shallow/deep copy problem altogether.

### Interface Static & Private Methods, and the Diamond Problem

Since Java 8, interfaces can have `default` methods (with a body); since Java 9, they can also have `static` and `private` methods.

```java
interface Vehicle {
    void drive();

    // default method — implementing classes get this for free, can override it
    default void honk() {
        System.out.println("Beep!");
    }

    // static method — belongs to the interface itself, called as Vehicle.create(...)
    static Vehicle create(String type) {
        return () -> System.out.println(type + " driving");
    }

    // private method (Java 9+) — internal helper, shared by default methods, not exposed
    private void logAction(String action) {
        System.out.println("[LOG] " + action);
    }

    default void driveAndLog() {
        logAction("driving");
        drive();
    }
}
```

**The "diamond problem"** — if a class implements two interfaces that both provide a _default_ method with the same signature, the compiler forces you to resolve the conflict explicitly:

```java
interface A { default void greet() { System.out.println("Hello from A"); } }
interface B { default void greet() { System.out.println("Hello from B"); } }

class C implements A, B {
    @Override
    public void greet() {
        A.super.greet(); // explicitly choose which parent's version to use
        B.super.greet();
    }
}
```

### SOLID Principles

SOLID is a set of five design principles for writing maintainable, extensible object-oriented code. They come up constantly in code reviews and system design interviews.

**S — Single Responsibility Principle**: a class should have one, and only one, reason to change.

```java
// Violates SRP — this class has two unrelated responsibilities
class Invoice {
    void calculateTotal() { /* ... */ }
    void saveToDatabase() { /* ... */ } // should not be Invoice's job
}

// Follows SRP — responsibilities split into focused classes
class Invoice {
    void calculateTotal() { /* ... */ }
}

class InvoiceRepository {
    void save(Invoice invoice) { /* ... */ }
}
```

**O — Open/Closed Principle**: classes should be open for extension, but closed for modification — add new behavior via new code, not by editing existing, tested code.

```java
interface DiscountStrategy {
    double apply(double price);
}

class NoDiscount implements DiscountStrategy {
    public double apply(double price) { return price; }
}

class BlackFridayDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.5; }
}
// Adding a new discount = a new class, not editing existing pricing logic.
```

**L — Liskov Substitution Principle**: subclasses must be usable anywhere their parent type is expected, without breaking behavior.

```java
// Classic violation: Square "is-a" Rectangle mathematically, but breaks LSP here
class Rectangle {
    protected double width, height;
    void setWidth(double w) { width = w; }
    void setHeight(double h) { height = h; }
    double area() { return width * height; }
}

class Square extends Rectangle {
    @Override
    void setWidth(double w) { width = height = w; } // surprising side effect!
    @Override
    void setHeight(double h) { width = height = h; } // breaks caller expectations
}
// Code that expects Rectangle.setWidth() to only affect width now behaves unexpectedly for Square.
```

**I — Interface Segregation Principle**: prefer many small, specific interfaces over one large, general-purpose one — don't force classes to implement methods they don't need.

```java
// Violates ISP — a Robot doesn't eat, but is forced to implement eat()
interface Worker {
    void work();
    void eat();
}

// Follows ISP — split into focused interfaces
interface Workable { void work(); }
interface Eatable { void eat(); }

class Human implements Workable, Eatable { /* implements both */ }
class Robot implements Workable { /* only implements what it needs */ }
```

**D — Dependency Inversion Principle**: depend on abstractions (interfaces), not concrete implementations — this is the same idea from the "Cohesion & Coupling" section applied as a formal principle.

```java
interface NotificationService {
    void send(String message);
}

class EmailNotification implements NotificationService {
    public void send(String message) { System.out.println("Email: " + message); }
}

class OrderProcessor {
    private final NotificationService notifier; // depends on the interface, not EmailNotification directly

    OrderProcessor(NotificationService notifier) {
        this.notifier = notifier;
    }

    void processOrder() {
        notifier.send("Order processed!"); // swap in SMS/push notification without changing this class
    }
}
```

## 7. Exception Handling

```java
public class Divider {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Cleanup runs no matter what.");
        }
    }

    static int divide(int a, int b) {
        return a / b; // throws ArithmeticException if b == 0
    }
}
```

### Custom Exceptions

```java
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

public class BankAccount {
    private double balance;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Not enough funds!");
        }
        balance -= amount;
    }
}
```

### Multi-Catch & Exception Chaining

**Multi-catch** — handle several exception types with one block when the recovery logic is identical:

```java
try {
    riskyOperation();
} catch (IOException | SQLException e) {
    System.out.println("Recoverable error: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Unexpected error: " + e.getMessage());
}
```

**Exception chaining** — wrap a lower-level exception inside a higher-level, more meaningful one, without losing the original cause (critical for debugging):

```java
class DataAccessException extends RuntimeException {
    public DataAccessException(String message, Throwable cause) {
        super(message, cause); // preserves the original exception
    }
}

void loadUser() {
    try {
        // ... database call that throws SQLException
        throw new java.sql.SQLException("Connection timed out");
    } catch (java.sql.SQLException e) {
        throw new DataAccessException("Failed to load user", e); // wrap, don't discard
    }
}

// Later, e.getCause() returns the original SQLException — nothing is lost
```

### Try-With-Resources (auto-closes resources)

```java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException e) {
    e.printStackTrace();
}
```

**Checked vs. Unchecked:** Checked exceptions (`IOException`, custom checked ones) must be declared or caught. Unchecked exceptions (`RuntimeException` and subclasses like `NullPointerException`) don't require handling — but you often should anyway.

---

## 8. Collections Framework

### List

```java
import java.util.*;

List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");

System.out.println(fruits.get(0));   // Apple
fruits.remove("Banana");
System.out.println(fruits);          // [Apple, Cherry]

for (String fruit : fruits) {
    System.out.println(fruit);
}
```

### Set (no duplicates)

```java
Set<Integer> uniqueNumbers = new HashSet<>();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(2); // ignored, duplicate
System.out.println(uniqueNumbers); // [1, 2]

// Sorted set
TreeSet<Integer> sorted = new TreeSet<>(uniqueNumbers);
```

### Map (key-value pairs)

```java
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 30);
ages.put("Bob", 25);

System.out.println(ages.get("Alice")); // 30

for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + " is " + entry.getValue());
}

// getOrDefault, computeIfAbsent — common pro-level patterns
ages.computeIfAbsent("Carol", k -> 22);
System.out.println(ages.getOrDefault("Dave", 0)); // 0
```

### Queue & Deque

```java
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
stack.push(2);
System.out.println(stack.pop()); // 2 (LIFO)

Queue<Integer> queue = new LinkedList<>();
queue.offer(1);
queue.offer(2);
System.out.println(queue.poll()); // 1 (FIFO)
```

### Comparators

```java
List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));

Collections.sort(names); // natural order
names.sort(Comparator.reverseOrder());
names.sort(Comparator.comparing(String::length));
```

---

## 9. Generics

Generics let you write type-safe, reusable code.

```java
public class Box<T> {
    private T content;

    public void set(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

Box<String> stringBox = new Box<>();
stringBox.set("Hello");
System.out.println(stringBox.get());

// Generic method
public static <T> void printAll(List<T> list) {
    for (T item : list) {
        System.out.println(item);
    }
}

// Bounded type parameters
public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
```

---

### Bounded Wildcards (`? extends`, `? super`)

Wildcards make generic methods more flexible about _which_ related types they accept.

```java
// ? extends T — "producer": you can READ from it, treat elements as T (or a subtype)
static double sumAll(List<? extends Number> list) {
    double total = 0;
    for (Number n : list) total += n.doubleValue();
    return total;
}

sumAll(List.of(1, 2, 3));       // works with List<Integer>
sumAll(List.of(1.5, 2.5));      // works with List<Double>

// ? super T — "consumer": you can WRITE T (or a subtype) into it
static void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
}

List<Number> numbers = new ArrayList<>();
addIntegers(numbers); // works — Number is a supertype of Integer
```

> Mnemonic — **PECS**: **P**roducer **E**xtends, **C**onsumer **S**uper. If you only read from a generic structure, use `? extends`; if you only write to it, use `? super`.

### Type Erasure

Java generics exist only at **compile time** — the compiler checks types, then erases them, replacing generic types with their bounds (or `Object`) in the compiled bytecode. This is why certain things don't work with generics:

```java
List<String> strings = new ArrayList<>();
List<Integer> integers = new ArrayList<>();
System.out.println(strings.getClass() == integers.getClass()); // true! Both are just ArrayList at runtime

// This does NOT compile — you can't check the generic type at runtime, it's erased
// if (strings instanceof List<String>) { }

// You also can't create generic arrays directly
// T[] array = new T[10]; // compile error

// And you can't have static fields of a generic type
// static T value; // compile error — no per-instance T at the static level
```

> Practical implication: type safety with generics is enforced by the compiler, not the JVM. This is also why unchecked warnings appear when mixing generics with raw types or arrays.

## 10. File I/O

```java
import java.io.*;
import java.nio.file.*;

// Modern approach with NIO
public class FileExample {
    public static void main(String[] args) throws IOException {
        Path path = Path.of("example.txt");

        // Write
        Files.writeString(path, "Hello, File!\nSecond line.");

        // Read all lines
        List<String> lines = Files.readAllLines(path);
        lines.forEach(System.out::println);

        // Append
        Files.writeString(path, "\nAppended line", StandardOpenOption.APPEND);
    }
}
```

---

## 11. Modern APIs & Utilities

### The `java.time` API (Dates & Times)

Introduced in Java 8, `java.time` replaced the old, error-prone `Date`/`Calendar` classes. It's immutable and thread-safe by design.

```java
import java.time.*;
import java.time.format.DateTimeFormatter;

LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1995, Month.JUNE, 15);
System.out.println(today);                     // 2026-08-31
System.out.println(today.isAfter(birthday));   // true

LocalDateTime now = LocalDateTime.now();
LocalTime time = LocalTime.of(14, 30);

// Arithmetic — always returns a new instance (immutable)
LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);

// Duration (time-based) and Period (date-based)
Duration duration = Duration.ofHours(2);
Period period = Period.between(birthday, today);
System.out.println(period.getYears() + " years old");

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
System.out.println(today.format(formatter)); // 31/08/2026
```

### Regular Expressions

```java
import java.util.regex.*;

String text = "Contact: alice@example.com, bob@test.org";
Pattern pattern = Pattern.compile("[\\w.+-]+@[\\w-]+\\.[a-z]{2,}");
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println("Found: " + matcher.group());
}

// Quick checks without compiling a Pattern object
System.out.println("hello123".matches("[a-z]+\\d+")); // true

// Using regex with String methods
String cleaned = "Hello,   World!!".replaceAll("[^a-zA-Z\\s]", ""); // "Hello   World"
String[] parts = "a,b,,c".split(",");                              // ["a","b","","c"]
```

### Serialization

Converting an object into a byte stream (to save to a file, send over a network, etc.) and back.

```java
import java.io.*;

class User implements Serializable {
    private static final long serialVersionUID = 1L; // version control for the class shape
    String name;
    int age;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// Writing an object to a file
try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("user.ser"))) {
    out.writeObject(new User("Alice", 30));
}

// Reading it back
try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("user.ser"))) {
    User user = (User) in.readObject();
    System.out.println(user.name); // Alice
}
```

> In modern applications, JSON (via Jackson/Gson) or Protocol Buffers are far more common than Java's native serialization for real-world data exchange — but native serialization still shows up in caching layers, some RMI-based systems, and interviews.

## 12. Lambdas & Functional Interfaces

A **functional interface** has exactly one abstract method. Lambdas provide a compact way to implement them.

```java
// Built-in functional interfaces
import java.util.function.*;

Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5)); // 25

Predicate<Integer> isEven = x -> x % 2 == 0;
System.out.println(isEven.test(4)); // true

Consumer<String> printer = s -> System.out.println("Value: " + s);
printer.accept("Hi");

Supplier<String> greeting = () -> "Hello there!";
System.out.println(greeting.get());

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(3, 4)); // 7

// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

Calculator multiply = (a, b) -> a * b;
System.out.println(multiply.calculate(3, 4)); // 12

// Method references
List<String> names = List.of("bob", "alice");
names.forEach(System.out::println);
```

---

## 13. Streams API

Streams let you process collections declaratively — filter, map, reduce, etc.

```java
import java.util.*;
import java.util.stream.*;

List<String> names = List.of("Alice", "Bob", "Charlie", "Dave", "Eve");

// Filter + map + collect
List<String> shortUpperNames = names.stream()
    .filter(name -> name.length() <= 4)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println(shortUpperNames); // [BOB, DAVE, EVE]

// Sorting
List<String> sorted = names.stream()
    .sorted(Comparator.comparing(String::length))
    .toList(); // Java 16+ shortcut

// Reduce
int totalLength = names.stream()
    .mapToInt(String::length)
    .sum();

// Grouping
Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));

// Numeric ranges
IntStream.rangeClosed(1, 5)
    .forEach(System.out::println);

// Parallel streams (careful — use for CPU-heavy, side-effect-free tasks)
long count = names.parallelStream()
    .filter(n -> n.startsWith("A"))
    .count();
```

**Common Collectors:**

```java
names.stream().collect(Collectors.joining(", "));      // "Alice, Bob, ..."
names.stream().collect(Collectors.counting());          // count
names.stream().collect(Collectors.toSet());             // Set
names.stream().collect(Collectors.partitioningBy(n -> n.length() > 3));
```

---

## 14. Multithreading & Concurrency

### Creating Threads

```java
// Extending Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

// Implementing Runnable (preferred)
Runnable task = () -> System.out.println("Task running");
Thread thread = new Thread(task);
thread.start();
```

### ExecutorService (professional approach — avoid raw threads)

```java
import java.util.concurrent.*;

ExecutorService executor = Executors.newFixedThreadPool(4);

for (int i = 0; i < 10; i++) {
    int taskId = i;
    executor.submit(() -> {
        System.out.println("Task " + taskId + " on " + Thread.currentThread().getName());
    });
}

executor.shutdown();
```

### Futures & CompletableFuture

```java
CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
    // simulate work
    return 42;
});

future.thenAccept(result -> System.out.println("Got: " + result));

// Chaining
CompletableFuture<String> chained = CompletableFuture
    .supplyAsync(() -> "Hello")
    .thenApply(s -> s + ", World")
    .thenApply(String::toUpperCase);

System.out.println(chained.join()); // HELLO, WORLD
```

### Synchronization

```java
public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}
```

### Locks & Atomic Variables

```java
import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger atomicCounter = new AtomicInteger(0);
atomicCounter.incrementAndGet(); // thread-safe increment
```

---

### Thread Lifecycle

A thread moves through distinct states, managed by the JVM:

- **NEW** — created but `start()` not yet called.
- **RUNNABLE** — running or ready to run, waiting for CPU time.
- **BLOCKED** — waiting to acquire a lock held by another thread.
- **WAITING** / **TIMED_WAITING** — paused, waiting for another thread's signal (`wait()`) or a timeout (`sleep()`, `join(timeout)`).
- **TERMINATED** — finished execution.

```java
Thread t = new Thread(() -> {
    try { Thread.sleep(100); } catch (InterruptedException e) {}
});
System.out.println(t.getState()); // NEW
t.start();
System.out.println(t.getState()); // RUNNABLE (or TIMED_WAITING once sleeping)
t.join(); // waits for t to finish before continuing
System.out.println(t.getState()); // TERMINATED
```

### `wait()`, `notify()`, and Deadlocks

`wait()`/`notify()`/`notifyAll()` let threads coordinate — one thread waits for a condition, another signals when it's ready. They must be called from within a `synchronized` block on the same object.

```java
class SharedBuffer {
    private final Object lock = new Object();
    private boolean dataReady = false;

    void produce() {
        synchronized (lock) {
            dataReady = true;
            lock.notify(); // wake up a waiting thread
        }
    }

    void consume() throws InterruptedException {
        synchronized (lock) {
            while (!dataReady) {
                lock.wait(); // releases the lock and waits until notified
            }
            System.out.println("Data consumed!");
        }
    }
}
```

**Deadlock** happens when two threads each hold a lock the other needs, and both wait forever:

```java
Object lockA = new Object();
Object lockB = new Object();

// Thread 1
synchronized (lockA) {
    synchronized (lockB) { /* ... */ }
}

// Thread 2 (running concurrently) — acquires locks in the OPPOSITE order — classic deadlock setup
synchronized (lockB) {
    synchronized (lockA) { /* ... */ }
}
```

> **Avoiding deadlock:** always acquire locks in a consistent, agreed-upon order across all threads; prefer higher-level concurrency utilities (`ExecutorService`, `java.util.concurrent` classes) over hand-rolled locking wherever possible.

### The `volatile` Keyword

Normally, each thread may cache a variable's value locally for performance, which means one thread's update might not be visible to another. `volatile` forces all reads/writes to go directly to main memory, guaranteeing **visibility** across threads (but NOT atomicity of compound operations like `++`).

```java
class FlagHolder {
    private volatile boolean running = true; // guarantees other threads see updates immediately

    void stop() {
        running = false;
    }

    void run() {
        while (running) {
            // do work — without `volatile`, this loop might never see `running` become false
        }
    }
}
```

> `volatile` fixes visibility, not race conditions on multi-step operations — `count++` on a `volatile int` is still not thread-safe (read-modify-write isn't atomic). For that, use `AtomicInteger` (shown earlier) or `synchronized`.

### Concurrent Collections

Regular collections (`ArrayList`, `HashMap`) are **not thread-safe** — concurrent modification from multiple threads can corrupt them or throw `ConcurrentModificationException`. The `java.util.concurrent` package provides thread-safe alternatives designed for high-concurrency use:

```java
import java.util.concurrent.*;

// Thread-safe map — fine-grained locking, much faster than a synchronized HashMap
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put("a", 1);
concurrentMap.computeIfAbsent("b", k -> 2);

// Thread-safe list optimized for many reads, few writes (copies the array on write)
CopyOnWriteArrayList<String> safeList = new CopyOnWriteArrayList<>();
safeList.add("item1");

// Thread-safe queue for producer-consumer patterns
BlockingQueue<String> queue = new LinkedBlockingQueue<>();
queue.put("task");        // blocks if the queue is full (for bounded queues)
String task = queue.take(); // blocks if the queue is empty, until something is available
```

> Rule of thumb: reach for `java.util.concurrent` collections instead of manually synchronizing a regular collection — they're better tested and usually faster under real concurrent load.

## 15. Design Patterns

### Singleton

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Factory

```java
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() { System.out.println("Drawing Circle"); }
}

class Square implements Shape {
    public void draw() { System.out.println("Drawing Square"); }
}

class ShapeFactory {
    public static Shape createShape(String type) {
        return switch (type) {
            case "circle" -> new Circle();
            case "square" -> new Square();
            default -> throw new IllegalArgumentException("Unknown shape");
        };
    }
}

Shape shape = ShapeFactory.createShape("circle");
shape.draw(); // Drawing Circle
```

### Builder

```java
public class Pizza {
    private final String size;
    private final boolean cheese;
    private final boolean pepperoni;

    private Pizza(Builder builder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
    }

    public static class Builder {
        private String size;
        private boolean cheese;
        private boolean pepperoni;

        public Builder size(String size) { this.size = size; return this; }
        public Builder cheese(boolean cheese) { this.cheese = cheese; return this; }
        public Builder pepperoni(boolean pepperoni) { this.pepperoni = pepperoni; return this; }

        public Pizza build() { return new Pizza(this); }
    }
}

Pizza pizza = new Pizza.Builder()
    .size("Large")
    .cheese(true)
    .pepperoni(true)
    .build();
```

### Observer

```java
interface Observer {
    void update(String event);
}

class EventPublisher {
    private List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer o) { observers.add(o); }

    public void publish(String event) {
        observers.forEach(o -> o.update(event));
    }
}

EventPublisher publisher = new EventPublisher();
publisher.subscribe(event -> System.out.println("Received: " + event));
publisher.publish("New Order Placed");
```

### Strategy

```java
interface PaymentStrategy {
    void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via Credit Card");
    }
}

class PayPalPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via PayPal");
    }
}

class Checkout {
    private PaymentStrategy strategy;

    public Checkout(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void completeOrder(double amount) {
        strategy.pay(amount);
    }
}
```

---

## 16. Testing with JUnit

```java
// Add JUnit 5 dependency (via Maven/Gradle)
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    void testAddition() {
        assertEquals(5, Calculator.add(2, 3));
    }

    @Test
    void testDivisionByZeroThrows() {
        assertThrows(ArithmeticException.class, () -> {
            int result = 10 / 0;
        });
    }

    @BeforeEach
    void setup() {
        System.out.println("Running before each test");
    }
}
```

---

## 17. Build Tools (Maven/Gradle)

### Maven (`pom.xml`)

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.10.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

Common commands: `mvn compile`, `mvn test`, `mvn package`.

### Gradle (`build.gradle`)

```groovy
plugins {
    id 'java'
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}

test {
    useJUnitPlatform()
}
```

Common commands: `gradle build`, `gradle test`.

> **Note:** If your organization uses an internal artifact repository (e.g. JFrog Artifactory), configure your `pom.xml`/`build.gradle` (or `settings.xml`/`init.gradle`) to point to that repository instead of Maven Central/public repos, per your company's package management policy.

---

## 18. JVM Memory Model & Garbage Collection

Understanding what actually happens at runtime separates "knows Java syntax" from "understands Java."

### Stack vs. Heap

- **Stack** — stores method call frames: local variables and references, per-thread, LIFO order. Extremely fast; automatically cleaned up when a method returns.
- **Heap** — stores actual objects (anything created with `new`), shared across all threads. Managed by the garbage collector.

```java
void example() {
    int x = 5;               // primitive local variable — lives on the stack
    Person p = new Person(); // `p` (the reference) lives on the stack;
                              // the actual Person OBJECT lives on the heap
}
// When example() returns, x and the reference p are popped off the stack.
// The Person object on the heap becomes eligible for garbage collection
// once nothing else references it.
```

### Garbage Collection Basics

Java automatically reclaims heap memory that's no longer reachable — you don't manually `free()` objects like in C/C++.

- An object becomes **eligible for GC** once no live reference points to it anymore.
- The JVM's garbage collector periodically identifies and reclaims such objects (exact algorithm depends on the GC in use — G1, ZGC, Shenandoah, etc., configurable via JVM flags).
- `System.gc()` only _suggests_ a collection run — it's not guaranteed, and relying on it is generally a code smell.

```java
Person p1 = new Person("Alice");
p1 = null; // the original Person("Alice") object is now unreachable, eligible for GC
```

**Common causes of memory leaks in Java** (yes, they're still possible despite GC):

- Static collections that keep growing and are never cleared (`static List<...>` that just accumulates).
- Unclosed resources (streams, connections) — this is exactly why try-with-resources matters.
- Listener/callback registrations that are never removed, keeping objects alive indefinitely.

### Generations (conceptual overview)

Most JVM garbage collectors divide the heap into generations, based on the observation that most objects are short-lived:

- **Young Generation** — new objects are allocated here; collected frequently and quickly ("minor GC").
- **Old (Tenured) Generation** — objects that survive several young-gen collections get promoted here; collected less often but more expensively ("major/full GC").

> You generally don't need to tune this by hand for typical applications — but knowing it exists helps when diagnosing performance issues (e.g., frequent full GCs suggesting too many long-lived objects, or a heap that's too small).

## 19. Best Practices & Pro Tips

- **Favor composition over inheritance** — build behavior by combining small objects rather than deep class hierarchies.
- **Program to interfaces**, not implementations: `List<String> list = new ArrayList<>();`
- **Immutability by default** — use `final` fields, records, and immutable collections (`List.of(...)`) where possible.
- **Avoid null where you can** — use `Optional<T>` for values that might be absent.
  ```java
  Optional<String> maybeName = Optional.ofNullable(getName());
  maybeName.ifPresent(System.out::println);
  String name = maybeName.orElse("Unknown");
  ```
- **Use meaningful names** — `calculateTotalPrice()` beats `calc()`.
- **Keep methods small and focused** — one responsibility per method.
- **Handle exceptions meaningfully** — don't swallow them with empty catch blocks.
- **Use try-with-resources** for anything that implements `Closeable`/`AutoCloseable`.
- **Write unit tests** as you go, not after the fact.
- **Use a linter/formatter** (Checkstyle, Spotless) for consistent style across a team.
- **Understand the JVM memory model** (heap, stack, garbage collection) as you go deeper — helps with performance tuning.
- **Learn Spring Boot** next if building web services/microservices — it's the dominant enterprise Java framework.

---

## 20. Mini Projects

Practice by building these, in increasing difficulty:

1. **Number Guessing Game** — use loops, conditionals, `Scanner` for input.
2. **To-Do List (Console App)** — use `ArrayList`, file I/O to persist data.
3. **Bank Account Simulator** — practice OOP: `Account`, `SavingsAccount`, `CheckingAccount`, custom exceptions for insufficient funds.
4. **Library Management System** — use collections (`Map<String, Book>`), interfaces, and enums for book status.
5. **Employee Payroll System with Streams** — read employee data, use Streams to filter/group/calculate totals by department.
6. **Multi-threaded Download Simulator** — use `ExecutorService` and `CompletableFuture` to simulate concurrent downloads with progress tracking.
7. **REST API with Spring Boot** (next step beyond core Java) — CRUD endpoints backed by a database via JDBC/JPA.

### Example: Simple Console To-Do App

```java
import java.util.*;

public class TodoApp {
    private static final List<String> tasks = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Add Task  2. View Tasks  3. Remove Task  4. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (choice) {
                case 1 -> {
                    System.out.print("Enter task: ");
                    tasks.add(scanner.nextLine());
                }
                case 2 -> {
                    for (int i = 0; i < tasks.size(); i++) {
                        System.out.println((i + 1) + ". " + tasks.get(i));
                    }
                }
                case 3 -> {
                    System.out.print("Enter task number to remove: ");
                    int index = scanner.nextInt() - 1;
                    if (index >= 0 && index < tasks.size()) {
                        tasks.remove(index);
                    }
                }
                case 4 -> {
                    System.out.println("Goodbye!");
                    return;
                }
                default -> System.out.println("Invalid choice.");
            }
        }
    }
}
```

---

## Where to Go From Here

- **Spring Boot** — build production-grade web services and microservices.
- **JPA/Hibernate** — object-relational mapping for databases.
- **Kafka / RabbitMQ** — event-driven architectures.
- **Docker & Kubernetes** — containerize and deploy Java apps.
- **Reactive programming** — Project Reactor / RxJava for non-blocking systems.
- **JVM internals** — garbage collection tuning, JIT compilation, profiling with tools like VisualVM or JFR.

Keep building real projects — that's what turns "knowing Java syntax" into "being a Java developer."
