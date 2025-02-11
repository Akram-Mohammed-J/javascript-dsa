# Dry Run of Inorder Traversal

## Tree Structure After Insertion

       30
      /  \
    29   31
          \
          40
         /  \
       39   41
              \
              89



```js 
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
 ```

 ## In-Order Traversal (Left → Root → Right)

1. Call: `inOrderTraversal()`
2. Call `traverse(30)`
3. Call `traverse(29)`  // Left Subtree
   - `visited = [29] // Visit 29`
4. Back to `30` (Root)
   - `visited = [29, 30]`
5. Call `traverse(31)` // Right Subtree of 30
6. Call `traverse(40)` // Right Subtree of 31
7. Call `traverse(39)` // Left Subtree of 40
   - `visited = [29, 30, 31, 39] // Visit 39`
8. Back to `40` (Root)
   - `visited = [29, 30, 31, 39, 40]`
9. Call `traverse(41)` // Right Subtree of 40
10. Call `traverse(89)` // Right Subtree of 41
    - `visited = [29, 30, 31, 39, 40, 41, 89] // Visit 89`
11. Back to `41`
    - `visited = [29, 30, 31, 39, 40, 41, 89]`
12. Back to `40`, then `31`, then `30` (All Done)

### **Final Output**
```js
tree.inOrderTraversal(); // [29, 30, 31, 39, 40, 41, 89]
```