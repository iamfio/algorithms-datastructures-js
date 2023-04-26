const array = [
  9, 0, 123, 98, 82, 73, 7, 13, 75, 17, 54, 45, -1, -73, 41, 34, 8,
];

let count = 0;

// O(n^2)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array;
}

console.log(selectionSort(array));
console.log("Count:", count);
