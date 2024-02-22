const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values)

const entries = Object.entries(glass);
// console.log(entries);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete glass.isCleaned;

const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass);

const employee = {
  name: "Jhon Doe",
  position: "Manager",
  salary: 30000,
  posting: "Dhaka",
  experience: "2 Years",
};
console.log(employee);
// const { position, posting, ...employeeRest } = employee;
const { position, posting, address, ...employeeRest } = employee;
console.log(employeeRest);
console.log(position);
console.log(address);

const arr = [1, 2, 3, 4, 5, 6];
// const [1,2,...restArr] = arr // this will through an error because you can't declear/ start variables name wiht number
// const [fristEle, secondEle, ...restArr] = arr; // this will work perfectly
const [fristEle, secondEle, , trdEle, ...restArr] = arr;
console.log(fristEle); // 1
console.log(secondEle); // 2
console.log(trdEle); // 4
console.log(restArr); // rest means -> [5,6]
