// Discuss about naming convention.
// Be Detailed as possible.
// let firstName = "Jessie";
// var lastName = "Caminos";
// const place = "Ozamis City";

// console.log(firstName + " " + lastName + " " + place);

// Data Types
// let firstNumber = 10; //Floating point number which it awlays have decimal point.
// let firstCar = "Ford Ranger"; //Inside double quotes is a string.
// let believer = true; //Boolean value which is either true or false.
// let dog; //Undefined value which is not yet defined.
// console.log(typeof firstNumber)
// console.log(typeof firstCar)
// console.log(typeof believer)
// console.log(typeof dog)

// Using let can make you reassign the value of the variable.
// let skill = "coding";
// skill = "driving";
// console.log(skill);

// Using const can't make you reassign the value of the variable.
// const personName = "Jessie";
// personName = "Caminos"; // This will throw an error.

// Use const AS DEFAULT in declaring variables.

// -------------------------------------------------
// Operators
// STUDY OPERATOR PRECEDENCE
// const now = 2023;
// const jessieAge = now - 1999;
// const markAge = now - 1988;
// let count = 10;
// console.log(jessieAge, markAge);
// console.log(jessieAge * 2);
// console.log(jessieAge / 10);
// console.log(count ** 3);
// count++;
// count--;
// count += 10; // count = count + 10
// console.log(now - 1999 > now - 1978, (count += 10));
// -------------------------------------------------

// -------------------------------------------------
// Strings and Template Literals
// const firstName = "Jessie";
// const job = "Software Developer";
// const birthYear = 1999,
//   now = 2023;

// Using double quote in string is hard.
// const sentence =
//   "I'm " +
//   firstName +
//   ", a " +
//   job +
//   " I am " +
//   (now - birthYear) +
//   " years old";
// console.log(sentence);
// // Using backtick makes it easy and flexible you can concatinate using (${}) inside backtick
// // in making newline, you can also literally enter to make newline.
// const newName = `I am ${firstName} I work as ${job}, I am ${
//   now - birthYear
// } years old`;
// console.log(newName);
// ----------------------------------------------------

// ----------------------------------------------------
// Conditions if/else

// const age = 15;
// if (age >= 18) {
//   console.log(`You can now get you licence`);
// } else {
//   const yearNeed = 18 - age;
//   console.log(`You need atleast ${yearNeed} year/s to get licence`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = `20th`;
// } else {
//   century = `21th`;
// }
// console.log(century);
// ----------------------------------------------------

// ----------------------------------------------------
// Type Conversion
// const number = "2023";
// const number2 = "jessie";
// console.log(Number(number) + 2); // Convert string to number
// console.log(Number(number2) + 2); // Convert string to number but NAN
// console.log(String(number), 2); // Convert number to string

// Type Coercion
// console.log("I'am Jessie, " + 23 + " Years young"); //Using plus(+) sign will convert numbers to string
// console.log("jess" - "9" - 3); // This will do the opposite using minus(-) will convert the string to number.

// const age = 23;
// const Fname = "817239";

// String Coersion - Automatically convertion
// console.log("50" - age);
// console.log(age + "50");

// String Conversion - Manual convertion
// console.log(String(age));
// console.log(Number(Fname));
// ----------------------------------------------------

// ----------------------------------------------------
// Truthy ang Falsy Values
const data = [
  { value: 0 }, // Value containing "0". Is considered as FALSY VALUE.
  { value: "" }, // Value containing empty string. Is considered as FALSY VALUE.
  { value: undefined }, // Value containing undefine. Is considered as FALSY VALUE.
  { value: null }, // Value containing null. Is considered as FALSY VALUE.
  { value: NaN }, // Value containing NaN. Is considered as FALSY VALUE.
];
// data.map((values) => {
//   console.log(Boolean(values.value)); // This will return false because it is a falsy value.
// });

// console.log(Boolean("jesie"));
// console.log(Boolean(1));
// const number = "2023";
// console.log(number - 2);
// ----------------------------------------------------


// ----------------------------------------------------
// Equality Operators
// const birthYear = 1999;

// if(birthYear == 1999){ // checking only the value (==)
//   console.log("They have the same value");
// }

// if(birthYear === 1999){ // check both value and type (===)
//   console.log("They have the same value and type");
// }

// console.log(typeof birthYear, birthYear);
// const personName = "Jessie";

// const inputNumber = prompt(`  Hey there! ${personName}, 
//   Enter Number`
// );

// if(Number(inputNumber) === 23){
//   alert("Same value AND of the type");
// }

// if(convertedNumber == 23){
//   alert("Same value but NOT of the type");
// }
// ----------------------------------------------------



// -------------------------------------------------
// Boolean logic - AND / OR / NOT

// Logical AND
// Returns True when BOTH values are True

// Logical OR
// Returns True when ONE values are True
// ony False when BOTH values are FALSE

// Logic NOT
// Returns the opposite of the value

// -------------------------------------------------


// -------------------------------------------------
// Logical Operators
// -------------------------------------------------




// -------------------------------------------------
// Switch Statement

// const car = "BMW";

// console.log(`You enter ${car}`);

// switch (car) {
//   case "Bugaati":
//     console.log(`Your car ${car} is Fast`);
//     break;
//   case "Ford Ranger":
//   case "Everrest":
//     console.log(`Your car ${car} is Fast and Good for offroad`);
//     break;
//   case "Land Cruiser":
//     console.log(`Your car ${car} is Good for offroad`);
//     break;
//   case "BMW":
//     console.log(`Your car ${car} is Fast and Good for City`);
//     break;
//   default:
//     console.log(`Your car ${car} is not in the list`);
//     break;
// }

// if(car === "Bugaati"){
//   console.log(`Your car ${car} is Fast`);
// }else if(car === "Ford Ranger" || "Everrest"){
//   console.log(`Your car ${car} is Fast and Good for offroad`);
// }else if(car === "Land Cruiser"){
//   console.log(`Your car ${car} is Fast and Good for offroad`);
// }else if(car === "BMW"){
//   console.log(`Your car ${car} is Fast and Good for City`);
// }else{
//   console.log(`Your car ${car} is not in the list`);
// }
// -------------------------------------------------

//-----------------------------------
// -> EXPRESSION => RETURNS VALUE.
// -> STATEMENT => SET OF INSTRUCTION
//-----------------------------------

// -------------------------------------------------
// Ternary Operator

// like if else but only for 2 choices
// let result = (logic) => {
  // if(logic){
  //   return "The result is true";
  // }else{
  //   return "The result is false";
  // }
  // return logic ? 'The result is true' : 'The result is false';
// }
// let a = 10;
// let b = 20;
// let bol = true;
// // let output = !(a > b && bol) ? 'output is true' : 'output is false';
// let output = (a > b && bol);

// console.log(result(a > b && bol));
// console.log(output)

// -------------------------------------------------

// -------------------------------------------------

