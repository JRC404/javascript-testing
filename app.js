const add = (num1, num2) => {
  return num1 + num2;
};

let myArray = ["Dean", "Dan", "Tom", "Corona Danneh after today. Top bants"];

let userInput;
let userBalance = 1000;

const withdrawFunction = userInput => {
  // no brackets around userInput... single pararameters don't need brackets.
  return (userBalance -= userInput);
};

let booleanValue = true;

// module.exports = add; // single export
module.exports = {
  // multiple function export
  add,
  myArray,
  userInput,
  userBalance,
  withdrawFunction,
  booleanValue
};
