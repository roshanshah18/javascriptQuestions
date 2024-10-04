// Declare two variables and swap their values without using a third variable.

function swap(a, b) {
  a = a + b;

  b = a - b;
  console.log("b=", b);

  a = a - b;
  console.log("a=", a);
}
let a = 5,
  b = 6;
swap(a, b);
