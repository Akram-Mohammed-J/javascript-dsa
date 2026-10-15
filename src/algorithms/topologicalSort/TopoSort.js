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

  topoSort() {
    let visited = new Array(this.V + 1).fill(false);
    let stack = [];

    const dfs = (src) => {
      visited[src] = true;

      let nbrs = this.list.get(src);
      for (let nbr of nbrs) {
        if (!visited[nbr]) {
          dfs(nbr);
        }
      }

      stack.push(src); // push only after all neighbors are fully explored
    };

    for (let v = 1; v <= this.V; v++) {
      if (!visited[v]) {
        dfs(v);
      }
    }

    return stack.reverse(); // reverse to get correct topological order
  }
}

// Example: 1 -> 2 -> 3, 1 -> 3
const g = new Graph(3);
g.addEdge(1, 2, true);
g.addEdge(1, 3, true);
g.addEdge(2, 3, true);

console.log(g.topoSort()); // [1, 2, 3]