// soln 1
// function reverseInt(num) {
//   const reversed = num.toString().split("").reverse().join("");
//  parseInt stop when it finds first non numeric character
//   return parseInt(reversed) * Math.sign(num);
// }

// soln 2
function reverseInt(num) {
  let reversed = "";
  let tempNumHolder = num.toString();
  for (char of tempNumHolder) {
    reversed = char + reversed;
  }
  return parseInt(reversed) * Math.sign(num);
}

console.log(reverseInt(-123));
