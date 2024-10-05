// Write a function to reverse a given string.

function reversestring(string) {
  let finalarray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    finalarray.push(string[i]);
  }
  return finalarray.join("");
}
let string = "Roshan".split("");
console.log(reversestring(string));

// function reverse() {
//   const Name = "Roshan".split("");
//   let firstresult = Name.reverse();
//   console.log(firstresult);
// }
// reverse();
