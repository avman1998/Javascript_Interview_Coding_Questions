function revString(str) {
  const strArr = str.split("");
  const revArr = strArr.reverse();
  const revStr = revArr.join("");
  return revStr;
}

module.exports = revString;
