/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0,
  num = 1;
while (num > 0) {
  sum += num;
  num++;
  console.log(sum);
  if (sum >= 100) {
    break;
  }
}
console.log(sum);
