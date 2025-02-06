class StackWithObject {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  isEmpty() {
    return this.top === 0;
  }

  push(value) {
    this.items[`${this.top}`] = value;
    this.top++;
    return this.items;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    /**
     *The top variable tracks the index of the next available position in the stack.
        Before decrementing, this.top points to the next free slot,
        so we need to decrease it first to access the last pushed element. 
     */
    this.top--;
    const poppedElement = this.items[this.top];
    delete this.items[this.top];
    return poppedElement;
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.top - 1];
  }
}

// const stack = new StackWithObject();
// stack.push(20);
// stack.push(30);
// stack.push(40);

// console.log(stack.peek());

// stack.pop();
// stack.pop();
// stack.pop();

// console.log(stack);

// Test case
// / Test cases using console.assert
const stack = new StackWithObject();

// Test 1: Stack should be empty initially
console.assert(
  stack.isEmpty() === true,
  "Test 1 Failed: Stack should be empty initially"
);
console.assert(
  stack.peek() === undefined,
  "Test 1 Failed: Peek should return undefined for an empty stack"
);

// Test 2: Push an item to the stack
stack.push(10);
console.assert(
  stack.isEmpty() === false,
  "Test 2 Failed: Stack should not be empty after push"
);
console.assert(
  stack.peek() === 10,
  "Test 2 Failed: Peek should return the last pushed item"
);

// Test 3: Push multiple items to the stack
stack.push(20);
stack.push(30);
console.assert(
  stack.peek() === 30,
  "Test 3 Failed: Peek should return the last pushed item (30)"
);

// Test 4: Pop an item from the stack
const poppedItem = stack.pop();
console.assert(
  poppedItem === 30,
  "Test 4 Failed: Pop should return the last pushed item (30)"
);
console.assert(
  stack.peek() === 20,
  "Test 4 Failed: Peek should return the next item (20)"
);

// Test 5: Pop from an empty stack
stack.pop();
stack.pop();
const emptyPop = stack.pop();
console.assert(
  emptyPop === undefined,
  "Test 5 Failed: Pop should return undefined when the stack is empty"
);

// Test 6: Peek when the stack is empty
console.assert(
  stack.peek() === undefined,
  "Test 6 Failed: Peek should return undefined when the stack is empty"
);

// Test 7: Multiple pops
stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
console.assert(
  stack.peek() === 20,
  "Test 7 Failed: Peek should return 20 after popping 30"
);

stack.pop();
console.assert(
  stack.peek() === 10,
  "Test 7 Failed: Peek should return 10 after popping 20"
);

stack.pop();
console.assert(
  stack.isEmpty() === false,
  "Test 7 Failed: Stack should be empty after popping all items"
);

console.log("\n\n");
console.log("All test cases executed..");
