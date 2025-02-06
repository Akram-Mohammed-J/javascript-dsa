// Implementing the queue with array is not a optimised solution because of re indexing when we remove it from the begning

class QueueArray {
  constructor() {
    this.items = []; // Initialize an empty array to store the queue elements
  }

  // Adds an element to the end of the queue
  enQueue(value) {
    this.items.push(value); // Insert the element at the end of the array
    return this.items; // Return the current state of the queue
  }

  // Removes and returns the element from the front of the queue
  deQueue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Optional: Return a message if trying to dequeue from an empty queue
    }
    return this.items.shift(); // Remove the first element and return it
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0; // Return true if the queue is empty, otherwise false
  }
}

// Create a new instance of the QueueArray class
const queue = new QueueArray();

// Test enQueue: Add an element and check if it's added to the queue
queue.enQueue(10);
console.assert(
  queue.items.length === 1,
  "Test Case 1 Failed: enQueue failed to add element"
);

// Test enQueue: Add another element and check if it's added
queue.enQueue(20);
console.assert(
  queue.items.length === 2,
  "Test Case 2 Failed: enQueue failed to add element"
);

// Test isEmpty: Queue should not be empty after adding elements
console.assert(
  queue.isEmpty() === false,
  "Test Case 3 Failed: isEmpty failed when queue is not empty"
);

// Test deQueue: Remove an element and check if the correct element is removed
const dequeued = queue.deQueue();
console.assert(
  dequeued === 10,
  "Test Case 4 Failed: deQueue did not return correct element"
);
console.assert(
  queue.items.length === 1,
  "Test Case 5 Failed: deQueue failed to remove element"
);

// Test deQueue: Remove another element and check if it's removed
const secondDequeued = queue.deQueue();
console.assert(
  secondDequeued === 20,
  "Test Case 6 Failed: deQueue did not return correct element"
);
console.assert(
  queue.items.length === 0,
  "Test Case 7 Failed: deQueue failed to remove element"
);

// Test deQueue on an empty queue: Should return "Queue is empty"
const emptyDequeue = queue.deQueue();
console.assert(
  emptyDequeue === "Queue is empty",
  "Test Case 8 Failed: deQueue did not handle empty queue correctly"
);

// Test isEmpty: Queue should be empty now
console.assert(
  queue.isEmpty() === true,
  "Test Case 9 Failed: isEmpty failed when queue is empty"
);

console.log("\n\n All test cases executed ...");
