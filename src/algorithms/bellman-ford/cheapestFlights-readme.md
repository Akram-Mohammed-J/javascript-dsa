# Cheapest Flights Within K Stops (LeetCode 787)

## Problem

There are `n` cities and a list of flights `[from, to, price]`. Find the cheapest price from `src` to `dst` using **at most `k` stops** (so at most `k + 1` flights). Return `-1` if it is not possible.

Example: `n = 4`, `flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]`, `src = 0`, `dst = 3`, `k = 1` -> answer `700` (`0 -> 1 -> 3`).
The path `0 -> 1 -> 2 -> 3` costs only `400`, but it uses 2 stops, which is more than `k = 1`.

## Why Bellman-Ford?

Bellman-Ford has a built-in property: **after round `i`, every distance uses at most `i` edges.**

That is exactly the limit this problem asks for. "At most `k` stops" means "at most `k + 1` edges", so we just run `k + 1` rounds instead of `n - 1`. Dijkstra cannot do this easily because it does not track how many edges were used.

## What changes from normal Bellman-Ford

| | Normal Bellman-Ford ([README](./README.md)) | This problem |
|---|---|---|
| Rounds | `n - 1` | `k + 1` |
| Array name | `distance` | `price` |
| Update inside a round | Directly in `distance` | In a copy `temp`, then `price = temp` |
| Negative cycle check | Yes | Not needed (prices are positive) |
| Result | Distance to all nodes | Only `price[dst]` |

## The snapshot (`temp`) is the important part

```js
let temp = [...price];   // copy of last round
...
if (newPrice < temp[v]) temp[v] = newPrice;   // write to temp
...
price = temp;
```

We read from `price` (last round) but write to `temp` (this round).

Why? If we updated `price` directly, a new price found early in a round could be used again later in the same round. One round could then cover 2 or 3 flights, and the stops limit would break.

Example with `k = 0` (1 flight allowed) on `0 -> 1 -> 2`:
- Without the snapshot: relax `0 -> 1`, then `1 -> 2` in the same round, so node 2 gets a price using 2 flights. Wrong.
- With the snapshot: `price[1]` is still `Infinity` during the round, so `1 -> 2` is skipped. Correct.

## How the code works

1. **Build the graph.** An adjacency list: `city -> [[destination, price], ...]`. Cities are `0..n-1`.
2. **Set up `price`.** All `Infinity`, except `price[src] = 0`.
3. **Run `k + 1` rounds.** In each round:
   - Copy `price` into `temp`.
   - For every city `u` that has been reached (`price[u] !== Infinity`), try every flight `u -> v`.
   - If `price[u] + w` is cheaper than `temp[v]`, update `temp[v]`.
   - Set `price = temp`.
4. **Answer.** Return `price[dst]`, or `-1` if it is still `Infinity`.

## Dry run (`src = 0`, `dst = 3`, `k = 1`, so 2 rounds)

Start: `price = [0, ∞, ∞, ∞]`

**Round 1** (paths with 1 flight):
- `0 -> 1`: `temp[1] = 100`
- Result: `price = [0, 100, ∞, ∞]`

**Round 2** (paths with up to 2 flights):
- `0 -> 1`: `0 + 100 = 100`, no change
- `1 -> 2`: `100 + 100 = 200`, `temp[2] = 200`
- `1 -> 3`: `100 + 600 = 700`, `temp[3] = 700`
- Result: `price = [0, 100, 200, 700]`

Answer: `price[3] = 700`. Node 2 got its price `200` in round 2, so `2 -> 3` (cost `400` total) was never used. That would need a 3rd flight.

## Complexity

- Time: `O(k * E)`, since there are `k + 1` rounds and each visits all `E` flights.
- Space: `O(V + E)` for the graph, plus `O(V)` for `price` and `temp`.

## Files

- Code: [cheapestFlightsWithinKStops.js](./cheapestFlightsWithinKStops.js)
- Basic algorithm: [README.md](./README.md)
- Video: https://www.youtube.com/watch?v=YTUO8MD1q0E
