// Comparing two arrays using JSON.stringify
function checkPalindrome(arr) {
  if (JSON.stringify(reversedArr(arr)) === JSON.stringify(arr)) return true;
  else return false;
}

function reversedArr(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(checkPalindrome([1, 1, 1, 2]));
