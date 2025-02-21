// Priority Queue class to maintain nodes with the smallest distance first
class PriorityQueue {
  constructor() {
    this.queue = []; // Array to store elements as {node, priority}
  }

  // Insert a node with a given priority (distance)
  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Sort to maintain min-heap behavior
  }

  // Remove and return the node with the smallest priority (shortest distance)
  dequeue() {
    return this.queue.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Dijkstra’s Algorithm implementation
function dijkstra(graph, start) {
  let distances = {}; // Object to store shortest distances from start node
  let previous = {}; // Object to store the previous node in the shortest path
  let pq = new PriorityQueue(); // Priority queue to process nodes in order of shortest distance

  // Initialize distances to all nodes as Infinity, except the start node (0 distance)
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[start] = 0; // Start node distance is 0
  pq.enqueue(start, 0); // Add start node to priority queue

  // Process nodes until all reachable nodes are visited
  while (!pq.isEmpty()) {
    let { node } = pq.dequeue(); // Get node with the smallest distance

    // Loop through all neighboring nodes of the current node
    for (let neighbor in graph[node]) {
      let newDist = distances[node] + graph[node][neighbor]; // Calculate new distance

      // If new distance is shorter, update it
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = node; // Store previous node for path reconstruction
        pq.enqueue(neighbor, newDist); // Add neighbor to priority queue with updated distance
      }
    }
  }

  return { distances, previous }; // Return shortest distances and path mapping
}

// Function to get the shortest path from start to end
function shortestPath(graph, start, end) {
  let { distances, previous } = dijkstra(graph, start); // Get shortest paths using Dijkstra
  let path = [];
  let current = end;

  // Backtrack from the end node to reconstruct the shortest path
  while (current) {
    path.unshift(current); // Add current node to the path
    current = previous[current]; // Move to the previous node in the path
  }

  return { path, distance: distances[end] }; // Return shortest path and its total distance
}

// Graph Representation (Adjacency List)
const graph = {
  A: { C: 3, F: 2 }, // A → C (3), A → F (2)
  C: { D: 4, E: 1 }, // C → D (4), C → E (1)
  F: { C: 2, E: 3, G: 5 }, // F → C (2), F → E (3), F → G (5)
  D: { B: 1 }, // D → B (1)
  E: { B: 2 }, // E → B (2)
  G: { B: 2 }, // G → B (2)
  B: {}, // Destination node (no outgoing edges)
};

// Find and print the shortest path from A to B
console.log(shortestPath(graph, "A", "B"));
