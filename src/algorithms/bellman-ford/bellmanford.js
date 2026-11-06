// Bellman-Ford Algorithm
// Finds the shortest distance from one source node to every other node.
// Unlike Dijkstra, it works even when some edge weights are negative,
// and it can detect a negative cycle.

// Number of nodes (nodes are numbered 1..n)
let n = 5;

// Graph stored as an adjacency list: node -> [[neighbour, weight], ...]
let adjacencyList = new Map();
for (let i = 1; i <= n; i++) adjacencyList.set(i, []);

// Each edge is [from, to, weight]
const edges = [
    [1, 2, 4],
    [1, 3, 2],
    [2, 3, -3],   // negative!
    [2, 4, 2],
    [3, 4, 5],
    [3, 5, 8],
    [4, 5, -1],   // negative!
];

// Build the adjacency list (directed graph: only u -> v)
for (const [u, v, w] of edges) {
    adjacencyList.get(u).push([v, w]);
}


// distance[i] = best known distance from the source to node i (index 0 is unused)
let distance = new Array(n+1).fill(Infinity)
// prevNodes[i] = the node we came from to reach i on the best path (used to rebuild the path)
let prevNodes = new Array(n+1).fill(null)
// Source node is 1, distance to itself is 0
distance[1] = 0


// Relax every edge (n - 1) times.
// A shortest path has at most n - 1 edges, so n - 1 rounds are enough
// for the correct distances to spread through the whole graph.
for(let i=0; i<n-1;i++) {
  for (let u of adjacencyList.keys()) {
  let edges = adjacencyList.get(u)
  for(let [v, nbrDist] of edges) {
    // If u is not reachable yet, we can't use it to improve anything
    if(distance[u] === Infinity) continue
   let newDistance = distance[u] + nbrDist
    // Relaxation: found a shorter way to reach v through u
    if(newDistance < distance[v]) {
      distance[v] = newDistance
      prevNodes[v] = u
    }
  }
}

}


// one extra pass: if ANYTHING can still be relaxed after n-1 rounds,
// that's only possible because of a negative cycle somewhere reachable
let hasNegativeCycle = false

for (let u of adjacencyList.keys()) {
  let edges = adjacencyList.get(u)
  for (let [v, nbrDist] of edges) {
    if (distance[u] === Infinity) continue
    let newDistance = distance[u] + nbrDist
    if (newDistance < distance[v]) {
      hasNegativeCycle = true
    }
  }
}

