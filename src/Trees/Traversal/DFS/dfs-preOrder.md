# Dry Run of Preorder Traversal
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
  ```
  
## Preorder Traversal (Root → Left → Right)

1. Call: `preOrderTraversal()`
2. Call `traverse(30)`
   - `visited = [30]`
3. Call `traverse(29)`
   - `visited = [30, 29]`
4. Back to `30`, Call `traverse(31)`
   - `visited = [30, 29, 31]`
5. Call `traverse(40)`
   - `visited = [30, 29, 31, 40]`
6. Call `traverse(39)`
   - `visited = [30, 29, 31, 40, 39]`
7. Back to `40`, Call `traverse(41)`
   - `visited = [30, 29, 31, 40, 39, 41]`
8. Call `traverse(89)`
   - `visited = [30, 29, 31, 40, 39, 41, 89]`



### **Final Output**
```js
tree.preOrderTraversal(); // [30, 29, 31, 40, 39, 41, 89]
```
