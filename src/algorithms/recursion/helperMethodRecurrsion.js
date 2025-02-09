/*
    Helper Method Recursion is a pattern where an **outer function** sets up variables 
    and calls a **helper function** to perform recursion. 
    This is useful when you need to maintain state across recursive calls.
 */

function collectOddNumbers(arr) {
  let result = [];
  //   recurrsiveHelper
  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }
    // sub problem solution
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    //calling the solution with smaller piece of input
    helper(helperInput.slice(1)); // to know about slice vs splice refer sliceVsSpliceReference.js
  }
  helper(arr);
  return result;
}

const output = collectOddNumbers([1, 3, 5, 2, 6, 5, 8, 10, 12, 1]);

console.log("collectedOddNumbers", output);

// Another way of maintaing the state in recursion without helperMethod pattern
function collectOddNumbers2(arr, state = []) {
  //base case
  if (arr.length === 0) {
    return state;
  }
  //sub problem solution
  if (arr[0] % 2 !== 0) {
    state.push(arr[0]);
  }
  // calling the solution with smaller peice of input and passing the current state
  return collectOddNumbers2(arr.slice(1), state);
}

const res = collectOddNumbers2([1, 3, 5, 2, 6, 5, 8, 10, 12, 1], []); // pass the original array with empty array as the state

console.log("collectedOddNumbers2", res);

/* Dry run
Recursive calls:

[1, 3, 5, 2, 6, 5, 8, 10, 12, 1] → state = [1]
[3, 5, 2, 6, 5, 8, 10, 12, 1] → state = [1, 3]
[5, 2, 6, 5, 8, 10, 12, 1] → state = [1, 3, 5]
[2, 6, 5, 8, 10, 12, 1] → state = [1, 3, 5] (2 is even)
[6, 5, 8, 10, 12, 1] → state = [1, 3, 5] (6 is even)
[5, 8, 10, 12, 1] → state = [1, 3, 5, 5]
[8, 10, 12, 1] → state = [1, 3, 5, 5] (8 is even)
[10, 12, 1] → state = [1, 3, 5, 5] (10 is even)
[12, 1] → state = [1, 3, 5, 5] (12 is even)
[1] → state = [1, 3, 5, 5, 1]
[] (Base case reached) → Returns [1, 3, 5, 5, 1]

*/
/*
 *Above approach modifies the state array in-place, which is fine,
 * but if you want a pure function (without side effects),
 * you can use array concatenation instead:
 */
function collectOddNumbers3(arr, state = []) {
  if (arr.length === 0) return state;
  return collectOddNumbers3(
    arr.slice(1),
    arr[0] % 2 !== 0 ? [...state, arr[0]] : state
  );
}

// pass the original array with empty array as the state
const test = collectOddNumbers3([1, 3, 5, 2, 6, 5, 8, 10, 12, 1], []);
console.log("collectedOddNumbers3", test);
