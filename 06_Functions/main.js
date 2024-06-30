'use strict';

// Start Learning Functions

// Bind Method
const fordRental = {
  carName: 'Ford Ranger',
  carType: 'Pickup',
  plateNum: 2342,
  rental: [],
  currentRental(amount, name) {
    console.log(`${this.carName} is ${this.carType} with plate ${this.plateNum} has been rent by ${name} with amount of ${amount}`);
    this.rental.push({ carName: `${this.carName},`, personName: `${name}`, amount: `${amount}` })
  }
}

const viosRental = {
  carName: 'Toyota Vios',
  carType: 'Van',
  plateNum: 9999,
  rental: [],
}
const renting = fordRental.currentRental

const rental = renting.bind(viosRental)
rental(1222, "Jessie")
rental(3333, "Welms")
rental(1222, "Brani")
rental(1222, "Flami")
// console.log(viosRental.rental);




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
