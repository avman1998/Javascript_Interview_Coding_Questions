function checkAnagram(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const flag = true;
  console.log(arr1, arr2);
  if (arr1.length === arr2.length) {
    console.log(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
      if (!arr1.includes(arr2[i])) {
        return false;
      }
    }
    return true;
  } else return false;
}
console.log(checkAnagram("POST", "STOP"));
