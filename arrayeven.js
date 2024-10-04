// Create an array of numbers and print only the even numbers.

function arraynumber(array) {
  let evenarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
    }
    if (array[i] % 2 === 0) {
      evenarray.push(array[i]);
    }
  }
  const finalarray = evenarray.pop();
  return evenarray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
const result = arraynumber(array);
console.log(result);
