// const a = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
// let incrementPlusPlus = 0;
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(++a);

// const incrementPlusPlus = function () {};

function incrementPlusPlus() {
  //   console.log("object");
  document.getElementById("increment++").innerText = a++;
}
function plusPlusIncrement() {
  document.getElementById("++increment").innerText = ++b;
}
// increment();
function decrementMinusMinus() {
  document.getElementById("decrement--").innerText = c--;
}
function minusMinusDecrement() {
  document.getElementById("--decrement").innerText = --d;
}

// increment++
// ++increment
// decrement--
// --decrement

var x = 40;

function foo() {
  console.log(x);
  var x = 10;
}
foo();

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

const fruits = ["apple", "kiwi", "orange", "lemon"];
// fruits.splice(2, 0, "mango", "banana");
// fruits.splice(2, 0, ["mango", "banana"]);
const arr = ["mango", "banana"];
const removeFruits = fruits.splice(2, 0, ...arr);
console.log(fruits);
console.log(removeFruits);

// fruits.splice(2, 3);
// console.log(fruits);
console.log(fruits.slice(1));
console.log(fruits.slice(1, 4));
// console.log(fruits);

const ascendingSort = fruits.sort();
console.log(ascendingSort);
const descendingSort = ascendingSort.reverse();
console.log(descendingSort);

const numbers = [40, 100, 25, 22, 14, 31, 65, 234];
const numbersAscending = numbers.sort((a, b) => a - b);
console.log(numbersAscending);

const numberDescending = numbers.sort((a, b) => b - a);
console.log(numberDescending);

const num = -10;
if (num) {
  console.log("num is true");
}

const testMap = numbers.map((value, index, array) => {
  // console.log(value);
  // console.log(index);
  // console.log(array);
  // console.log("------------");
  /*********************************/
  // return function () {
  //   console.log(value);
  //   console.log(index);
  //   console.log(array);
  //   console.log("------------");
  //   return value * 4;
  // };
  return value * index * array.length;
});
console.log(testMap);
const testMapSort = testMap.sort((a, b) => a - b);
console.log(testMapSort);
