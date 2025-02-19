class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return; // Ensure the vertex exists

    for (let key in this.adjacencyList) {
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (edge) => edge !== vertex
      );
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      console.warn("One or both vertices do not exist");
      return;
    }
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return; // Ensure vertices exist

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (edge) => edge !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (edge) => edge !== v1
    );
  }

  dfsRecursive(v) {
    let visited = {}; // Fixed spelling
    let result = [];

    const traverse = (vertex) => {
      // Use arrow function to preserve `this`
      if (!vertex || visited[vertex]) return; // Avoid infinite loops
      visited[vertex] = true;
      result.push(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        traverse(neighbor); // Explore all neighbors
      }
    };

    traverse(v); // Corrected initial call
    return result;
  }
  dfsIterative(v) {
    let stack = [v]; // Push starting vertex
    let visited = { [v]: true }; // Mark as visited
    let result = [];

    while (stack.length > 0) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true; // Mark before pushing
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
const traversal = graph.dfsRecursive("A");
console.log(traversal);

console.log(graph.dfsIterative("A"));

console.log(graph);
