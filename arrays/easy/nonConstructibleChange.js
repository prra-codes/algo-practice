// Day 4, Mon, 18/12/23

// 5. Non-Constructible Change

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input

// coins = [5, 7, 1, 1, 2, 3, 22]

// Sample Output

// 20

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let constructibleChange = 0;

  for (const coin of coins) {
    if (coin > constructibleChange + 1) {
      return constructibleChange + 1;
    }

    constructibleChange += coin;
  }

  return constructibleChange + 1;
}

// Time Complexity: O(nlog(n)), since we're sorting the array
// Space Complexity: O(1) not storing anything extra since we sort the array in place

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
