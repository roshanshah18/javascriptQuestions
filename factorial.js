// Write a program to calculate the factorial of a number.

function factorial(num) {
  let fact;
  if (num === 1 || num === 0) {
    return 1;
  } else {
    fact = num * factorial(num - 1);
  }
  return fact;
}
let num = 4;
console.log(factorial(num));
