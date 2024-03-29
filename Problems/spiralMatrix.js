// --- Directions
// Write a fn that accepts an integer N
// and return a NxN spiral matrix
// --- Example
// matrix (2)
//  [[1,2],
//  [4,3]]
// matrix (3)
//  [[1,2,3],
//  [8,9,4]
//  [7,6,5]]

const spiralMatrix = (n) => {
  const result = [];
  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
};

console.log(spiralMatrix(5));
