// Write a JavaScript program to capitalize the first letter of each word in a sentence.

function capitalize(sentence) {
  const array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1);
  }
  console.log(array.join(" "));
}

const sentence = "my name is roshan shah";
capitalize(sentence);
