const pascalTriangle = (numRows) => {
  let res = [];
  if (numRows === 0) return res;

  res.push([1]);
  for (let i = 1; i < numRows; i++) {
    let list = [];
    list.push(1);
    for (let j = 1; j < res[i - 1].length; j++) {
      let sum = res[i - 1][j - 1] + res[i - 1][j];
      list.push(sum);
    }
    list.push(1);
    res.push([...list]);
  }
  return res;
};

console.log(pascalTriangle(5));
