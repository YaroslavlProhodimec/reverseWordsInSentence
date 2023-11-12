let str = "Let's take LeetCode context";
const reverseWord = (input) => {
  let newArr = input.split(" ");
  let result = [];
  for (let R = 0; R < newArr.length; R++) {
    let word = newArr[R];
    let newStr = "";
    for (let C = word.length - 1; C >= 0; C--) {
      let rev = newArr[R][C];
      newStr += rev;
    }
    result[R] = newStr;
  }
  return result.join(" ");
};
console.log(reverseWord(str));
