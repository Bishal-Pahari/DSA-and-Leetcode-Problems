// --- Directions
// Check to see if two provided strings are anagrams of eachOther.
// One string is an anagram if it uses the same characters
// in the same quantitty. On consider characters, not spaces
// or punctuations. Consider capital Letters to be the same as lower case
// --- Examples
// anagrams("Hi there", "Bye there") ---> falase
// anagrams("RAIL! SAFETY!", "fairy tales") ---> true

const anagrams = (strA, strB) => {
  const charMapA = new Map();
  const charMapB = new Map();

  strA = strA.toLowerCase().replace(/\W/g, "");
  strB = strB.toLowerCase().replace(/\W/g, "");

  //for first string
  for (let char of strA) {
    if (charMapA.has(char)) {
      let count = charMapA.get(char);
      charMapA.set(char, count + 1);
    } else {
      charMapA.set(char, 1);
    }
  }

  //for second string
  for (let char of strB) {
    if (charMapB.has(char)) {
      let count = charMapB.get(char);
      charMapB.set(char, count + 1);
    } else {
      charMapB.set(char, 1);
    }
  }

  for (let [char] of charMapA) {
    if (charMapB.get(char) !== charMapA.get(char)) {
      return false;
    }
  }
  return true;
};

console.log(anagrams("xyz!", "xyz"));
