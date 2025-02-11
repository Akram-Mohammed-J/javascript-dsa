# Dry Run of Postorder Traversal

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

```

## Postorder Traversal (Left → Right → Root)

1.  Call: `postOrderTraversal()`
2.  Call `traverse(30)`
3.  Call `traverse(29)`
    *   `visited = [29] // Left subtree first`
4.  Back to `30`, Call `traverse(31)`
5.  Call `traverse(40)`
6.  Call `traverse(39)`
    *   `visited = [29, 39] // Left of 40`
7.  Back to `40`, Call `traverse(41)`
8.  Call `traverse(89)`
    *   `visited = [29, 39, 89] // Right of 41`
9.  Back to `41`
    *   `visited = [29, 39, 89, 41]`
10.  Back to `40`
    *   `visited = [29, 39, 89, 41, 40]`
11.  Back to `31`
    *   `visited = [29, 39, 89, 41, 40, 31]`
12.  Back to `30` (Root node)
    *   `visited = [29, 39, 89, 41, 40, 31, 30]`

### Final Output

```js
tree.postOrderTraversal(); // [29, 39, 89, 41, 40, 31, 30
```