const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);

/************************************************************/
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);
/************************************************************/
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student.physics.marks);
/************************************************************/
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

let numberOfProperties = 0;
for (const key in student2) {
  if (student2.hasOwnProperty(key)) {
    numberOfProperties++;
  }
}
console.log(numberOfProperties);
console.log(student2.hasOwnProperty("age"));

// way----2
const numberOfProperties2 = Object.keys(student2);
console.log(numberOfProperties2);
console.log(numberOfProperties2.length);

/************************************************************/
// Loop through an object and print the key-value pairs with their types ->
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const key in myObject) {
  console.log(key, ":", myObject[key], "|", "type:", typeof myObject[key]);
}
// with normal for loop
let keys = Object.keys(myObject);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, ":", myObject[key], "|", "type:", typeof myObject[key]);
}
