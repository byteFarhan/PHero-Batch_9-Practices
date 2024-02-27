// always use ===
// equal comparison doesnt work for non-primitive

const first = [45, 54, 98];
const second = [45, 54, 98];
if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// type coercion
// type conversion
// type casting

// how to  compare two array or object in js
const arr = [];
const arr2 = [];
const arr3 = arr2;
console.log(arr === arr2);
console.log(arr3 === arr2);
