'use strict'

// ---------------------------------------------
// Function Declaration
// function newFunc(){
//   console.log('First function');
// }

// Calling the function
// newFunc()
// newFunc()
// newFunc()


//Passing parameters
// function displayName(name, age, address){
//   const sentence = `
//     Hello my name is ${name}, I am ${age} years young 
//     and I also live in ${address}
//   `;
//   return sentence
// }
// const result = displayName("Jessie", 23, "Taboo Jimenez");
// console.log(result);

// ---------------------------------------------
//Function EXPRESSION
// Can be called after declaring
// const calc = (birth_year) =>{
//   const age = 2023 - birth_year;
//   return age;
// }
// calc(1999)
// console.log(calc(1999));

//Function DECLARATION
// Can be called even before it is define.
// console.log(cal1(1997));

// function cal1(birth_year){
//   const age = 2023 - birth_year;
//   return age;
// }

// ---------------------------------------------

// ---------------------------------------------
// Calling function inside
// function UpCase(data){
//   const conv = typeof data == 'string'? data.toUpperCase() : 'Not a string';
//   return conv;
// }

// function dataSentence(name, address, email){
//   const nname = UpCase(name)
//   const addr = UpCase(address)
//   const eml = UpCase(email)
//   const sent = `The name is ${nname}, from ${addr}, contact me thro ${eml}`;
//   return sent;
// }

// console.log(dataSentence('jessie', 'taboo', 'sonimac1227@gmail.com'));
// ---------------------------------------------

//
// ---------------------------------------------
//ARRAY INTRO
// Note: Array can only store expression
// const books = ['Grit', '7 Habits', 'Atomic Habits'];
// console.log(books[books.length - 1]);
// books[1] = 'New book';
// console.log(books);
// ---------------------------------------------


// ---------------------------------------------
//Array functions
const books = ['Grit', '7 Habits', 'Atomic Habits', 12344];

// ADD FUNCTIONS
// -------------------------
// push(Add item in last)
// unshift(add item in first)
// -------------------------
console.log('Using push method (New book last)')
books.push('New book last'); //Add Last
console.log(books);

console.log('Using unshift method (first new book)')
books.unshift('first new book'); //Add first
console.log(books);

// REMOVE FUNCTIONS
// -------------------------
// pop(remove item in last)
// shift(remove item in first)
// -------------------------
console.log('Using pop method (Remove last)')
books.pop(); // Remove last
console.log(books);

console.log('Using shift method (Remove first)')
books.shift(); // Remove first
console.log(books);


console.log(books.indexOf('Grit'));
console.log(books.indexOf('grit'));


console.log(books.includes('Grit'));
console.log(books.includes(12344));






