function reverse(str) {
  let reversed = "";
  // soln1
  //   for (let i = 0; i < str.length; i++) {
  //     reversed = str[i] + reversed;
  //   }

  // soln2
  //   for (char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;

  // soln3
  return str.split("").reverse().join("");
}

console.log(reverse("Nepal"));
