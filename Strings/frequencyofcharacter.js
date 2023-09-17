function frequencyOfChars(str) {
  const arr = str.split("");
  let updatedString = "";
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      updatedString += `${arr[i]}${count}`;
      count = 1;
    }
  }
  return updatedString;
}
console.log(frequencyOfChars("geeeeekkkkkkrrrrrrr234"));
