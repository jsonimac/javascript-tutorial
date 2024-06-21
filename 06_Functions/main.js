'use strict';

// Start Learning Functions


const highFunc = (greeting) => {
  return (uname) => {
    console.log(`${greeting} there ${uname}`);
  }
}

const lowerFunc = highFunc('Hellooo')
lowerFunc('JEmmmm')
highFunc('Welcome')('Jessie')



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
