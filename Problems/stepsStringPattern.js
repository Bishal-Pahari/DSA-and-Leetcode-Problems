// --- Directions
// WAP that accepts a + ve number N.
// The fn should console log a step Shape
// with N levels using the # character.Make sure the
// step has spaces on the right hand side!
// --- Examples
// steps(2)
// '#'
// '##'

// method 1
// const steps = (n) => {
//   let times = 1;

//   for (let row = 1; row <= n; row++) {
//     let line = "";
//     if (times <= n) {
//       for (let col = 1; col <= times; col++) {
//         line += "#";
//       }
//     }
//     console.log(line);
//     times++;
//   }
//   return "";
// };

// const result = steps(3);
// console.log(result);

// method 2
const steps = (n) => {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      // If the current column is less than or equal to the current row,
      // append a '#' character. Otherwise, append a space.
      if (col <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

steps(16);
