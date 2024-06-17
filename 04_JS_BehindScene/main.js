'use strict';

// const globData = 'Data Glob';
// const anotherChain = 'Second Layer chain';

// const nams = 'Jessie';

// const func1 = function () {
//   let a = 1;
//   const b = func2(7, 9);
//   a = a + b;
//   return a;
// }

// const func2 = function (x, y) {
//   var c = 2;
//   return c;
// }

// const x = func1();
// console.log(x);


// nm = 'new Name';
// console.log(nm);
// console.log(lets);
// console.log(consts);


// var nm = 'Jessie';
// let lets = 'Jessie';
// const consts = 'Jessie';

// console.log(func1(1, 2));
// console.log(func2(1, 2));
// console.log(func3(1, 2));


// var func2 = function (a, b) {
//   return a + b;
// }

// var func3 = (a, b) => {
//   return a + b;
// }

// function func1(a, b) {
//   return a + b;
// }

// var bdate = 2000;

// const data = {
//   fname: 'Jessie',
//   lname: 'Caminos',
//   bdate: 1999,
//   //
//   age: () => {
//     return this;
//   }
// }

// console.log(data.age());


// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const mySelf = {
//   fname: 'Jessie',
//   age: 23
// }

// const friend = mySelf;
// friend.age = 1

// console.log(mySelf.age);
// console.log(friend.age);
const arr = [2, 3, [23, 45]];

const [arr1, arr2, [inar1, inar2]] = arr;
console.log(inar2);
console.log('------------------');


const newObj = {
  // fname: 'Jessie',
  lname: 'Caminos',
  age: 24,
  isGwapo: true,
  friends: ['Rhandyl', 'jong2', 'Winnie'],
  days: {
    mon: {
      am: 'close',
      pm: 'open'
    },
    tues: {
      am: 'open',
      pm: 'open'
    },
    wed: {
      am: 'open',
      pm: 'close'
    },
  },
  obFunc: function ({ obj2 }) {
    console.log(obj2);
  }
}
newObj.obFunc({
  obj1: 'Hello',
  obj2: 'World'
})

/* const { fname: newvar = 'No Value', friends: tf } = newObj;
console.log(newvar);
// console.log(f2);
console.log('-----------------');

const { days: { mon: { am: stat1, pm: stat2 } } } = newObj
console.log(stat1); */
