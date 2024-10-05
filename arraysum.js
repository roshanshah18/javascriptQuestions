// Write a program to sum all the elements of an array.

function arraysum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arraysum(array));
