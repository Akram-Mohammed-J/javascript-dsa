class MaxHeap {
  constructor() {
    this.values = [];
  }
  /*bubbleUp In iterative way */
  bubbleUpIterative(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      // If the parent is already greater, we stop
      if (this.values[parentIndex] >= this.values[index]) break;

      // Old-fashioned swap using a temporary variable
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      // Move the index up to the parent's position
      index = parentIndex;
    }
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex < 0) return; // Stop if index is at the root

    if (this.values[parentIndex] < this.values[index]) {
      // Swap values properly in the heap array
      let temp = this.values[parentIndex]; // Store the parent's value
      this.values[parentIndex] = this.values[index]; // Move the child's value up
      this.values[index] = temp; // Move the parent's value down

      // Recursively call bubbleUp for the parent
      this.bubbleUp(parentIndex);
    }
  }

  sinkDownIterative() {
    let pIndex = 0;
    let length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * pIndex + 1;
      let rightChildIdx = 2 * pIndex + 2;
      let maxElementIndex = pIndex; // Assume parent is largest initially

      // Check if left child exists and is larger
      if (
        leftChildIdx < length &&
        this.values[leftChildIdx] > this.values[maxElementIndex]
      ) {
        maxElementIndex = leftChildIdx;
      }

      // Check if right child exists and is larger than the current max
      if (
        rightChildIdx < length &&
        this.values[rightChildIdx] > this.values[maxElementIndex]
      ) {
        maxElementIndex = rightChildIdx;
      }

      // If no swap is needed, break the loop
      if (maxElementIndex === pIndex) break;

      // Swap the parent with the larger child
      let temp = this.values[pIndex];
      this.values[pIndex] = this.values[maxElementIndex];
      this.values[maxElementIndex] = temp;

      // Move down to the swapped child's position
      pIndex = maxElementIndex;
    }
  }

  sinkDown(pIndex = 0) {
    let leftChildIdx = 2 * pIndex + 1;
    let rightChildIdx = 2 * pIndex + 2;
    let maxElementIndex = pIndex; // Assume parent is largest

    // Check if left child exists and is larger
    if (
      leftChildIdx < this.values.length &&
      this.values[leftChildIdx] > this.values[maxElementIndex]
    ) {
      maxElementIndex = leftChildIdx;
    }

    // Check if right child exists and is larger than the current max
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx] > this.values[maxElementIndex]
    ) {
      maxElementIndex = rightChildIdx;
    }

    // If no swap is needed, return (base case)
    if (maxElementIndex === pIndex) return;

    // Swap the parent with the larger child
    let temp = this.values[pIndex];
    this.values[pIndex] = this.values[maxElementIndex];
    this.values[maxElementIndex] = temp;

    // Recursively call sinkDown on the new position
    this.sinkDown(maxElementIndex);
  }

  extractMax() {
    if (this.values.length === 0) return null; // Handle empty heap

    const maxElement = this.values[0]; // The root (max element)
    const lastElement = this.values.pop(); // Remove last element

    if (this.values.length > 0) {
      this.values[0] = lastElement; // Place last element at root
      this.sinkDown(0); // Restore heap property
    }

    return maxElement;
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
    return this;
  }
}

// TEST CASES
let heap = new MaxHeap();

// Insert elements
heap.insert(50);
heap.insert(30);
heap.insert(40);
heap.insert(10);
heap.insert(20);
heap.insert(60);
heap.insert(70);

console.assert(heap.values[0] === 70, "Test Failed: Root should be 70");

// Extract max (should be 70)
console.assert(
  heap.extractMax() === 70,
  "Test Failed: Extracted max should be 70"
);
console.assert(
  heap.values[0] === 60,
  "Test Failed: Root should be 60 after extraction"
);

// Extract max (should be 60)
console.assert(
  heap.extractMax() === 60,
  "Test Failed: Extracted max should be 60"
);
console.assert(
  heap.values[0] === 50,
  "Test Failed: Root should be 50 after extraction"
);

// Extract max (should be 50)
console.assert(
  heap.extractMax() === 50,
  "Test Failed: Extracted max should be 50"
);
console.assert(
  heap.values[0] === 40,
  "Test Failed: Root should be 40 after extraction"
);

// Continue extracting
console.assert(
  heap.extractMax() === 40,
  "Test Failed: Extracted max should be 40"
);
console.assert(
  heap.extractMax() === 30,
  "Test Failed: Extracted max should be 30"
);
console.assert(
  heap.extractMax() === 20,
  "Test Failed: Extracted max should be 20"
);
console.assert(
  heap.extractMax() === 10,
  "Test Failed: Extracted max should be 10"
);

// Heap should now be empty
console.assert(
  heap.extractMax() === null,
  "Test Failed: Extracted max should be null for empty heap"
);

console.log("All tests passed!");
