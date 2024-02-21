// task -> 1 Count how many times a string has the letter a

const str = "abcdefghafgaca";
// with normal loop
let letterCount = 0;
for (let i = 0; i < str.length; i++) {
  const letter = str[i];
  console.log(letter);
  if (letter === "a") {
    letterCount++;
  }
}
console.log(letterCount);

// with for of loop
let letterCount2 = 0;
for (const letter of str) {
  console.log(letter);
  if (letter === "a") {
    letterCount2++;
  }
}
console.log(letterCount2);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const strTask3 = "a quick brown fox jumps over the lazy dog";
if (
  strTask3.includes("a") &&
  strTask3.includes("e") &&
  strTask3.includes("i") &&
  strTask3.includes("o") &&
  strTask3.includes("u")
) {
  console.log(true);
} else {
  console.log(false);
}
// if (strTask3.includes("aeiou")) {
//   console.log(true);
// } else {
//   console.log(false);
// } this will not work

// for (let i = 0; i < strTask3.length; i++) {
//   const letter = strTask3[i];
//   // if(letter)
// }

const num = 56;
console.log(Number.isInteger(num));

const strt = "number";
console.log(strt.split(""));
