/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const score = 98;
if (score <= 59) {
  console.log("Grade: F");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: c");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else {
  console.log("This is not a valid score!");
}

// with  ternary operator
const grade =
  score <= 59
    ? "Grade: F"
    : score >= 60 && score <= 69
    ? "Grade: D"
    : score >= 70 && score <= 79
    ? "Grade: C"
    : score >= 80 && score <= 89
    ? "Grade: B"
    : score >= 90 && score <= 100
    ? "Grade: A"
    : "This is not a valid score!";

console.log(grade);
