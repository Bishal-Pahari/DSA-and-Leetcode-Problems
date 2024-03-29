// --- Directions
// Write a fn that accepts a +ve number N.
// The fn should console log a pyramid shape
// with N levels using the # character.Make sure
// the pyramid has spaces on both the
// left * and * right hand sidees
// --- Examples
// pyramid(3)
//          "#"
//         "###"
//        "#####"

const pyramid = (num) => {
  const mid = Math.floor((2 * num - 1) / 2);
  for (let row = 0; row < num; row++) {
    let line = "";
    for (let col = 0; col < 2 * num - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

console.log(pyramid(90));
