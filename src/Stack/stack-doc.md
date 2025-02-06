# Stack Data Structure

A **stack** is an **abstract data structure** that follows the **LIFO (Last In, First Out)** principle. It defines its behavior using operations like **push**, **pop**, and **peek**, without specifying the internal implementation.

## Key Operations

1. **Push(x)** → Adds an element `x` to the top of the stack.
2. **Pop()** → Removes and returns the top element of the stack.
3. **Peek() / Top()** → Returns the top element without removing it.
4. **isEmpty()** → Checks if the stack is empty.
5. **isFull()** (for fixed-size stacks) → Checks if the stack is full.

## Implementations

A stack can be implemented using:

- **Arrays** (Fixed size, efficient)
- **Linked Lists** (Dynamic size, uses extra memory for pointers)
- **Objects** (Efficient key-value storage)
- **Built-in Data Structures** (e.g., JavaScript `Array.push()/pop()`)

## Real-World Applications

- **Undo/Redo** functionality in text editors
- **Backtracking** (e.g., solving mazes, recursion calls)
- **Expression Evaluation** (e.g., converting infix to postfix notation)
- **Function Call Stack** (used in programming languages for recursion)

## Example Implementations

### C++ Implementation

```cpp
#include <iostream>
#include <stack>

int main() {
    std::stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    std::cout << "Top element: " << s.top() << std::endl;
    s.pop();
    std::cout << "Top after pop: " << s.top() << std::endl;
    return 0;
}
```

### JavaScript Implementation (Array)

```js
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10
```

### JavaScript Implementation (Object)

```js
class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }
  push(element) {
    this.items[this.top] = element;
    this.top++;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this.top--;
    const poppedElement = this.items[this.top];
    delete this.items[this.top];
    return poppedElement;
  }
  peek() {
    return this.isEmpty() ? undefined : this.items[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
}

const stackObj = new Stack();
stackObj.push(10);
stackObj.push(20);
console.log(stackObj.peek()); // 20
stackObj.pop();
console.log(stackObj.peek()); // 10
```

### JavaScript Implementation (Singly Linked List)

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackWithSLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size === 0) {
      return null;
    } else if (this.size == 1) {
      let removed = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return removed.value;
    } else {
      let removed = this.first;
      this.first = removed.next;
      removed.next = null;
      this.size--;
      return removed.value;
    }
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.size === 0;
  }
}

// Test Cases
const stack = new StackWithSLL();
console.assert(stack.isEmpty() === true, "Test Failed: Stack should be empty");
stack.push(100);
console.assert(stack.peek().value === 100, "Test Failed: Top should be 100");
stack.push(50);
console.assert(stack.peek().value === 50, "Test Failed: Top should be 50");
console.assert(stack.pop() === 50, "Test Failed: Popped value should be 50");
console.assert(
  stack.peek().value === 100,
  "Test Failed: Top should be 100 after pop"
);
console.assert(stack.pop() === 100, "Test Failed: Popped value should be 100");
console.assert(
  stack.isEmpty() === true,
  "Test Failed: Stack should be empty after all pops"
);
```

## Conclusion

The **stack** is a simple yet powerful data structure used in various applications like memory management, expression evaluation, and backtracking algorithms.
