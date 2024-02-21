const date = new Date();
console.log(date);

let arr = [5, 6, 7, 8, 9];
console.log(arr);
const arr2 = arr;
console.log(arr2);

arr2.push(10);
console.log(arr);
console.log(arr2);

arr.unshift(4);
console.log(arr);
console.log(arr2);

arr = "Farhan";
console.log(arr);
console.log(arr2);

/**
 * Generate a random number between 10 to 20
 */

const generateNum = () => {
  const randomNum = parseInt(Math.random() * (10 + 1)) + 10;
  // console.log(randomNum);
  return randomNum;
};
// function generateNumm() {}
generateNum();

/**
 * Generate a random number between two random numbers which will given as function parameter.
 */
const generateRandomNum = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  //   console.log(randomNum);
  return randomNum;
};

generateRandomNum(30, 50);

const arrOfNums = [];
for (; arrOfNums.length <= 1; ) {
  const num = generateRandomNum(30, 50);
  if (num === 30) {
    arrOfNums.push(num);
  }
}
console.log(arrOfNums);
