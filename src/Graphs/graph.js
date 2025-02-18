class Graph {
  constructor() {
    // The adjacency list stores vertices as keys and their neighbors as arrays
    this.adjacencyList = {};
  }

  // Converts any data to a string for consistency in storing keys
  toString(data) {
    return `${data}`;
  }

  // Adds a new vertex to the graph
  addVertex(vertex) {
    const key = this.toString(vertex);
    // If the vertex already exists, we return to avoid duplicates
    if (this.adjacencyList[key]) return;
    this.adjacencyList[key] = [];
  }

  // Adds an undirected edge between two vertices
  addEdge(v1, v2) {
    const key1 = this.toString(v1);
    const key2 = this.toString(v2);

    // Ensure both vertices exist before adding an edge
    if (!this.adjacencyList[key1] || !this.adjacencyList[key2]) {
      console.error(`One or both vertices (${key1}, ${key2}) do not exist`);
      return;
    }

    // Add the edge only if it's not already present (to avoid duplicates)
    if (!this.adjacencyList[key1].includes(key2)) {
      this.adjacencyList[key1].push(key2);
    }
    if (!this.adjacencyList[key2].includes(key1)) {
      this.adjacencyList[key2].push(key1);
    }
  }

  // Removes an undirected edge between two vertices
  removeEdge(v1, v2) {
    const key1 = this.toString(v1);
    const key2 = this.toString(v2);

    // Ensure both vertices exist before removing the edge
    if (!this.adjacencyList[key1] || !this.adjacencyList[key2]) return;

    // Filter out the edges from both adjacency lists
    this.adjacencyList[key1] = this.adjacencyList[key1].filter(
      (edge) => edge !== key2
    );
    this.adjacencyList[key2] = this.adjacencyList[key2].filter(
      (edge) => edge !== key1
    );
  }

  // Removes a vertex and all its edges from the graph
  removeVertex(vertex) {
    const key = this.toString(vertex);

    // Ensure the vertex exists before attempting to remove it
    if (!this.adjacencyList[key]) return;

    // Remove this vertex from the adjacency lists of all other vertices
    for (let v in this.adjacencyList) {
      this.adjacencyList[v] = this.adjacencyList[v].filter(
        (edge) => edge !== key
      );
    }

    // Finally, remove the vertex itself
    delete this.adjacencyList[key];
  }

  // Displays the adjacency list for debugging
  printGraph() {
    console.log(this.adjacencyList);
  }
}

const ug = new Graph();
ug.addVertex("tokyo");
ug.addVertex("Delhi");
ug.addVertex("Dubai");
ug.addVertex("kuwait");

ug.addEdge("Delhi", "tokyo");
ug.addEdge("Delhi", "Dubai");
ug.addEdge("Delhi", "kuwait");

ug.removeEdge("Delhi", "kuwait");
ug.removeVertex("tokyo");

ug.printGraph();
/*
// Test cases to verify the implementation
const graph = new Graph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

console.log("Graph after adding vertices:");
graph.printGraph();

// Adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");

console.log("\nGraph after adding edges:");
graph.printGraph();

// Removing an edge
graph.removeEdge("C", "D");
console.log("\nGraph after removing edge C-D:");
graph.printGraph();

// Removing a vertex
graph.removeVertex("A");
console.log("\nGraph after removing vertex A:");
graph.printGraph();

// Edge case: Trying to add an edge between non-existent vertices
graph.addEdge("X", "Y"); // Should print an error message

// Edge case: Trying to remove an edge that doesn’t exist
graph.removeEdge("B", "E"); // No change expected

// Edge case: Removing a vertex that doesn't exist
graph.removeVertex("Z"); // No change expected

*/
