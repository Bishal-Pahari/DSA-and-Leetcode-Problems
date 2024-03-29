// --- Directions
// Given an array and chunk size, divide the array into many sub arrays
// where each subarray is of length size
// --- Example
// chunk([1,2,3,4],2) --> [[1,2,],[3,4]]
// chunk([1,2,3,4,5],3) --> [[1,2],[3,4],[5]]

const chunkArray = (array, size) => {
  let result = [];
  let initial = 0;
  let chunk = [];

  if (array.length < size) {
    return undefined;
  }
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    chunk = array.slice(initial, initial + size);
    initial = initial + size;
    result.push(chunk);
  }
  return result;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
