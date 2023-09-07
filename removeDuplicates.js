const arr = [1, 2, 6, 2, 3, 4, 12, 3, 51, 1, 2, 6, 2, 3, 4, 12, 3, 51];
function removeDuplicates(arr) {
  const newArr = [],
    hash = {};

  arr.forEach((item) => {
    if (hash[item] === undefined) {
      newArr.push(item);
    }
    hash[item] = item;
  });
  return newArr;
}

function removeDuplicatesWithSet(arr) {
  const newArr = new Set(arr);
  return [...newArr];
}
console.log(removeDuplicates(arr));
console.log(removeDuplicatesWithSet(arr));
