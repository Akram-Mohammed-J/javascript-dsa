class MinHeap {
  constructor() {
    this.values = []; // Initialize an empty array to store heap elements
  }

  // Method to maintain heap property after insertion
  bubbleUp(index) {
    const pIdx = Math.floor((index - 1) / 2); // Get the parent index
    if (index <= 0) return; // Stop if we reach the root node

    // If the parent is greater than the current node, swap them
    if (this.values[pIdx] > this.values[index]) {
      // Swap parent and child
      let temp = this.values[pIdx];
      this.values[pIdx] = this.values[index];
      this.values[index] = temp;
      this.bubbleUp(pIdx); // Recursively call bubbleUp on the new parent index
    }
  }

  // Insert a new value into the heap
  insert(value) {
    this.values.push(value); // Add the value to the end
    this.bubbleUp(this.values.length - 1); // Restore heap property by bubbling up
  }

  // Method to maintain heap property after extracting min element
  sinkDown(pIdx = 0) {
    const leftChildIdx = 2 * pIdx + 1; // Index of left child
    const rightChildIdx = 2 * pIdx + 2; // Index of right child
    let minElementIdx = pIdx; // Assume the parent is the smallest

    // If the left child exists and is smaller, update minElementIdx
    if (
      leftChildIdx < this.values.length &&
      this.values[leftChildIdx] < this.values[minElementIdx]
    ) {
      minElementIdx = leftChildIdx;
    }

    // If the right child exists and is smaller, update minElementIdx
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx] < this.values[minElementIdx]
    ) {
      minElementIdx = rightChildIdx;
    }

    // If the parent is already the smallest, stop
    if (minElementIdx === pIdx) return;

    // Swap the parent with the smaller child
    [this.values[pIdx], this.values[minElementIdx]] = [
      this.values[minElementIdx],
      this.values[pIdx],
    ];

    // Recursively call sinkDown on the new index
    this.sinkDown(minElementIdx);
  }

  // Extract the minimum element (root) from the heap
  extractMin() {
    if (this.values.length === 0) return undefined; // Handle empty heap case

    const minNode = this.values[0]; // The minimum element (root)
    const lastElement = this.values.pop(); // Remove the last element

    // If there are still elements, move the last element to root and restore heap
    if (this.values.length > 0) {
      this.values[0] = lastElement;
      this.sinkDown(); // Restore heap property
    }

    return minNode; // Return the extracted minimum element
  }
}

const heap = new MinHeap();

// Insert elements
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(2);
heap.insert(8);

console.assert(heap.values[0] === 2, "Test 1 Failed: Root should be 2");
console.assert(heap.values.includes(5), "Test 2 Failed: Heap should contain 5");
console.assert(heap.values.includes(8), "Test 3 Failed: Heap should contain 8");
console.assert(
  heap.values.includes(10),
  "Test 4 Failed: Heap should contain 10"
);
console.assert(
  heap.values.includes(15),
  "Test 5 Failed: Heap should contain 15"
);

// Extract Min
console.assert(
  heap.extractMin() === 2,
  "Test 6 Failed: Extracted value should be 2"
);
console.assert(
  heap.extractMin() === 5,
  "Test 7 Failed: Extracted value should be 5"
);
console.assert(
  heap.extractMin() === 8,
  "Test 8 Failed: Extracted value should be 8"
);

// Insert more elements
heap.insert(1);
heap.insert(7);

console.assert(
  heap.values[0] === 1,
  "Test 9 Failed: Root should be 1 after insertion"
);

// Extract all elements
console.assert(
  heap.extractMin() === 1,
  "Test 10 Failed: Extracted value should be 1"
);
console.assert(
  heap.extractMin() === 7,
  "Test 11 Failed: Extracted value should be 7"
);
console.assert(
  heap.extractMin() === 10,
  "Test 12 Failed: Extracted value should be 10"
);
console.assert(
  heap.extractMin() === 15,
  "Test 13 Failed: Extracted value should be 15"
);
console.assert(
  heap.extractMin() === undefined,
  "Test 14 Failed: Extracting from empty heap should return undefined"
);

console.log("✅ All tests passed!");
