// LeetCode 787: Cheapest Flights Within K Stops
// Find the cheapest price from src to dst using at most k stops (k + 1 flights).
// Returns -1 if no such route exists.
//
// This is Bellman-Ford with ONE twist: we only run k + 1 rounds (not n - 1),
// and each round works from a snapshot so it can only extend paths by exactly one flight.

class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        // Build the graph: city -> [[destination, price], ...]  (directed)
        // Same adjacency list setup as normal Bellman-Ford, but cities are 0..n-1
        let adjacencyList = new Map();
        for (let i = 0; i < n; i++) adjacencyList.set(i, []);
        for (const [u, v, w] of flights) {
            adjacencyList.get(u).push([v, w]);
        }

        // Bellman-Ford's "distance" array, called "price" here.
        // Everything starts as Infinity, source costs 0.
        let price = new Array(n).fill(Infinity);
        price[src] = 0;

        // Bellman-Ford normally runs n - 1 rounds, because a shortest path has at most n - 1 edges.
        // Here the limit is k stops = k + 1 flights = k + 1 edges, so we run only k + 1 rounds.
        // After round i, price[x] is the cheapest cost to reach x using at most i flights.
        for (let i = 0; i < k + 1; i++) {
            // Snapshot of last round's prices.
            // Without it, an update made early in this round could be reused later in the SAME round,
            // which would let a path use more than one extra flight per round and break the stops limit.
            // So reads come from `price` (last round) and writes go to `temp` (this round).
            let temp = [...price];

            for (let u of adjacencyList.keys()) {
                // Same as normal Bellman-Ford: can't relax from a city we haven't reached yet
                if (price[u] === Infinity) continue;
                let edges = adjacencyList.get(u);
                for (let [v, w] of edges) {
                    let newPrice = price[u] + w;
                    // Relaxation step: is flying u -> v cheaper than the best known price to v?
                    if (newPrice < temp[v]) {
                        temp[v] = newPrice;
                    }
                }
            }

            // This round is done, its results become the base for the next round
            price = temp;
        }

        // Unreachable within k stops -> -1
        return price[dst] !== Infinity ? price[dst] : -1;
    }
}

// Example:
// n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Expected output: 700  (0 -> 1 -> 3)
const sol = new Solution();
console.log(sol.findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1));
