class Graph {
  constructor() {
    this.adjacencyList = {}; // Stores the graph in adjacency list format
  }

  // Add a vertex (town) to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; // Initialize an empty array for edges
    }
  }

  // Add a directed edge from vertex1 to vertex2 with a weight
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.warn("One or both vertices do not exist");
      return;
    }
    // Add a directed edge from vertex1 to vertex2
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    });
  }
}

// Create the graph instance
const graph = new Graph();

// Add all vertices (towns)
["A", "C", "F", "D", "E", "G", "B"].forEach((town) => graph.addVertex(town));

// Add directed weighted edges as per the given graph
graph.addEdge("A", "C", 3);
graph.addEdge("A", "F", 2);
graph.addEdge("C", "D", 4);
graph.addEdge("C", "E", 1);
graph.addEdge("F", "C", 2);
graph.addEdge("F", "E", 3);
graph.addEdge("F", "G", 5);
graph.addEdge("D", "B", 1);
graph.addEdge("E", "B", 2);
graph.addEdge("G", "B", 2);

// Display the graph structure
console.log(graph.adjacencyList);
