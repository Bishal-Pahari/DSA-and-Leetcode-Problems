function isValid(s) {
  const stack = [];
  const bracketMap = { "{": "}", "(": ")", "[": "]" };

  for (char of s) {
    if (char in bracketMap) {
      stack.push(char);
    } else {
      let tos = stack.pop();
      if (!tos || bracketMap[tos] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("(){}()([])"));
