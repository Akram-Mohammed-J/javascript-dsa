# BST Visualizer

This project provides a **Binary Search Tree (BST) Visualizer** using an HTML5 `<canvas>` element. It dynamically updates the tree structure when new values are inserted.

## 📌 How to Use

2.  **Open **`index.html`\*\* in a Browser Simply open `index.html` in your web browser (Chrome, Firefox, Edge, etc.).

    - If you're running a local server:

          npx serve   # Or use Python's HTTP server: python -m http.server

    - Then, open `http://localhost:5000` (or the provided URL).

3.  **Interact with the BST**

    - The tree structure is visualized dynamically on the canvas.
    - Duplicate values are ignored (BST does not allow duplicates).
    - If duplicate values are detected, a warning message appears at the top of the visualization.

## 🛠️ Project Structure

    /
    ├── index.html      # Main file to visualize the BST
    ├── bst.js          # BST class implementation
    ├── README.md       # Documentation

## 🚀 Features

- **Real-time BST visualization**
- **Handles duplicate values** with a warning
- **Interactive and easy-to-use**

## ⚡ Notes

- Ensure that the browser supports JavaScript modules when using `import` in `index.html`.
- If running locally, use a simple HTTP server to avoid CORS issues.

Enjoy visualizing your BST! 🎯
