class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BfsTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) {
        console.warn(`Duplicate value ignored: ${value}`);
        this.duplicateDetected = true; // Flag duplicate
        return this;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  bfsTraversal() {
    if (this.root == null) return; // If the tree is empty, return

    const q = []; // Initialize a queue for BFS traversal
    const visited = []; // Array to store visited node values
    q.push(this.root); // Push the root node into the queue

    while (q.length !== 0) {
      // Loop until the queue is empty
      let currentNode = q.shift(); // Dequeue the front node
      visited.push(currentNode.value); // Store the value of the current node

      if (currentNode.left !== null) {
        // If left child exists, enqueue it
        q.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        // If right child exists, enqueue it
        q.push(currentNode.right);
      }
    }

    return visited; // Return the BFS traversal result
  }
}

const tree = new BfsTree();
tree.insert(30);
tree.insert(29);
tree.insert(31);
tree.insert(40);
tree.insert(41);
tree.insert(89);
tree.insert(39);

console.log(tree.bfsTraversal());

/* 
  Dry Run:
  Example Tree:

         1
        / \
       2   3
      / \   \
     4   5   6
  
  Step-by-step Execution:
  
  Queue: [1]
  Visited: []
  
  Iteration 1:
  - Dequeue 1 → Visited: [1]
  - Enqueue 2, 3 → Queue: [2, 3]
  
  Iteration 2:
  - Dequeue 2 → Visited: [1, 2]
  - Enqueue 4, 5 → Queue: [3, 4, 5]
  
  Iteration 3:
  - Dequeue 3 → Visited: [1, 2, 3]
  - Enqueue 6 → Queue: [4, 5, 6]
  
  Iteration 4:
  - Dequeue 4 → Visited: [1, 2, 3, 4]
  - No children → Queue: [5, 6]
  
  Iteration 5:
  - Dequeue 5 → Visited: [1, 2, 3, 4, 5]
  - No children → Queue: [6]
  
  Iteration 6:
  - Dequeue 6 → Visited: [1, 2, 3, 4, 5, 6]
  - No children → Queue: []
  
  Final Output: [1, 2, 3, 4, 5, 6]
  */

export { tree };
