const arr = [56, 2, 3, 4, 5, 6, 7];
const compare = (a, b) => b - a;
// console.log(arr.sort(compare));

const arr2 = [
  {
    id: 1,
    items: ["bread", "mango", "Juice"],
  },
  {
    id: 2,
    items: ["bread", "Juice"],
  },
  {
    id: 3,
    items: ["bread"],
  },
];
const compare2 = (a, b) => {
  return a.items.length - b.items.length;
};
// console.log(arr2.sort(compare2));

const arr3 = [1, 2, 3, 4, "ba", "lo", "red", 80, 56];
const isNumeric = (number) => !isNaN(number);

function compare3(a, b) {
  if (isNumeric(a) && isNumeric(b)) return a - b;
  if (isNumeric(a) && !isNumeric(b)) return -1;
  if (!isNumeric(a) && isNumeric(b)) return 1;
  return a > b ? 1 : -1;
}

console.log(arr3.sort(compare3));
