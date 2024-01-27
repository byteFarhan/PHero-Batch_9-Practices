/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 65;
const heightInch = 66;
const heightMeter = heightInch * 0.0254;
// const heightMeter = 1.6764;
// console.log(heightMeter);
// BMI_Inch
const BMI_Inch = (weight / heightInch ** 2) * 703;
console.log(BMI_Inch);
// BMI_Meter
const BMI_Meter = weight / heightMeter ** 2;
console.log(BMI_Meter);

if (BMI_Inch < 18.5 || BMI_Meter < 18.5) {
  console.log("You are underweight.");
} else if (
  (BMI_Inch >= 18.5 && BMI_Inch <= 24.9) ||
  (BMI_Meter >= 18.5 && BMI_Meter <= 24.9)
) {
  console.log("You are Normal.");
} else if (
  (BMI_Inch >= 25 && BMI_Inch <= 29.9) ||
  (BMI_Meter >= 25 && BMI_Meter <= 29.9)
) {
  console.log("You are overweight.");
}

/////////////////////////
// with  ternary operator
const healthCondition =
  BMI_Meter < 18.5
    ? "underwaight"
    : BMI_Meter >= 18.5 && BMI_Meter <= 24.9
    ? "normal"
    : BMI_Meter >= 25 && BMI_Meter <= 29.9
    ? "over Whight"
    : "";
console.log(healthCondition);
// chatGPT code
const result =
  BMI_Inch < 18.5 || BMI_Meter < 18.5
    ? "You are underweight."
    : (BMI_Inch >= 18.5 && BMI_Inch <= 24.9) ||
      (BMI_Meter >= 18.5 && BMI_Meter <= 24.9)
    ? "You are Normal."
    : (BMI_Inch >= 25 && BMI_Inch <= 29.9) ||
      (BMI_Meter >= 25 && BMI_Meter <= 29.9)
    ? "You are overweight."
    : "BMI out of range";

console.log(result);
