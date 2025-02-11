class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DfsTree {
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

  // Preorder traversal: Root -> Left -> Right
  preOrderTraversal() {
    let visited = []; // Array to store visited nodes

    function traverse(node) {
      if (node == null) {
        return; // Base case: If the node is null, return
      }
      visited.push(node.value); // Visit the current node (Root)
      if (node.left) traverse(node.left); // Recursively visit the left subtree
      if (node.right) traverse(node.right); // Recursively visit the right subtree
    }

    traverse(this.root); // Start traversal from the root
    return visited;
  }

  // Postorder traversal: Left -> Right -> Root
  postOrderTraversal() {
    let visited = []; // Array to store visited nodes

    function traverse(node) {
      if (node == null) {
        return; // Base case: If the node is null, return
      }
      if (node.left) traverse(node.left); // Recursively visit the left subtree
      if (node.right) traverse(node.right); // Recursively visit the right subtree
      visited.push(node.value); // Visit the current node (Root) after its children
    }

    traverse(this.root); // Start traversal from the root
    return visited;
  }
  inOrderTraversal() {
    let visited = []; // Array to store visited nodes

    function traverse(node) {
      if (node == null) {
        return; // Base case: If the node is null, return
      }
      if (node.left) traverse(node.left); // Recursively visit the left subtree
      visited.push(node.value); // Visit the current node (Root)
      if (node.right) traverse(node.right); // Recursively visit the right subtree
    }

    traverse(this.root); // Start traversal from the root
    return visited;
  }
}

const tree = new DfsTree();
tree.insert(30);
tree.insert(29);
tree.insert(31);
tree.insert(40);
tree.insert(41);
tree.insert(89);
tree.insert(39);

console.log("Pre Order: root--> left --> right\n", tree.preOrderTraversal());
console.log("post order: left--> right --> root\n", tree.postOrderTraversal());
console.log("In order: left--> root--> right\n", tree.inOrderTraversal());

/**
 * Dry Run of Preorder Traversal
Tree Structure After Insertion

       30
      /  \
    29   31
          \
          40
         /  \
       39   41
              \
              89

Preorder Traversal (Root → Left → Right)

 Call: preOrderTraversal()
 Call traverse(30)
 visited = [30]

Call traverse(29)
visited = [30, 29]

Back to 30, Call traverse(31)
visited = [30, 29, 31]

Call traverse(40)
visited = [30, 29, 31, 40]

Call traverse(39)
visited = [30, 29, 31, 40, 39]

Back to 40, Call traverse(41)
visited = [30, 29, 31, 40, 39, 41]

Call traverse(89)
visited = [30, 29, 31, 40, 39, 41, 89]

Return final visited array: [30, 29, 31, 40, 39, 41, 89]
Dry Run of Postorder Traversal
Postorder Traversal (Left → Right → Root)

Call: postOrderTraversal()
Call traverse(30)

Call traverse(29)
visited = [29] // Left subtree first

Back to 30, Call traverse(31)
Call traverse(40)

Call traverse(39)
visited = [29, 39] // Left of 40

Back to 40, Call traverse(41)

Call traverse(89)
visited = [29, 39, 89] // Right of 41

Back to 41
visited = [29, 39, 89, 41]

Back to 40
visited = [29, 39, 89, 41, 40]

Back to 31
visited = [29, 39, 89, 41, 40, 31]

Back to 30 (Root node)
visited = [29, 39, 89, 41, 40, 31, 30]

Return final visited array: [29, 39, 89, 41, 40, 31, 30]


Final Output

tree.preOrderTraversal(); // [30, 29, 31, 40, 39, 41, 89]
tree.postOrderTraversal(); // [29, 39, 89, 41, 40, 31, 30]
This should help you understand how each traversal works step by step! 🚀

*/

/**
 Dry Run of Postorder Traversal
Postorder Traversal (Left → Right → Root)
js
Copy
Edit
// Call: postOrderTraversal()
// Call traverse(30)

// Call traverse(29)
visited = [29] // Left subtree first

// Back to 30, Call traverse(31)
// Call traverse(40)

// Call traverse(39)
visited = [29, 39] // Left of 40

// Back to 40, Call traverse(41)

// Call traverse(89)
visited = [29, 39, 89] // Right of 41

// Back to 41
visited = [29, 39, 89, 41]

// Back to 40
visited = [29, 39, 89, 41, 40]

// Back to 31
visited = [29, 39, 89, 41, 40, 31]

// Back to 30 (Root node)
visited = [29, 39, 89, 41, 40, 31, 30]

// Return final visited array: [29, 39, 89, 41, 40, 31, 30]

 */

/**
 Dry Run of In-Order Traversal
Tree Structure After Insertion
markdown
Copy
Edit
       30
      /  \
    29   31
          \
          40
         /  \
       39   41
              \
              89
In-Order Traversal (Left → Root → Right)
js
Copy
Edit
// Call: inOrderTraversal()
// Call traverse(30)

// Call traverse(29)  // Left Subtree
visited = [29] // Visit 29

// Back to 30 (Root)
visited = [29, 30]

// Call traverse(31) // Right Subtree of 30

// Call traverse(40) // Right Subtree of 31

// Call traverse(39) // Left Subtree of 40
visited = [29, 30, 31, 39] // Visit 39

// Back to 40 (Root)
visited = [29, 30, 31, 39, 40]

// Call traverse(41) // Right Subtree of 40

// Call traverse(89) // Right Subtree of 41
visited = [29, 30, 31, 39, 40, 41, 89] // Visit 89

// Back to 41
visited = [29, 30, 31, 39, 40, 41, 89]

// Back to 40, then 31, then 30 (All Done)

// Return final visited array: [29, 30, 31, 39, 40, 41, 89]

 */
