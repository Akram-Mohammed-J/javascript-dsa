Problem: Ways to Climb Stairs
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



