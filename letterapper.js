// Create a program that counts how many times a specific letter appears in a string.

function appears(string) {
  let count = 0;
  const letter = "o".toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}
const string = "Hello".toLowerCase();
const result = appears(string);
console.log(result);
