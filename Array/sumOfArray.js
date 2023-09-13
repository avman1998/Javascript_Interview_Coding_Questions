function sumOfArray(arr) {
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7]));
