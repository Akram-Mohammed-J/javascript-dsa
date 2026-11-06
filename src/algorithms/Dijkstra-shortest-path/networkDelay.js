class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compare = compareFn;
  }
  #left(i) {
    return 2 * i + 1;
  }
  #right(i) {
    return 2 * i + 2;
  }
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }
  #swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  length() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  pop() {
    let min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    if (this.heap.length > 0) this.heapifyDown(0);
    return min;
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.#parent(i);
      if (this.compare(this.heap[parentIndex], this.heap[i]) < 0) {
        break;
      } else {
        this.#swap(parentIndex, i);
        i = parentIndex;
      }
    }
  }

  heapifyDown(i) {
    while (true) {
      let leftIndex = this.#left(i);
      let rightIndex = this.#right(i);
      let smallest = i;

      if (
        leftIndex < this.heap.length &&
        this.compare(this.heap[leftIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.compare(this.heap[rightIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightIndex;
      }
      if (smallest == i) {
        break;
      } else {
        this.#swap(i, smallest);
        i = smallest;
      }
    }
  }
}

let n = 5;
const times = [
  [1, 2, 4],
  [1, 3, 2],
  [2, 4, 5],
  [3, 4, 8],
  [4, 5, 3],
];
let k = 1;

let adjacencyList = new Map();
for (let i = 1; i <= n; i++) {
  adjacencyList.set(i, []);
}
for (let [u, v, wt] of times) {
  adjacencyList.get(u).push([v, wt]);
}

function djikstra() {
  let pq = new MinHeap((a, b) => a[1] - b[1]); // compare by distance, index 1
  let visited = new Array(n + 1).fill(false);
  let distance = new Array(n + 1).fill(Infinity);
  distance[k] = 0;
  pq.push([k, 0]);

  while (pq.length() > 0) {
    let [u, dist] = pq.pop();

    if (visited[u]) continue;
    visited[u] = true;

    let edges = adjacencyList.get(u);
    for (let [nbr, nbrDist] of edges) {
      if (!visited[nbr]) {
        let newDist = dist + nbrDist;
        if (newDist < distance[nbr]) {
          distance[nbr] = newDist;
          pq.push([nbr, newDist]);
        }
      }
    }
  }

  return distance;
}

function networkDelayTime() {
  let distance = djikstra();
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (distance[i] === Infinity) return -1;
    ans = Math.max(ans, distance[i]);
  }
  return ans;
}

console.log(networkDelayTime());
