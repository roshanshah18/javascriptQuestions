// let n = 5; // Number of rows
// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 5; j >= i; j--) {
    pattern += "* ";
  }
  console.log(pattern);
}

// let Name = "Roshan".split("");
// let pattern = "";
// for (let i = 0; i < Name.length; i++) {
//   pattern += Name[i];
//   console.log(pattern);
// }

// let Name = "Roshan";
// for (let i = 1; i <= Name.length; i++) {
//   console.log(Name.slice(0, i));
// }
