// 4*3*2*1
// 4 * 3!
//      3 * 2!
//          2 * 1!
//              1

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(2));

// ------------------------------------------------------
// with memoization
let memo = {};

function factorial(n) {
  if (n === 1) {
    return n;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = n * factorial(n - 1);
  return memo[n];
}

console.log(factorial(5));
