function maxSum(arr) {
  let currentSum = 0,
    maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(maxSum([-1, 2, 4, -1, -2, 8, 4, 1]));
