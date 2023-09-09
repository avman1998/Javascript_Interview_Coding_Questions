function rotateArrayByRight(arr, n) {
  let i = arr.length - n;
  let j = i - 1;
  const arr2 = [];
  while (arr.length !== arr2.length) {
    arr2.push(arr[i]);
    if (i < arr.length - 1 && i !== j) i++;
    else {
      i = 0;
    }
  }
  arr = [...arr2];
  return arr;
}

console.log(rotateArrayByRight([8, 9, 31, 3, 4, 1], 4));
