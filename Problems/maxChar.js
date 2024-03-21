// Given a srting, return the character that occur
// most commonly in the string

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    // loop through array and string then use of
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  for (let key in charMap) {
    // loop through object then use in
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("aabccccdddddddd"));
