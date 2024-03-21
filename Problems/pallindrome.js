// function pallindromeChecker(strOrNum) {
//   let reversed = str.toString().split("").reverse().join("");
//   if (str == reversed) {
//     return true;
//   }
//   return false;
// }

// console.log(pallindromeChecker("mom"));

// using twoPointer technique

function pallindromeChecker(strOrNum) {
  let str = strOrNum.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      return true;
    }
    right--;
    left++;
  }
  return false;
}

console.log(pallindromeChecker(12321));
