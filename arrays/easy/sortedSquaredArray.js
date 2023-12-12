// still Day 2, Tue, 12/12/23

// 3. Sorted Squared Array

// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the riginal integers also sorted in ascending order.

// Sample Input

// array = [1, 2, 3, 5, 6, 8, 9]

// [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(arr) {
  let squaredArr = arr.map((x) => x * x);
  squaredArr.sort((a, b) => a - b);

  return squaredArr;
}

// console.log(sortedSquaredArray([2, 1, 3, 5, 6, 8, 9]));

// Time: nlog(n), because we need to sort our output array. The best we can do when sorting arrays is a complexity of nlog(n)
// Space: O(n), since we need to generate a new array, which is the length of the input array of length n

function sortedSquaredArrayTwo(arr) {
  const squaredArr = [];

  let arrOne = 0;
  let arrTwo = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let valueOne = arr[arrOne];
    let valueTwo = arr[arrTwo];

    if (Math.abs(valueOne) > Math.abs(valueTwo)) {
      squaredArr[i] = valueOne * valueOne;
      arrOne++;
    } else {
      squaredArr[i] = valueTwo * valueTwo;
      arrTwo--;
    }
  }

  return squaredArr;
}

console.log(sortedSquaredArrayTwo([1, 2, 3, 5, 6, 8, 9]));

// More optimal solution. Can do this method because it is in ascending order

// Time O(n), we only do one pass of it
// Space O(n), we need to create a brand new array to store our sorted values (the squares)
