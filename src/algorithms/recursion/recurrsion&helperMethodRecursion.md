# Recursion and Helper Method Recursion

## 1. Understanding Recursion

Recursion is a programming technique where a function calls itself to solve a problem. Each recursive call works on a smaller subset of the original problem until it reaches a base case.

### Example: Factorial using Recursion

    function factorial(n) {
      if (n === 1) return 1; // Base case
      return n * factorial(n - 1); // Recursive call
    }
    console.log(factorial(5)); // Output: 120

### Dry Run:

| **Step** | **Function Call** | **Stack State**   | **Return Value**          |
| -------- | ----------------- | ----------------- | ------------------------- |
| **1**    | **factorial(5)**  | **factorial(5)**  | **5 \* factorial(4)**     |
| **2**    | **factorial(4)**  | **factorial(4)**  | **4 \* factorial(3)**     |
| **3**    | **factorial(3)**  | **factorial(3)**  | **3 \* factorial(2)**     |
| **4**    | **factorial(2)**  | **factorial(2)**  | **2 \* factorial(1)**     |
| **5**    | **factorial(1)**  | **factorial(1)**  | **1 (Base case reached)** |
| **6**    | **Returning 1**   | **factorial(2)**  | **2 \* 1 = 2**            |
| **7**    | **Returning 2**   | **factorial(3)**  | **3 \* 2 = 6**            |
| **8**    | **Returning 6**   | **factorial(4)**  | **4 \* 6 = 24**           |
| **9**    | **Returning 24**  | **factorial(5)**  | **5 \* 24 = 120**         |
| **10**   | **Returning 120** | **(Stack Empty)** | **Final Output: 120**     |

---

## 2. Helper Method Recursion

Helper Method Recursion is a pattern where an **outer function** sets up variables and calls a **helper function** to perform recursion. This is useful when you need to maintain state across recursive calls.

### Example: Collecting Even Numbers

    function collectEvenNumbers(arr) {
      let result = [];
      function helper(index) {
        if (index >= arr.length) return; // Base case
        if (arr[index] % 2 === 0) result.push(arr[index]);
        helper(index + 1); // Recursive call
      }
      helper(0); // Initial call
      return result;
    }
    console.log(collectEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

### Dry Run:

| **Step** | **Function Call**         | **Stack State**     | **Result Array**            |
| -------- | ------------------------- | ------------------- | --------------------------- |
| **1**    | **helper(0)**             | **helper(0)**       | **[]**                      |
| **2**    | **helper(1)**             | **helper(1)**       | **[2]**                     |
| **3**    | **helper(2)**             | **helper(2)**       | **[2]**                     |
| **4**    | **helper(3)**             | **helper(3)**       | **[2, 4]**                  |
| **5**    | **helper(4)**             | **helper(4)**       | **[2, 4]**                  |
| **6**    | **helper(5)**             | **helper(5)**       | **[2, 4, 6]**               |
| **7**    | **helper(6) (Base Case)** | **(Stack Unwinds)** | **Final Output: [2, 4, 6]** |

---

## 3. Differences Between Recursion & Helper Method Recursion

| **Feature**               | **Recursion**                 | **Helper Method Recursion**            |
| ------------------------- | ----------------------------- | -------------------------------------- |
| **Function Calls Itself** | **Yes**                       | **Inner helper function does**         |
| **Maintains State**       | **No**                        | **Yes (via outer function variables)** |
| **Used For**              | **Simple recursive problems** | **Problems needing extra state**       |

---

## 4. Visual Representation ### Call Stack for `factorial(3)`:

    factorial(3)
        factorial(2)
            factorial(1) -> Base Case (returns 1)
        factorial(2) returns 2 * 1 = 2
    factorial(3) returns 3 * 2 = 6

### Call Stack for `collectEvenNumbers([1,2,3,4,5,6])`:

    helper(0) -> helper(1) -> helper(2) -> helper(3) -> helper(4) -> helper(5) -> helper(6) (Base Case)
    Stack Unwinds:
        helper(5) returns [6]
        helper(3) returns [4,6]
        helper(1) returns [2,4,6]
    Final Output: [2, 4, 6]

---

## 5. When to Use Each Approach

- **Recursion**: When there is no need to maintain additional state variables (e.g., factorial, Fibonacci).
- **Helper Method Recursion**: When you need to collect results across recursive calls (e.g., filtering, modifying arrays).

---

This document provides a clear explanation, dry runs, and visualizations for **Recursion** and **Helper Method Recursion**. Let me know if you need further refinements! 🚀
