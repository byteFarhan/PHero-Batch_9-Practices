function myFunc(name) {
  let additionalName = "Mazumder";
  const innerFunc = function () {
    return `${name} ${additionalName}`;
  };
  additionalName = "Ovi";
  return innerFunc;
}

const myName = myFunc("Farhan");
console.log(myName());
