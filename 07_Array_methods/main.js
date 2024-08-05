"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////




// --- Coding Challege ---
// const julia = [3,5,2,12,7];
// const kate = [4,1,15,8,3];

// const finalData = [...dogsKate, ...dogsJulia.slice(1,3)]

// const checkDogs = function(dogsJulia, dogsKate){
//   // Step 1
//   const finalJulia = dogsJulia.slice(1,3);

//   //Step 2
//   const finalData = [...dogsKate, ...finalJulia]
// s
//   //Step 3
//   finalData.forEach(function(year, index){
//     if(year >= 3){
//       console.log(`the dog number ${index+1} is Adult, and is ${year} year old`);
//     }
//     if(year < 3){
//       console.log(`the dog number ${index+1} still a puppy, ${year} year old`);
//     }
//   })
// }

// checkDogs(julia, kate)
// Loop Over arrays
// const accountMovement = [
//   100, 300, 5000, -3000, 1000, -900, -800, 980,
//   // "Hello There",
// ];
// =============

// accountMovement.forEach(function(val){
//   if (val > 0) {
//     total = total
//     console.log(`You deposit ${each}`);
//   }
//   if (val < 0) {
//     console.log(`You withdrawn ${Math.abs(each)}`);
//   }
// })

// for (const each of accountMovement) {
//   if (each > 0) {
//     console.log(`You deposit ${each}`);
//   }
//   if (each < 0) {
//     console.log(`You withdrawn ${Math.abs(each)}`);
//   }
// }
// console.log(`--------------This is foreach---------------`);
// accountMovement.forEach(function (val, placeMent, arrVal) {
//   console.log(
//     `This is the value: ${val}\nLoop number: ${
//       placeMent + 1
//     }\nThis is the array value ${arrVal}`
//   );
// });
// Getting the value by using at method
// console.log("Hello Arrays ");
// const compName = "AMSG88";
// const arrVals = ["Jessie", true, false, 234, Object, "Last Part"];
// console.log(arrVals.at(4));
// console.log(arrVals.at(-1));
// console.log("---------");
// console.log(compName.at());

// --------- Simple Array Methods -----------
// const pname = "Jessie Caminos";
// const newAr = ["a", "b", "c", "d", "e"];

// console.log(newAr.slice(2, 4));
// console.log(newAr);
// console.log(newAr);
// console.log([...pname]);
// console.log(newAr.splice(0, 3));
// console.log(newAr);

// const newAr2 = ["i", "h", "g", "f", "e"];
// console.log(newAr2.reverse());
// console.log(newAr2);

// const fname = "Jessie";
// const lname = "Caminos";
// console.log(fname.concat(lname));
// console.log(lname.concat(newAr));
// console.log([...fname, ...lname]);

// console.log(newAr.join(""));
