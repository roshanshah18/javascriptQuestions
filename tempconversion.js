// Write a function to convert Celsius to Fahrenheit.

// F = (C * 9) / 5 + 32;
// C = ((F - 32) * 5) / 9
function conversion(C) {
  let F;
  F = (C * 9) / 5 + 32;
  return F;
}
const C = 37;
const result = conversion(C);
console.log(result);
