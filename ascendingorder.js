// Create a program to sort an array of numbers in ascending order.
function ascending(array) {
  console.log(
    array.sort((a, b) => {
      return a - b;
      //descending b-a
    })
  );
}
const array = [10, 30, 50, 0, -1, -2, -6, 100, 400];
ascending(array);
