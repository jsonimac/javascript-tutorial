"use strict";

// Start Learning Functions

// CODING CHALLENGE DONE - USING CALL METHOD
// const poll = {
//   question: "What is you Favorite programming language?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
//   answer: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   const choice = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
//   if (isNaN(choice)) {
//     return console.log("Not A Number");
//   } else if (choice != 0 && choice != 1 && choice != 2 && choice != 3) {
//     return console.log("Not in the choices");
//   }
//   this.answer[choice]++;
//   this.displayResult("string");
// };

// poll.displayResult = function (type = "array") {
//   if (type == "string") {
//     return console.log(`
//       ${this.answer}
//     `);
//   }
//   if (type == "array") {
//     return console.log(this.answer);
//   }
// };

// document.getElementById("pool").addEventListener("click", function () {
//   poll.registerNewAnswer();
// });

// const newGroup = {
//   answer: [1, 2, 3, 4, 5, 7],
// };
// const newGroup2 = [4, 5, 7];
// poll.displayResult.call(newGroup, "string");

// Bind Method
// const fordRental = {
//   carName: 'Ford Ranger',
//   carType: 'Pickup',
//   plateNum: 2342,
//   rental: [],
//   currentRental(amount, name) {
//     console.log(`${this.carName} is ${this.carType} with plate ${this.plateNum} has been rent by ${name} with amount of ${amount}`);
//     this.rental.push({ carName: this.carName, personName: name, amount: amount })
//   }
// }

// const viosRental = {
//   carName: 'Toyota Vios',
//   carType: 'Van',
//   plateNum: 9999,
//   rental: [],
// }
// const hStarex = {
//   carName: 'Starex',
//   carType: 'Van2',
//   plateNum: 23443,
//   rental: [],
// }
// const renting = fordRental.currentRental
// const rentV = renting.bind(viosRental)
// const rentS = renting.bind(hStarex)
// rentS(2000, 'Clevv');
// rentV(2003, "Welms");

// viosRental.cars = 1000;
// viosRental.addCar = function () {
//   this.cars++
//   console.log(this);
//   console.log(this.cars);
// }
// const fname = document.getElementById('personName')
// const amount = document.getElementById('amount')

// document.getElementById('cars').addEventListener('click', viosRental.addCar.bind(viosRental))

// ------------------- Challenge ----------
// const addTax = function (rate) {
//   return function (val) {
//     return val + val * rate
//   }
// }
// const newsrate = addTax(0.23);
// console.log(newsrate(100));

// const fname = document.getElementById('personName')
// const amount = document.getElementById('amount')

// const btnrent = document.getElementById('rent');
// btnrent.addEventListener('click', function () {
//   const fval = fname.value;
//   const mval = amount.value;
//   console.log(`Name is ${fval}, and amount is ${mval}`);
//   rentV(Number(mval), fval)
//   console.log(`-----------`, typeof Number(mval));
//   console.log(viosRental.rental);
// })

// console.log(viosRental.rental);

//

//---- Call and Apply Method in Functions ----
// const fordRental = {
//   carName: 'Ford Ranger',
//   carType: 'Pickup',
//   plateNum: 2342,
//   rental: [],
//   currentRental(amount, name) {
//     console.log(`${this.carName} is ${this.carType} with plate ${this.plateNum} has been rent by ${name} with amount of ${amount}`);
//     this.rental.push({ carName: `${this.carName},`, personName: `${name}`, amount: `${amount}` })
//   }
// }
// fordRental.currentRental(233, 'Jessie')
// fordRental.currentRental(322, 'Mark')
// fordRental.currentRental(1000, 'Chares')
// console.log(fordRental.rental);

// const viosRental = {
//   carName: 'Toyota Vios',
//   carType: 'Van',
//   plateNum: 9999,
//   rental: [],
// }

// Call method use to refer the "this" keyword to the specific object
// fordRental.currentRental.call(viosRental, 89989, 'Jarviz')
// fordRental.currentRental.call(fordRental, 2000, 'Framekrr')
// console.log(viosRental);
// console.log(fordRental);

// Apply method is the same as Call but accepts the second arguments as array
// fordRental.currentRental.apply(viosRental, [5555, 'James Leb'])
// console.log(viosRental);

// const highFunc = (greeting) => {
//   return (uname) => {
//     console.log(`${greeting} there ${uname}`);
//   }
// }

// const lowerFunc = highFunc('Hellooo')
// lowerFunc('JEmmmm')
// highFunc('Welcome')('Jessie')

// Higher Order Function
// const changerWord = function (sentence) {
//   return sentence.replace(/ /g, '💕')
// }
// console.log(changerWord('Hello There My Friends'));
// console.log('---------------');

// const upperFWord = function (sentence) {
//   const [fw, ...rest] = sentence.split(' ');
//   const frd = fw.toUpperCase();
//   const restwrd = rest.join(' ').toLowerCase()
//   return [frd, restwrd].join(' ')
// }
// console.log(upperFWord('Hello There My Friends'));
// console.log('-----------------');

// const spaceToHeart = function (sentence, fn) {
//   return fn(sentence)
// }
// console.log(spaceToHeart('javascript is the best of all time', changerWord));
//This is the higher order comes in
// Function that accepts function

// const orderType = 'B23';
// const personName = {
//   name: 'Jessie Caminos',
//   money: 12000
// }

// const placeOrder = function (pname, orderT) {
//   orderT = 'NewOrder';
//   pname.name = 'Hello ' + pname.name;
//   if (pname.money >= 11000) {
//     alert('Wait for your order')
//   } else {
//     alert('you dont have money')
//   }
// }

// placeOrder(personName, orderType);
// console.log(orderType);
// console.log(personName);
