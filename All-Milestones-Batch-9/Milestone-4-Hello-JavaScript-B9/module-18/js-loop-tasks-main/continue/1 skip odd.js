/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i = 0;
while (i <= 40) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
  continue;
}
