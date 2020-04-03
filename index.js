// javascript

// a programming language... that allows us to use logic in websites

// variable... this is simply, a storage space for us...
// 3 variables and stored data inside of them
let name = "Jacob";
let age = 44;
let school = "Code Nation";
// name = "Imran";
// name = "Imran, the beach man.";
// age = 19;
// school = "CodeNation";
// my name is equal to the value stored inside of name
console.log("Hi, my name is " + name); // name = Jacob
name = "Imran";
// console.log("Hi, my name is " + name); // name = Imran

console.log("I am " + age + " years old");
console.log("I attend " + school);

// function - simply a way of doing things, without repeating ourselves

let numberOne; // no value
let numberTwo; // no value
let total; // no value

// arrow function
const addition = (numberOne, numberTwo) => {
  // this is our addition function that will add two numbers together each time it is called
  total = numberOne + numberTwo;
  console.log(total);
};

addition(20, 30);
addition(30, 70);
addition(40, 15);
addition(400, 150);
