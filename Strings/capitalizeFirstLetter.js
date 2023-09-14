function capitalizeFirstLetter(sentence) {
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  return arr.join(" ");
}
console.log(capitalizeFirstLetter("SRK is the best actor"));
