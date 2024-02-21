// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];

const revColors = [];
for (const color of colors) {
  console.log(color);
  revColors.unshift(color);
}
console.log(revColors);

// using normal for loop
const revColors2 = [];
for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  revColors2.unshift(color);
}
console.log(revColors2);

// using for loop in reverse way
const revColors3 = [];
for (let i = colors.length - 1; i >= 0; i--) {
  const color = colors[i];
  console.log(color);
  revColors3.push(color);
}
console.log(revColors3);

/*****************************************************/
// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenArr = [];
for (const num of numbers) {
  console.log(num);
  if (num % 2 === 0) evenArr.push(num);
}
console.log(evenArr);
/*****************************************************/
// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
const strings = ["Tom", "Tim", "Tin", "Tik"];
let fullStr = "";
for (const str of strings) {
  //   console.log(str);
  fullStr += str;
}
console.log("Task -#3 Output:->", fullStr);

/*****************************************************/
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = "I am a hard working person";
const splitStatement = statement.split(" ");
console.log(splitStatement);
// const revSplitStatement = splitStatement.reverse();
const revSplitStatement = [];
// for (const word of splitStatement) {
//   revSplitStatement.unshift(word);
// }
for (let i = splitStatement.length - 1; i >= 0; i--) {
  revSplitStatement.push(splitStatement[i]);
}
console.log(revSplitStatement);
const result = revSplitStatement.join(" ");
console.log("Task -#4 Output:->", result);

/*****************************************************/
console.log(Infinity);
console.log(typeof Infinity);
