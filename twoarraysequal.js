// Write a function to check if two arrays are equal.
function equalarray() {
  const firstarray = [1, 2, 3, 4, 5, 9, 8];
  const secondarray = [5, 4, 3, 2, 1, 9];
  const FL = firstarray.length;
  const SL = secondarray.length;
  if (FL != SL) {
    console.log("Not Equal");
  }
  firstarray.sort();
  console.log(firstarray);
  secondarray.sort();
  console.log(secondarray);
  for (let i = 0; i < FL; i++) {
    if (firstarray[i] != secondarray[i]) {
      console.log(" Not Equal");
      return;
    }
  }
  console.log("Equal");
}
equalarray();
