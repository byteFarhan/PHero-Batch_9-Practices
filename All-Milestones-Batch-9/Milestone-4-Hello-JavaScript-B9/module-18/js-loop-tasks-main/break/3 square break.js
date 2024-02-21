/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   if (Math.sqrt(i) % 1 === 0) {
//     console.log("The sqrt number is ", i);
//     break;
//   }
//   i++;
// }
let i = 1;
while (i <= 100) {
  console.log(i);
  if (Math.sqrt(i) === parseInt(Math.sqrt(i)) && i !== 1) {
    console.log("The first sqrt number is ", i);
    break;
  }
  i++;
}

// let i = 1;
// while (i <= 100) {
//   console.log(i);

//   // Check for perfect squares by comparing decimals instead of converting:
//   if (Math.floor(Math.sqrt(i)) === Math.sqrt(i)) {
//     console.log("The sqrt number is ", i);
//     break;
//   }

//   i++;
// }

// console.log(Math.sqrt(5));
// console.log(Math.sqrt(1));
