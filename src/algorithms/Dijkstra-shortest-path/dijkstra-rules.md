### Rules of Dijkstra’s Algorithm 🏆

Dijkstra’s Algorithm is used to find the **shortest path** from a source node to all other nodes in a **weighted directed graph** with **non-negative weights**.

---

### Rules & Steps:

#### 1️⃣ Initialize Distances & Previous Nodes

- Set the **distance of the start node to `0`** and all other nodes to `Infinity`.
- Keep a **previous node tracker** to reconstruct the shortest path later.
- Use a **priority queue (min-heap)** to always process the closest node first.

---

#### 2️⃣ Process Nodes in Order of Shortest Known Distance

- Pick the **node with the smallest distance** from the priority queue.
- Mark it as **visited**.
- For each **neighboring node**, calculate the **new potential shortest distance**: newDistance\=currentDistance+edgeWeight\\text{newDistance} = \\text{currentDistance} + \\text{edgeWeight}newDistance\=currentDistance+edgeWeight
- If the new distance is **shorter** than the previously known distance:
  - **Update the distance** for that neighbor.
  - **Update the previous node** (to help in path reconstruction).
  - Push the neighbor into the **priority queue** with the updated distance.

---

#### 3️⃣ Stop When All Nodes Are Processed

- Continue until all nodes are visited or the priority queue is empty.
- The final distance table now contains **the shortest distance** from the start node to all reachable nodes.

---

#### 4️⃣ Reconstruct the Shortest Path

- Start from the destination node and **backtrack using the previous node tracker**.
- This gives the **actual shortest path** taken.

---

### Key Properties of Dijkstra’s Algorithm

✔ **Works with weighted graphs** (only non-negative weights).  
✔ **Efficient with a priority queue (O((V + E) log V))**.  
✔ **Does not work with negative weight edges** (use Bellman-Ford instead).

---

### Example Illustration

🔹 **Graph Representation** (Directed & Weighted):

rust

CopyEdit

        `(3)     A ------> C     |        / |    (2)|      /  |(1)     ↓      /   ↓       F ----> E ---> B    (2)  (3)  (2)`

✔ **Shortest Path from A to B** → **A → C → E → B**  
✔ **Total Distance** = `3 + 1 + 2 = 6`
