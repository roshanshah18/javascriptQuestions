// Create a function that takes an array of numbers and returns the largest number.

function largestnum(array) {
  let largestnumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largestnumber) {
      largestnumber = array[i];
    }
  }
  return largestnumber;
}
const array = [1, 2, 3, 4, 10, 30, 14, 0];
console.log(largestnum(array));
