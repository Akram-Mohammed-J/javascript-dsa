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
      // 1-->2--3-->4
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

// const stack = new StackWithSLL();

// stack.push(100);
// stack.push(50);
// console.log(stack.peek());

// console.log(JSON.stringify(stack));

function runTests() {
  const stack = new StackWithSLL();

  console.assert(
    stack.isEmpty() === true,
    "Test Failed: Stack should be empty initially"
  );

  stack.push(10);
  console.assert(
    stack.peek().value === 10,
    "Test Failed: Top should be 10 after first push"
  );

  stack.push(20);
  console.assert(
    stack.peek().value === 20,
    "Test Failed: Top should be 20 after second push"
  );

  stack.push(30);
  console.assert(
    stack.peek().value === 30,
    "Test Failed: Top should be 30 after third push"
  );

  console.assert(stack.pop() === 30, "Test Failed: Popped value should be 30");
  console.assert(
    stack.peek().value === 20,
    "Test Failed: Top should be 20 after popping 30"
  );

  console.assert(stack.pop() === 20, "Test Failed: Popped value should be 20");
  console.assert(
    stack.peek().value === 10,
    "Test Failed: Top should be 10 after popping 20"
  );

  console.assert(stack.pop() === 10, "Test Failed: Popped value should be 10");
  console.assert(
    stack.isEmpty() === true,
    "Test Failed: Stack should be empty after all pops"
  );

  console.assert(
    stack.pop() === null,
    "Test Failed: Popping from empty stack should return null"
  );

  console.log("\n\n");
  console.log("All test cases executed..");
}

runTests();
