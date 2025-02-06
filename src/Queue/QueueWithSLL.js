class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithSLL {
  constructor() {
    this.head = null; // The front of the queue
    this.tail = null; // The end of the queue
    this.size = 0; // The number of elements in the queue
  }

  // Adds a new element to the queue
  enQueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the queue is not empty
      this.tail.next = newNode;
      this.tail = newNode; // Move the tail to the new node
    }

    this.size++; // Increase the size of the queue
    return this;
  }

  // Removes the element from the front of the queue
  deQueue() {
    if (this.size === 0) return null; // If the queue is empty, return null

    const deQueueElement = this.head; // The node to dequeue
    if (this.size === 1) {
      // If there's only one element in the queue
      this.head = null;
      this.tail = null;
    } else {
      // If there are more than one elements
      this.head = deQueueElement.next; // Move the head pointer to the next node
    }

    deQueueElement.next = null; // Disconnect the dequeued node from the queue
    this.size--; // Decrease the size of the queue
    return deQueueElement.value; // Return the value of the dequeued node
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.size === 0;
  }
}

const queue = new QueueWithSLL();

// Enqueue some elements
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);

// Dequeue and check if the right element is returned
console.log(queue.deQueue()); // Should print 10
console.log(queue.deQueue()); // Should print 20
console.log(queue.deQueue()); // Should print 30
console.log(queue.deQueue()); // Should print null (queue is empty)

// Check if the queue is empty
console.log(queue.isEmpty()); // Should print true

function runTests() {
  // Create a new instance of the QueueWithSLL class
  const queue = new QueueWithSLL();

  // Test enQueue: Add elements and check if the queue size increases
  queue.enQueue(10);
  console.assert(
    queue.size === 1,
    "Test Case 1 Failed: enQueue failed to increase size"
  );
  console.assert(
    queue.head.value === 10,
    "Test Case 2 Failed: enQueue failed to add element at the front"
  );
  console.assert(
    queue.tail.value === 10,
    "Test Case 3 Failed: enQueue failed to add element at the end"
  );

  queue.enQueue(20);
  console.assert(
    queue.size === 2,
    "Test Case 4 Failed: enQueue failed to increase size"
  );
  console.assert(
    queue.tail.value === 20,
    "Test Case 5 Failed: enQueue failed to add element at the end"
  );

  // Test isEmpty: Queue should not be empty after adding elements
  console.assert(
    queue.isEmpty() === false,
    "Test Case 6 Failed: isEmpty failed when queue is not empty"
  );

  // Test deQueue: Remove an element and check if the correct element is removed
  const dequeued = queue.deQueue();
  console.assert(
    dequeued === 10,
    "Test Case 7 Failed: deQueue did not return correct element"
  );
  console.assert(
    queue.size === 1,
    "Test Case 8 Failed: deQueue failed to decrease size"
  );
  console.assert(
    queue.head.value === 20,
    "Test Case 9 Failed: deQueue failed to move head to the next element"
  );

  // Test deQueue: Remove the last element and check if the queue becomes empty
  const secondDequeued = queue.deQueue();
  console.assert(
    secondDequeued === 20,
    "Test Case 10 Failed: deQueue did not return correct element"
  );
  console.assert(
    queue.size === 0,
    "Test Case 11 Failed: deQueue failed to decrease size"
  );
  console.assert(
    queue.head === null,
    "Test Case 12 Failed: deQueue failed to reset head"
  );
  console.assert(
    queue.tail === null,
    "Test Case 13 Failed: deQueue failed to reset tail"
  );

  // Test deQueue on an empty queue: Should return null
  const emptyDequeue = queue.deQueue();
  console.assert(
    emptyDequeue === null,
    "Test Case 14 Failed: deQueue did not handle empty queue correctly"
  );

  // Test isEmpty: Queue should be empty now
  console.assert(
    queue.isEmpty() === true,
    "Test Case 15 Failed: isEmpty failed when queue is empty"
  );

  console.log("\n\n All test cases ... executed");
}

runTests();
