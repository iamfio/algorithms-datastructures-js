const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let count = 0;

// O(n)
function linearSearch(arr, item) {
  for (let i = 0; i <= arr.length; i++) {
    count += 1;

    if (arr[i] === item) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(arr, 4));
console.log("Count:", count);
