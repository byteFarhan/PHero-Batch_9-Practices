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
