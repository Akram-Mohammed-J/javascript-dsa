#### 1. Problem: Ways to Climb Stairs
You are given an integer n representing the number of stairs in a staircase.

You start at the bottom of the staircase and can climb either 1 stair or 2 stairs at a time.

Your task is to find all possible ways to reach exactly the top of the staircase.

Example
For n = 3, there are three possible ways:

[1, 1, 1]
[1, 2]
[2, 1]

Function Signature
function waysToClimbStairs(n) {
    // your solution
}

Input
An integer n, where n >= 0.
Output
Return an array containing all possible sequences of 1-step and 2-step moves that add up to exactly n.

Examples
Example 1
Input: 2

Output:
[
  [1, 1],
  [2]
]

Example 2
Input: 3

Output:
[
  [1, 1, 1],
  [1, 2],
  [2, 1]
]

Example 3
Input: 4

Output:
[
  [1, 1, 1, 1],
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
  [2, 2]
]

Constraints
0 <= n <= 20
Each move must be either 1 or 2 stairs.
Every returned sequence must sum exactly to n.
Follow-up
Can you solve this using DFS/backtracking and explain the time and space complexity?


#### 2.Travelling Maze — Backtracking Problem
Given a maze represented as a 2D grid, a traveller needs to find all possible paths from a starting cell to a destination cell.

The maze contains:

0 — an open cell that can be visited.
1 — a wall that cannot be crossed.
The traveller can move up, down, left, or right.

Rules
You cannot move through walls.
You cannot visit the same cell more than once in a single path.
Find and print all possible paths from the start to the destination.
This problem should be solved using backtracking.
Input
const maze = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

const start = [0, 0];
const destination = [4, 4];.



