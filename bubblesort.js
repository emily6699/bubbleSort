const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; //destructuring is more readable then assisn arr[i] to temp.
      }
    }
  }
  return arr;
};

console.log(bubbleSort([8, 4, 6, 1]));
console.log(bubbleSort(["a", "z", "g", "c"]));
