const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];

let count = 0;

// O(log2n * n)
function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);

  count += 1;

  if (item === array[middle]) {
    return middle;
  }

  if (array.indexOf(item) < 0) {
    return array;
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(arr, 12, 0, arr.length));
console.log("Count:", count);
