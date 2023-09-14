function truncateString(str, n) {
  const arr = str.slice(0, n);
  return `${arr}...`;
}
console.log(truncateString("hello allll", 8));
