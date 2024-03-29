// --Directions
// Write a Fn that accepts a string. The fn should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --Examples
// capitalize("this is bishal") --> "This Is Bishal"
// capitalize("what is titlecase?") --> "What Is Capitalize?"
// const capitalize = (string) => {};

// console.log(capitalize("what is titlecase?"));

const capitalize = (str) => {
  const words = str.split(" ");
  const result = [];
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
};

console.log(capitalize("what is titlecase?"));
