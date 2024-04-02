function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    // using var instead if let, becasue using let only lets you use
    // inside the for loop
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

let a = [1, 5, 3, 7, 2];
console.log(insertionSort(a));
