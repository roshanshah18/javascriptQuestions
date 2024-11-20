// Write a function to check if a string is a palindrome.

function palindrome(string) {
  const finalarray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    finalarray.push(string[i]);
  }
  if (finalarray.join("") === string.join("")) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}
const string = "tat".toLowerCase().split("");
palindrome(string);

// function palindrome(string) {
//   const newstring = string.toReversed();
//   if (newstring.join("") === string.join("")) {
//     console.log("It is a palindrome");
//   } else {
//     console.log("It is not a palindrome");
//   }
// }
// const string = "tat".toLowerCase().split("");
// palindrome(string);
