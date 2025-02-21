## Dijkstra's Algorithm Explanation

Dijkstra’s algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph (non-negative weights). It works as follows:

### Steps:

1.  **Initialize:**

    - Set the distance of the source vertex (A) to **0** and all other vertices to **Infinity**.
    - Use a **priority queue (min-heap)** to always expand the shortest known path first.

2.  **Relaxation:**

    - Pick the vertex with the smallest known distance.
    - Update its neighboring vertices with the minimum distance possible.

3.  **Repeat:**

    - Process each vertex only once (or when a shorter path is found).
    - Continue until all vertices are visited.

4.  **Result:**

    - The shortest path to **B** (or any other vertex) is determined by tracing back from the destination.

---

## JavaScript Implementation

Here’s the implementation of **Dijkstra’s Algorithm** in JavaScript using a **Priority Queue**.

```js
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
```

---

### How It Works with the Given Graph

1.  **Initialization**:

    - `distances = { A: 0, B: ∞, C: ∞, D: ∞, E: ∞, F: ∞, G: ∞ }`
    - `pq = [{ A, 0 }]`

2.  **Iteration**:

    - Expand `A`, update `C` (3) and `F` (2).
    - Expand `F`, update `C` (no change), `E` (5), and `G` (7).
    - Expand `C`, update `D` (7) and `E` (4).
    - Expand `E`, update `B` (6).
    - Expand `B` (found shortest path).

3.  **Result**:

    - **Shortest Path:** `A → C → E → B`
    - **Total Distance:** `6`

---

### Time Complexity

- **O((V + E) log V)** using a priority queue.
