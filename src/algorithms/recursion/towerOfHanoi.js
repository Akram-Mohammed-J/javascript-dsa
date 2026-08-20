/*
# Tower of Hanoi

## Problem Statement

You are given an integer `n`, representing the number of disks in the **Tower of Hanoi** problem.

There are three rods: `T1`, `T2`, and `T3`. Initially, all `n` disks are placed on rod `T1` in decreasing order of size, with the largest disk at the bottom.

Your task is to move all the disks from rod `T1` to rod `T3` using rod `T2` as an auxiliary rod.

The following rules must be followed:

1. Only one disk can be moved at a time.
2. Only the top disk of a rod can be moved.
3. A larger disk cannot be placed on top of a smaller disk.
4. You must use recursion to solve the problem.
5. Record every move in a **2D array**.

Each move should be stored as:

```text
[diskNumber, fromRod, toRod]
```

Return the 2D array containing all moves in the order they are performed.

## Input

A single integer:

```text
n
```

representing the number of disks.

## Output

Return a 2D array containing all the moves required to move the `n` disks from rod `T1` to rod `T3`.

Each element should have the format:

```text
[diskNumber, fromRod, toRod]
```

## Sample Input

```text
3
```

## Sample Output

```text
[
  [1, "A", "C"],
  [2, "A", "B"],
  [1, "C", "B"],
  [3, "A", "C"],
  [1, "B", "A"],
  [2, "B", "C"],
  [1, "A", "C"]
]
```

## Constraints

```text
1 ≤ n ≤ 15
```

The total number of moves is:

```text
2ⁿ - 1
```

So for `n = 15`, there will be `32,767` moves.

*/



function towerOfHanoi(n) {
    let moves = [];

    function helper(n, source, auxiliary, destination) {
        if (n === 0) {
            return;
        }

        // Move n-1 disks to auxiliary
        helper(n - 1, source, destination, auxiliary);

        // Record the move
        moves.push([n, source, destination]);

        // Move n-1 disks to destination
        helper(n - 1, auxiliary, source, destination);
    }

    helper(n, "T1", "T2", "T3");

    return moves;
}

console.log(towerOfHanoi(3));
