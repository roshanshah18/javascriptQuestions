// Create a function that takes a string and returns the number of vowels.

function vowels(words) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (vowel.includes(words[i])) {
      count++;
    }
  }
  console.log(count);
}
const words = "Roshan Shah".toLowerCase().split("");
vowels(words);
