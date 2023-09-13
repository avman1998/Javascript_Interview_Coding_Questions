// import revString from "./reverseString";
const revString = require("./reverseString");
function checkPalindrome(str) {
  if (str === revString(str)) return true;
  else return false;
}
console.log(checkPalindrome("NAMA"));
