console.log(4 * 4); // 4*4;
console.log(4 ** 4); // 4*4*4*4;

// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiplyNums(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

const myNumsMultiplyResult = multiplyNums(3, 5, 2, 8);
console.log(myNumsMultiplyResult);

/*************************************************/
// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function divisionOrMultiply(num) {
  if (num % 2 === 0) {
    return num / 2;
  }
  return num * 2;
}

console.log(divisionOrMultiply(56));
/*************************************************/
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum / arr.length;
}

console.log(make_avg([5, 5, 5, 5, 5]));
/*************************************************/
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
const count_zero = function (str) {
  let totalZero = 0;
  for (letter of str) {
    if (letter === "0") {
      totalZero++;
    }
  }
  return totalZero;
};
console.log(count_zero("00010110101010100101010"));

/*************************************************/
// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

const odd_even = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(odd_even(4));
console.log(odd_even(5));
