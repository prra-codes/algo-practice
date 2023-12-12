// Day 1, Mon, 11/12/23

// 1. Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input

// array = [3, 5, -4, 8, 11, 1, -1, 6]

// targetSum = 10

// Sample Output

// [-1, 11] // the numbers could be in reverse order

function twoNumberSum(arr, targetSum) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

// Time Complexity: O(N^2), we use two for loope
// Space Complexity: O(1), since we are not storing anything

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

function twoNumberSumTwo(arr, targetSum) {
  const nums = {};

  for (const num of arr) {
    let potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

// Time Complexity: O(n), loop through the array once, access nums in constant time
// Space Complexity; O(n), store the numbers in nums object

// console.log(twoNumberSumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10));
