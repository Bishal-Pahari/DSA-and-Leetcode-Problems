// ---Directions
// Write a fn that returns the number of vowels
// used in string. Vowels are the charaters 'a','e','i','o','u'
// ---Examples
// vowels("sup people") ---> 4
// vowels("why?") ---> 0

// method 1
// const vowels = (str) => {
//   let charMap = new Map();
//   str = str.toLowerCase();
//   for (char of str) {
//     if (charMap.has(char)) {
//       let counter = charMap.get(char);
//       charMap.set(char, counter + 1);
//     } else {
//       charMap.set(char, 1);
//     }
//   }

//   let vowelCounter = 0;
//   for (let [char, value] of charMap) {
//     let temp = charMap.get(char);
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowelCounter += value;
//     }
//   }

//   if (!vowelCounter) return false;
//   return `Total vowel found is ${vowelCounter}`;
// };

// console.log(vowels("aiupuA"));

// method 2
const vowels = (str) => {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  str = str.toLowerCase();

  let vowelCount = 0;
  for (char of str) {
    if (vowelsSet.has(char)) {
      vowelCount++;
    }
  }

  if (!vowelCount) return false;
  return `No of Vowel found : ${vowelCount}`;
};

console.log(vowels("aiupuA"));
