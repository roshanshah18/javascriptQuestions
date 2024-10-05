// Write a program to print the multiplication table of a given number.

function multiplication(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`multiplication of ${num}*${[i]}:`, num * [i]);
  }
}
const num = 2;
multiplication(num);
