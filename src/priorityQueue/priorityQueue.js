// Node class to represent each element in the priority queue
class Node {
  constructor(val, priority) {
    this.value = val; // The value of the node
    this.priority = priority; // The priority of the node (lower value = higher priority)
  }
}

// Priority Queue implemented using a Min-Heap
class PriorityQueue {
  constructor() {
    this.queue = []; // Initialize an empty array to store heap elements
  }

  // Method to maintain heap property after insertion
  bubbleUp(idx) {
    const pIdx = Math.floor((idx - 1) / 2); // Get the parent index
    if (idx <= 0) return; // Stop if we reach the root node

    // If the parent has a higher priority value (meaning lower priority), swap them
    if (this.queue[pIdx].priority > this.queue[idx].priority) {
      let temp = this.queue[pIdx]; // Temporary variable for swapping
      this.queue[pIdx] = this.queue[idx];
      this.queue[idx] = temp;
      this.bubbleUp(pIdx); // Recursively call bubbleUp on the new parent index
    }
  }

  // Method to maintain heap property after removing the highest priority element
  sinkDown(pIdx = 0) {
    const leftChildIdx = 2 * pIdx + 1; // Index of left child
    const rightChildIdx = 2 * pIdx + 2; // Index of right child
    let minElementIdx = pIdx; // Assume the parent is the smallest

    // If the left child exists and has a higher priority (smaller number), update minElementIdx
    if (
      leftChildIdx < this.queue.length &&
      this.queue[leftChildIdx].priority < this.queue[minElementIdx].priority
    ) {
      minElementIdx = leftChildIdx;
    }

    // If the right child exists and has a higher priority, update minElementIdx
    if (
      rightChildIdx < this.queue.length &&
      this.queue[rightChildIdx].priority < this.queue[minElementIdx].priority
    ) {
      minElementIdx = rightChildIdx;
    }

    // If the parent is already the highest priority, stop
    if (minElementIdx === pIdx) return;

    // Swap the parent with the child having the higher priority
    let temp = this.queue[pIdx];
    this.queue[pIdx] = this.queue[minElementIdx];
    this.queue[minElementIdx] = temp;

    // Recursively call sinkDown on the new index
    this.sinkDown(minElementIdx);
  }

  // Insert a new node into the priority queue
  enqueue(value, priority) {
    const newNode = new Node(value, priority); // Create a new node
    this.queue.push(newNode); // Add it to the end of the array
    this.bubbleUp(this.queue.length - 1); // Restore heap property by bubbling up
  }

  // Remove and return the element with the highest priority (smallest priority value)
  dequeue() {
    if (this.queue.length === 0) return undefined; // Handle empty queue case

    const removedNode = this.queue[0]; // The highest priority element (root)
    const lastElement = this.queue.pop(); // Remove the last element

    // If there are still elements, move the last element to root and restore heap property
    if (this.queue.length > 0) {
      this.queue[0] = lastElement;
      this.sinkDown();
    }

    return removedNode; // Return the extracted node
  }
}
const pq = new PriorityQueue();

// Insert elements
pq.enqueue("task1", 3);
pq.enqueue("task2", 1);
pq.enqueue("task3", 2);
pq.enqueue("task4", 5);
pq.enqueue("task5", 4);

console.assert(
  pq.queue[0].value === "task2",
  "Test 1 Failed: Root should be 'task2' (priority 1)"
);
console.assert(
  pq.queue.length === 5,
  "Test 2 Failed: Queue should have 5 elements"
);

// Extract min priority element
console.assert(
  pq.dequeue().value === "task2",
  "Test 3 Failed: Extracted value should be 'task2'"
);
console.assert(
  pq.queue[0].value === "task3",
  "Test 4 Failed: New root should be 'task3'"
);

// Insert a lower priority element
pq.enqueue("task6", 0);
console.assert(
  pq.queue[0].value === "task6",
  "Test 5 Failed: New root should be 'task6' (priority 0)"
);

// Extract remaining elements
console.assert(
  pq.dequeue().value === "task6",
  "Test 6 Failed: Extracted value should be 'task6'"
);
console.assert(
  pq.dequeue().value === "task3",
  "Test 7 Failed: Extracted value should be 'task3'"
);
console.assert(
  pq.dequeue().value === "task1",
  "Test 8 Failed: Extracted value should be 'task1'"
);
console.assert(
  pq.dequeue().value === "task5",
  "Test 9 Failed: Extracted value should be 'task5'"
);
console.assert(
  pq.dequeue().value === "task4",
  "Test 10 Failed: Extracted value should be 'task4'"
);

// Ensure queue is empty
console.assert(
  pq.dequeue() === undefined,
  "Test 11 Failed: Dequeue from empty queue should return undefined"
);

console.log("✅ All tests passed!");
