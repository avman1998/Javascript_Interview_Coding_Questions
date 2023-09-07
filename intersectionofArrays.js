function removeDuplicate(arr) {
  const newArray = [],
    hash = {};
  arr.forEach((item) => {
    if (hash[item] === undefined) {
      newArray.push(item);
    }
    hash[item] = item;
  });
  return newArray;
}
function intersection(arr1, arr2) {
  return removeDuplicate([...arr1, ...arr2]);
}
console.log(
  intersection([1, 2, 3, 122, 4, 6, 12, 3, 4, 1], [1, 2, 5, 31, 8, 122, 7])
);
