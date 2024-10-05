// Write a program to merge two arrays and remove duplicate elements.

function merge() {
  const firstarray = [1, 2, 3, 4, 5, 3, 4];
  const secondarray = [6, 7, 8, 9, 0, 1, 3, 4];
  mergearray = [...firstarray, ...secondarray];
  result = new Set(mergearray);
  console.log(result);
}
merge();
