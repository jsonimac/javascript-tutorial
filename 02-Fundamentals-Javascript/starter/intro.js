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