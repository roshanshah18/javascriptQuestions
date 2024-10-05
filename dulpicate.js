// Write a function to remove duplicates from an array.

function duplicate(array) {
  const result = new Set(array);
  console.log(result);
}

const array = [1, 2, 3, 4, 4, 5, 6, 7];
duplicate(array);
