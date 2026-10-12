class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
  }

  find(v) {
    if (this.parent[v] === v) return v;
    // path compression
    return (this.parent[v] = this.find(this.parent[v]));
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    if (rootA === rootB) return false; // already in the same set

    // union by size: attach the smaller tree under the larger
    if (this.size[rootA] < this.size[rootB]) {
      [rootA, rootB] = [rootB, rootA];
    }
    this.parent[rootB] = rootA;
    this.size[rootA] += this.size[rootB];
    return true;
  }
}
