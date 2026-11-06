# Bellman-Ford Algorithm

Video explanation: https://www.youtube.com/watch?v=YTUO8MD1q0E

---

# Part 1: Understanding Bellman-Ford

## The problem it solves

You have a graph with nodes and weighted edges. You pick one **source node**, and you want the shortest distance from it to **every other node**.

Dijkstra solves this too, but it breaks when an edge has a **negative weight** (for example, a road that gives you a discount). Bellman-Ford handles negative weights, and it can also tell you when the graph has a **negative cycle**.

## The core idea: relaxation

"Relaxing" an edge `u -> v` with weight `w` means asking one question:

> Is it shorter to reach `v` by going through `u` than the best way I know so far?

```
if distance[u] + w < distance[v]:
    distance[v] = distance[u] + w
```

If yes, we update `distance[v]`. That is all the algorithm does, over and over.

## The algorithm in plain steps

1. Set the distance of the source to `0` and every other node to `Infinity` (not reached yet).
2. Go through **all edges** and relax each one. This is one round.
3. Repeat for `n - 1` rounds.
4. Do one more round. If any edge can still be relaxed, there is a negative cycle.

## Why exactly `n - 1` rounds?

A shortest path never visits a node twice, so it uses at most `n - 1` edges.

- After round 1, every node whose shortest path has 1 edge is correct.
- After round 2, every node whose shortest path has 2 edges is correct.
- ...
- After round `n - 1`, all shortest paths are correct.

## What is a negative cycle?

A loop of edges whose weights add up to less than 0. Every time you go around the loop, the total distance gets smaller, so you could loop forever and there is no real "shortest" path.

If everything is already correct after `n - 1` rounds, an extra round should change nothing. If it still finds an improvement, a negative cycle must exist.

## Bellman-Ford vs Dijkstra

| | Bellman-Ford | Dijkstra |
|---|---|---|
| Negative weights | Yes | No |
| Detects negative cycle | Yes | No |
| Time | `O(V * E)` | `O((V + E) log V)` |
| Idea | Relax every edge, repeat | Always pick the closest unvisited node |

---

# Part 2: How my code works (`bellmanford.js`)

## Step 1: Build the graph

```js
let n = 5;
let adjacencyList = new Map();
for (let i = 1; i <= n; i++) adjacencyList.set(i, []);
```

- `n = 5` nodes, numbered `1..5`.
- `adjacencyList` is a `Map`. Each node starts with an empty list of neighbours.

```js
const edges = [
    [1, 2, 4],
    [1, 3, 2],
    [2, 3, -3],   // negative!
    [2, 4, 2],
    [3, 4, 5],
    [3, 5, 8],
    [4, 5, -1],   // negative!
];

for (const [u, v, w] of edges) {
    adjacencyList.get(u).push([v, w]);
}
```

- Each edge is `[from, to, weight]`.
- The graph is directed, so I only add `u -> v`, not `v -> u`.
- After this loop, `adjacencyList.get(2)` is `[[3, -3], [4, 2]]`.

## Step 2: Set up the tables

```js
let distance = new Array(n+1).fill(Infinity)
let prevNodes = new Array(n+1).fill(null)
distance[1] = 0
```

- `distance[i]` is the best known distance from node 1 to node `i`. The array has size `n + 1` so I can use node numbers directly as indexes (index 0 is unused).
- `prevNodes[i]` is the node I came from to reach `i` on its best path. It is used to rebuild the path later.
- `distance[1] = 0` because the source is 0 away from itself.

## Step 3: Relax all edges `n - 1` times

```js
for (let i = 0; i < n-1; i++) {                 // repeat n-1 rounds
  for (let u of adjacencyList.keys()) {         // every node u
    let edges = adjacencyList.get(u)
    for (let [v, nbrDist] of edges) {           // every edge u -> v
      if (distance[u] === Infinity) continue    // u not reached yet, skip
      let newDistance = distance[u] + nbrDist
      if (newDistance < distance[v]) {          // found a shorter way
        distance[v] = newDistance
        prevNodes[v] = u
      }
    }
  }
}
```

- The outer loop is the `n - 1` rounds.
- The two inner loops visit **every edge** in the graph once per round.
- `continue` when `distance[u]` is `Infinity` avoids doing `Infinity + weight` on a node we have not reached.
- When a shorter distance is found, I update both `distance[v]` and `prevNodes[v]`.

## Step 4: Detect a negative cycle

```js
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
```

This is the same check as Step 3, but it runs only **once** and it does **not** update anything. If any edge can still be improved, `hasNegativeCycle` becomes `true`.

---

# Part 3: Dry run on the example graph

Source is node 1.

| Edge relaxed | Calculation | Result |
|---|---|---|
| `1 -> 2` | `0 + 4 = 4 < Infinity` | `distance[2] = 4` |
| `1 -> 3` | `0 + 2 = 2 < Infinity` | `distance[3] = 2` |
| `2 -> 3` | `4 + (-3) = 1 < 2` | `distance[3] = 1` |
| `2 -> 4` | `4 + 2 = 6 < Infinity` | `distance[4] = 6` |
| `3 -> 4` | `1 + 5 = 6`, not `< 6` | no change |
| `3 -> 5` | `1 + 8 = 9 < Infinity` | `distance[5] = 9` |
| `4 -> 5` | `6 + (-1) = 5 < 9` | `distance[5] = 5` |

Final result:

| Node | Distance from 1 | Previous node |
|------|-----------------|---------------|
| 1    | 0               | -             |
| 2    | 4               | 1             |
| 3    | 1               | 2             |
| 4    | 6               | 2             |
| 5    | 5               | 4             |

- Node 3 is reached with cost `1` via `1 -> 2 -> 3`, which beats the direct edge `1 -> 3` (cost `2`). A greedy algorithm like Dijkstra would miss this because of the negative edge.
- Shortest path to node 5: `1 -> 2 -> 4 -> 5` with cost `5`. You can rebuild it by following `prevNodes` backwards: `5 -> 4 -> 2 -> 1`.
- `hasNegativeCycle` is `false`.

## Complexity

- Time: `O(V * E)`. There are `V - 1` rounds and each round visits `E` edges.
- Space: `O(V)` for `distance` and `prevNodes`.
