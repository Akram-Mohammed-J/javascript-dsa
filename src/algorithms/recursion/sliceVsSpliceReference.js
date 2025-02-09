/*
 * JavaScript slice() vs splice()
 *
 * Both are array methods but have key differences:
 *
 * 1. slice(start, end)
 *    - Returns a shallow copy of the array from index `start` to `end - 1`
 *    - Does NOT modify the original array
 *    - If `end` is omitted, slices till the end of the array
 *    - Supports negative indices (counting from the end)
 *
 * 2. splice(start, deleteCount, ...items)
 *    - Modifies the original array
 *    - Removes `deleteCount` elements starting from `start`
 *    - Optionally inserts new `items` in place of removed elements
 *    - Returns an array containing the removed elements
 */

// ===== slice() Example =====
let arr1 = [1, 2, 3, 4, 5];

// Extracting elements from index 1 to 3 (excluding index 3)
let slicedArr = arr1.slice(1, 3);
console.log("Original array after slice:", arr1); // [1, 2, 3, 4, 5]
console.log("Sliced portion:", slicedArr); // [2, 3]

// Negative index example (starts from the end)
let negativeSlice = arr1.slice(-3, -1);
console.log("Sliced portion with negative index:", negativeSlice); // [3, 4]

// ===== splice() Example =====
let arr2 = [1, 2, 3, 4, 5];

// Removing 2 elements starting from index 1
let removedElements = arr2.splice(1, 2);
console.log("Original array after splice:", arr2); // [1, 4, 5]
console.log("Removed elements:", removedElements); // [2, 3]

// Inserting elements using splice()
let arr3 = [1, 4, 5];
arr3.splice(1, 0, 2, 3); // Insert 2 and 3 at index 1
console.log("Original array after insertion:", arr3); // [1, 2, 3, 4, 5]

// Replacing elements using splice()
let arr4 = [1, 2, 3, 4, 5];
let replacedElements = arr4.splice(2, 2, 9, 10); // Replace 3 and 4 with 9 and 10
console.log("Original array after replacement:", arr4); // [1, 2, 9, 10, 5]
console.log("Replaced elements:", replacedElements); // [3, 4]

/*
 * Summary:
 * - Use slice() when you need a copy of a portion of an array without modifying the original.
 * - Use splice() when you need to remove, insert, or replace elements in the original array.
 * - splice() returns an array containing the removed elements.
 */
