class Graph {
  constructor(V) {
    this.V = V;
    this.list = new Map();
    for (let i = 1; i < V + 1; i++) {
      this.list.set(i, []);
    }
  }

  addEdge(v, u, isDirected) {
    if (!isDirected) {
      this.list.get(u).push(v);
    }
    this.list.get(v).push(u);
  }

  hasCycle() {
    // 0 = unvisited, 1 = in progress (on current DFS path), 2 = done
    let state = new Array(this.V + 1).fill(0);

    const dfs = (src) => {
      state[src] = 1; // mark as in-progress

      let nbrs = this.list.get(src);
      for (let nbr of nbrs) {
        if (state[nbr] === 1) {
          return true; // back edge to a node on current path -> cycle
        }
        if (state[nbr] === 0) {
          if (dfs(nbr)) {
            return true; // propagate cycle detection upward
          }
        }
        // state[nbr] === 2 -> already fully explored, safe to skip
      }

      state[src] = 2; // mark as fully done
      return false;
    };

    // check every vertex, in case the graph has disconnected components
    for (let v = 1; v <= this.V; v++) {
      if (state[v] === 0) {
        if (dfs(v)) return true;
      }
    }

    return false;
  }
}

// Example: 1 -> 2 -> 3 -> 1 (cycle)
const g1 = new Graph(3);
g1.addEdge(1, 2, true);
g1.addEdge(2, 3, true);
g1.addEdge(3, 1, true);
console.log(g1.hasCycle()); // true

// Example: 1 -> 2 -> 3 (no cycle)
const g2 = new Graph(3);
g2.addEdge(1, 2, true);
g2.addEdge(2, 3, true);
console.log(g2.hasCycle()); // false