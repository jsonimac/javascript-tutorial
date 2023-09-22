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

// // Type Coercion
// console.log("I'am Jessie, " + 23 + " Years young"); //Using plus(+) sign will convert numbers to string
// console.log("jess" - "9" - 3); // This will do the opposite using minus(-) will convert the string to number.
// ----------------------------------------------------

// ----------------------------------------------------
// Truthy ang Falsy Values
const data = [
  { value: 0 }, // Value containing "0".
  { value: "" }, // Value containing empty string.
  { value: undefined }, // Value containing undefine.
  { value: null }, // Value containing null.
  { value: NaN }, // Value containing NaN.
];
data.map((values) => {
  console.log(Boolean(values.value));
});

console.log(Boolean("jesie"));
console.log(Boolean(1));
const number = "2023";
console.log(number - 2);


