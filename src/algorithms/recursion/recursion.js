function countNum(num) {
  // base case or stopping condition
  if (num <= 0) {
    console.log("All Done...");
    return;
  }
  // solution
  console.log(num);
  num--;

  // calling the same solution but smaller piece of input
  countNum(num);
}

countNum(10);

function sumRange(n) {
  // base case or stopping condition
  if (n == 1) return 1;

  // here the solution for single call or small peice  is n + n-1, ie: 3+ 3-1 => 3 + 2
  // ultimately we will call theis until we meet the base or stopping condition
  return n + sumRange(n - 1);
}

console.log("\nsum range from 1 to 3 is", sumRange(3));

/*

* Dry Run for sumRange(3)
Step	Function Call	Stack State 	Return Value
  1  	sumRange(3)	        sumRange(3)	    3 + sumRange(2)
  2 	sumRange(2)	        sumRange(2)	    2 + sumRange(1)
  3	    sumRange(1)	        sumRange(1)	    1 (Base case reached)
  4	    Returning 1	        sumRange(2) 	2 + 1 = 3
  5 	Returning 3	        sumRange(3)	    3 + 3 = 6
  6	    Returning 6	        (Stack Empty)	Final Output: 6

 */

function factorial(n) {
  // base case or stopping case
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log("\nfactorial of 5 is ", factorial(5));

/*
 * Dry Run for factorial(5)
 Step   Function Call    Stack State       Return Value
  1     factorial(5)     factorial(5)      5 * factorial(4)
  2     factorial(4)     factorial(4)      4 * factorial(3)
  3     factorial(3)     factorial(3)      3 * factorial(2)
  4     factorial(2)     factorial(2)      2 * factorial(1)
  5     factorial(1)     factorial(1)      1 (Base case reached)
  6     Returning 1      factorial(2)      2 * 1 = 2
  7     Returning 2      factorial(3)      3 * 2 = 6
  8     Returning 6      factorial(4)      4 * 6 = 24
  9     Returning 24     factorial(5)      5 * 24 = 120
 10     Returning 120    (Stack Empty)     Final Output: 120

 */

/**
 
 factorial(5) -> Calls factorial(4)
  factorial(4) -> Calls factorial(3)
    factorial(3) -> Calls factorial(2)
      factorial(2) -> Calls factorial(1)
        factorial(1) -> Base case reached, returns 1
      factorial(2) <- Returns 2 * 1 = 2
    factorial(3) <- Returns 3 * 2 = 6
  factorial(4) <- Returns 4 * 6 = 24
factorial(5) <- Returns 5 * 24 = 120


 */
