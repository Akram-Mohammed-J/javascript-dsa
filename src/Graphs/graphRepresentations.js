class Edge {
  constructor(u, v, wt, isDirected) {
    this.u = u;
    this.v = v;
    this.wt = wt;
    this.isDirected = isDirected;
  }
}

class Node {
  constructor(val, wt = null) {
    this.val = val;
    this.wt = wt;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(val, wt = null) {
    const newNode = new Node(val, wt);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // link the OLD tail to the new node
      this.tail = newNode; // move tail forward
    }
  }
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr !== null) {
      result.push(curr.wt !== null ? { v: curr.val, wt: curr.wt } : curr.val);
      curr = curr.next;
    }
    return result;
  }
}

class GraphWithEdgeList {
  constructor(V) {
    this.V = V;
    this.edgeList = [];
  }
  addVertex(u, v, wt, isDirected) {
    this.edgeList.push(new Edge(u, v, wt, isDirected));
    if (!isDirected) {
      this.edgeList.push(new Edge(v, u, wt, isDirected));
    }
  }
}

class GraphWithAdjacencyMatrix {
  constructor(V) {
    this.V = V;
    // Array.from with a mapper creates a FRESH array per row —
    // .fill(new Array(...)) would alias the same row V+1 times.
    this.adjacencyMatrix = Array.from({ length: this.V + 1 }, () =>
      new Array(this.V + 1).fill(null),
    );
  }
  addVertex(u, v, wt, isDirected) {
    this.adjacencyMatrix[u][v] = wt;
    if (!isDirected) {
      this.adjacencyMatrix[v][u] = wt;
    }
  }
}

class GraphWithAdjacencyList {
  constructor(V) {
    this.V = V;
    this.adjacencyList = new Map();
    for (let i = 1; i <= this.V; i++) {
      this.adjacencyList.set(i, new LinkedList());
    }
  }
  addVertex(u, v, wt, isDirected) {
    let list = this.adjacencyList.get(u);
    list.addNode(v, wt);

    if (!isDirected) {
      let listV = this.adjacencyList.get(v);
      listV.addNode(u, wt);
    }
  }
  bfs(src) {
    let result = [];
    let q = [src];
    let isVisited = new Array(this.V + 1).fill(false);
    isVisited[src] = true; // mark the SOURCE visited immediately

    while (q.length > 0) {
      let currentVertex = q.shift();
      result.push(currentVertex); // record on dequeue

      let edges = this.adjacencyList.get(currentVertex);
      let curr = edges.head;
      while (curr != null) {
        if (!isVisited[curr.val]) {
          // check BEFORE enqueueing
          isVisited[curr.val] = true; // mark BEFORE enqueueing — this is what stops re-adds
          q.push(curr.val); // push the plain vertex number
        }
        curr = curr.next;
      }
    }
    return result;
  }
}

let V = 6;
let adListG = new GraphWithAdjacencyList(V);
let adMtxG = new GraphWithAdjacencyMatrix(V);
let edListG = new GraphWithEdgeList(V);

adListG.addVertex(1, 2, 20, false);
adListG.addVertex(2, 5, 80, false);
adListG.addVertex(1, 3, 40, false);

console.log("Adjacency List:");
for (let [vertex, list] of adListG.adjacencyList) {
  console.log(`  ${vertex} ->`, JSON.stringify(list.toArray()));
}
console.log("BFS TRAVERSAL", adListG.bfs(1));

adMtxG.addVertex(1, 2, 20, false);
adMtxG.addVertex(2, 5, 80, false);
adMtxG.addVertex(1, 3, 40, false);

console.log("\nAdjacency Matrix:");
console.log(JSON.stringify(adMtxG.adjacencyMatrix));

edListG.addVertex(1, 2, 20, false);
edListG.addVertex(2, 5, 80, false);
edListG.addVertex(1, 3, 40, false);

console.log("\nEdge List:");
console.log(JSON.stringify(edListG.edgeList));
