const h1 = document.querySelector("h1");
let toggle = true;
h1.addEventListener("click", function () {
  if (toggle) {
    h1.textContent = Date();
    toggle = false;
  } else {
    h1.textContent = "Hello World!";
    toggle = true;
  }
});

console.log("Hello 1");
setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}, 0); // this function will execute after every synchronous code execution.( No metter the time is out or not)
for (let i = 0; i < 100000; i++) {
  console.log(i);
}
for (let i = 0; i < 100; i++) {
  console.log("i am 3");
}

console.log("Hello 3");

const myItem = "Hello World!";
function example(callback) {
  callback();
}

function displayItem(item) {
  console.log(item);
}

example(function () {
  displayItem(myItem);
});
