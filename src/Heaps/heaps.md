# Binary Heap Theory

A **Binary Heap** is a **complete binary tree** that satisfies the **heap property**. It is commonly used to implement priority queues efficiently.

---

## 1\. Properties of a Binary Heap

1.  **Complete Binary Tree**

    - A binary heap is always a **complete binary tree**, meaning all levels are fully filled except possibly the last level, which is filled from **left to right**.

2.  **Heap Property**

    - The key at the parent node is either **greater than or equal to** (for max heap) or **less than or equal to** (for min heap) the keys of its children.

---

## 2\. Types of Binary Heaps

### (i) Min Heap

- The parent node is **smaller** than its children.
- The **minimum element** is always at the root.

#### Example of Min Heap:

         10
        /  \
      20    30
     /  \
    40   50

- `10 ≤ 20`, `10 ≤ 30`
- `20 ≤ 40`, `20 ≤ 50`

### (ii) Max Heap

- The parent node is **greater** than its children.
- The **maximum element** is always at the root.

#### Example of Max Heap:

         50
        /  \
      30    40
     /  \
    10   20

- `50 ≥ 30`, `50 ≥ 40`
- `30 ≥ 10`, `30 ≥ 20`

---

## 3\. Binary Heap Operations

All heap operations maintain the **complete binary tree** structure.

### (i) Insertion (`O(log n)`)

- Insert the new element at the **next available position** (to maintain completeness).
- **Heapify Up** (Bubble Up) → Compare with the parent and swap if needed.

### (ii) Deletion (`O(log n)`)

- The root (min/max) is removed.
- The **last element** is moved to the root to maintain completeness.
- **Heapify Down** (Bubble Down) → Swap with the smaller (min-heap) or larger (max-heap) child.

### (iii) Heapify (`O(n)`)

- Used to **convert an array into a heap**.
- Works by calling `heapifyDown` from the last non-leaf node to the root.

### (iv) Extract Min/Max (`O(log n)`)

- Removes and returns the root.
- Calls `heapifyDown` to maintain the heap.

### (v) Build Heap (`O(n)`)

- Construct a heap from an unordered array efficiently using **bottom-up heapify**.
- More efficient than inserting elements one by one (`O(n log n)`).

---

## 4\. Heap Representation in an Array

A binary heap is typically stored in an **array** instead of using pointers.

### (i) Zero-Indexed Array (index starts at 0)

For a node at **index `i`**:

| Relationship   | Formula            |
| -------------- | ------------------ |
| **Parent**     | `⌊(i - 1) / 2⌋`   |
| **Left child** | `2i + 1`           |
| **Right child**| `2i + 2`           |

#### Example:

    Array: [10, 20, 30, 40, 50]
    Index:   0   1   2   3   4

- `Parent of 20 (index 1) = ⌊(1-1)/2⌋ = 0 → 10`
- `Left child of 10 (index 0) = 2*0 + 1 = 1 → 20`
- `Right child of 10 (index 0) = 2*0 + 2 = 2 → 30`
- `Parent of 40 (index 3) = ⌊(3-1)/2⌋ = 1 → 20`

### (ii) One-Indexed Array (index starts at 1)

For a node at **index `i`**:

| Relationship   | Formula      |
| -------------- | ------------ |
| **Parent**     | `⌊i / 2⌋`    |
| **Left child** | `2i`         |
| **Right child**| `2i + 1`     |

#### Example:

    Array: [_, 10, 20, 30, 40, 50]   (index 0 unused)
    Index:  0   1   2   3   4   5

- `Parent of 20 (index 2) = ⌊2/2⌋ = 1 → 10`
- `Left child of 10 (index 1) = 2*1 = 2 → 20`
- `Right child of 10 (index 1) = 2*1 + 1 = 3 → 30`
- `Parent of 40 (index 4) = ⌊4/2⌋ = 2 → 20`

### Summary Comparison

| Operation        | 0-Indexed (`i` from 0) | 1-Indexed (`i` from 1) |
| ---------------- | ---------------------- | ---------------------- |
| **Parent**       | `⌊(i - 1) / 2⌋`       | `⌊i / 2⌋`             |
| **Left child**   | `2i + 1`               | `2i`                   |
| **Right child**  | `2i + 2`               | `2i + 1`              |

> **Note:** When finding the parent of the `i`th element, always take the **floor value** (round down) of the division. This is because both the left and right child of a node must map back to the same parent. For example, in 0-indexed: parent of index 3 = `⌊(3-1)/2⌋ = ⌊1⌋ = 1` and parent of index 4 = `⌊(4-1)/2⌋ = ⌊1.5⌋ = 1` — both correctly point to the same parent. In code, use `Math.floor()` or integer division (e.g., `(i - 1) >> 1` in JavaScript).

> **Note:** 1-indexed formulas are cleaner (bit-shift friendly: left child = `i << 1`, parent = `i >> 1`), but most languages use 0-indexed arrays, so the `2i+1` / `2i+2` variant is more common in practice.

---

## 5\. Time Complexity of Binary Heap Operations

| Operation              | Time Complexity |
| ---------------------- | --------------- |
| Insert                 | O(log n)        |
| Delete                 | O(log n)        |
| Extract Min/Max        | O(log n)        |
| Heapify                | O(n)            |
| Build Heap             | O(n)            |
| Search (Not optimized) | O(n)            |

---

## 6\. Applications of Binary Heap

1.  **Priority Queues** (Efficiently get the min/max element)
2.  **Dijkstra’s Algorithm** (Shortest path in graphs)
3.  **Heap Sort** (Sorting algorithm with `O(n log n)`)
4.  **Job Scheduling** (CPU task scheduling)
5.  **Kth Largest/Smallest Element** in an array

---

## 7\. Binary Heap vs Other Trees

| Feature       | Binary Heap             | Binary Search Tree (BST)               |
| ------------- | ----------------------- | -------------------------------------- |
| Structure     | Complete binary tree    | Binary tree (not necessarily complete) |
| Ordering      | Heap property (min/max) | Left < Root < Right                    |
| Search Time   | O(n)                    | O(log n)                               |
| Insert/Delete | O(log n)                | O(log n)                               |

---
