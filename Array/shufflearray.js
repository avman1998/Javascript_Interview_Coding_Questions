// console.log(Math.floor(Math.random() * 6));
function shuffleArr(arr) {
  const shuffledArr = [];
  const hash = {};
  while (shuffledArr.length !== arr.length) {
    const rn = Math.floor(Math.random() * arr.length);
    if (hash[rn] === undefined) {
      shuffledArr.push(arr[rn]);
    }
    hash[rn] = rn;
  }
  return shuffledArr;
}
console.log(shuffleArr([2, 3, 5, 1, 2, 8, 9, 5]));
