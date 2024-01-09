'use strict';

// Object and Array Desctructuring
const datas = {
  fname: 'Jessie',
  lname: 'Caminos',
  age: 24,
  friends: {
    f1: 'Randyl',
    f2: 'Jong2',
    f3: 'Jomarie'
  },
  available: {
    monday: {
      am: 8,
      pm: 3
    },
    tuesday: {
      am: 10,
      pm: 1
    },
    wednesday: {
      am: 6,
      pm: 4
    },
    thursday: {
      am: 8,
      pm: 5
    },
    friday: {
      am: 7,
      pm: 1
    }
  },
  hobies: [
    'Coding',
    'Reading',
    'Eating',
    'Swimming',
  ],
  day: 'Friday',
  avail: function(days){
    if(!(days == this.day)) return console.log('Not Available');
    return console.log('Available');
  },
  getDetails: function({sender = [], orderData, brand, hobyNum = [0]}){
    console.log(sender);
    return `The sender is ${sender}, your order today ${orderData},
    the brand is ${brand}, \nHis hoby is ${this.hobies[hobyNum]}`;
  },
  getActivities: function(act1, act2, act3, act4, act5){
    return `You and human and you like to \n ${act1}, ${act2}, ${act3}, ${act4} lastly ${act5}`
  }
}
// TODO: Practice REST Operator - Collect elements
// Rest Operator is same as Spread but Left side of the signment operator.
const [as, ...ddd] = ['firstValue', 3, 'jessi', 'james', 23, 33]
console.log(as);


//-----------------------------

// ----------------------------
// 
// ->> SPREAD Operator
// 
// ----------------------------

// NOTE: Can be use to: Build Array & Pass Values to Function
// NOTE: Spread Operator can only be use in 
// iterables. 
// ->> ex. Arrays, Strings, Maps and Sets 
// Object IS NOT iterables but NOTE: It can use to pass iterables inside object.
// It can also add Objects
// ->> ex 
// const origName = 'Jessie';
// const newName = {...origName};
// output: {0: 'J', 1: 'e', 2: 's', 3: 's', 4: 'i', 5: 'e'}


// Hard way in adding array
// const arr = [1, 2, 4, 6];
// const addNew = [11, 22, 33, arr[0], arr[1], arr[2]];
// console.log(addNew);

// Easy way to add array
// const addEasy = [99, 77, 66, ...arr];
// console.log(addEasy);

// Add new Hoby by using spread operator.
// const newHoby = [...datas.hobies, 'Typing'];
// console.log(newHoby);

// Join 2 arrays
// const joinArr = [...newHoby, ...datas.hobies];
// console.log(joinArr);

// String iterable?
// YES
// const origName = 'Jessie';
// const newName = {...origName};
// console.log(newName);

// TODO: Make a function that will accept a spread operator and returns tah value.
// const activities = ['Run', 'Eat', 'Explore', 'Travel'];
// const activ = [
  // prompt('Activity 1'),
  // prompt('Activity 2'), 
  // prompt('Activity 3'), 
  // prompt('Activity 4')
// ]
// const out = datas.getActivities(...activ, 'Walk');
// console.log(out);

// Add new Object to the Datas
// const newObj = {
//   car: 'Subaro',
//   color: 'blue',
//   price: 12000,
//   type: "sporty",
//   day: 'Sunday'
// }

// const twoObject = {...datas, ...newObj};
// console.log(twoObject);

// -----------------------------------------------

// ---------------------
// 
// Object Desctructuring
// 
// ---------------------

// const {fname, age, avail, availTime, getDetails, day, friends} = datas;

// write the exact Property Name to extract the value
// const {fname, age, avail} = datas;

// Assigning variable name by adding new variable value.
// ex from "fname" to "realname"
// const {fname: realName, age: currentAge, avail: isAvailable} = datas;

// Setting a Default Value by assigning array to the new variable name.
// const {lname: newName = [], fname} = datas
// console.log(newName);

//Mutating Variable
// let fname = 'Charles';
// let lname = 'Jarviz';
// ({fname, lname} = datas);
// console.log(fname);

//Nested desctructuring
// const {
//   monday: {am, pm}
// } = availTime
// console.log(am);

//More Nested desctructuring
// const {1: friend1, 2: friend2, 3: friend3} = friends;
// console.log(friend1, friend2, friend3);

// Function Destructuring.
// Pass and object to the function and use to destructure 
// NOTE: order doesn't matter
// const info = datas.getDetails({
//   brand: 'Adidas',
//   sender: 'Jessie',
//   orderData: new Date(),
//   hobyNum: 1
// });
// console.log(info);

// Function Destructuring by calling the variable declared.
// Pass object to destructure values
// NOTE: When you are using variable from destructured object -> getDetails() <-
// and you want to access the properties of the object
// access directly the main object -> datas <- instead of "this" keyword
// ex. -> this.hobies[hobyNum] <-
// console.log(
//   getDetails({
//     brand: 'Adidas',
//     sender: 'Jessie',
//     orderData: new Date(),
//     hobyNum: 3
//   })
// );



// ------------------------------------------------------



// ---------------------
// 
// Array Desctructuring
// 
// ---------------------

// Destructure
// const [fval, sval, tval] = datas.hobies;
// console.log(fval);

// Nested Destructure
// const [ , , , , [fval, svasl]] = datas.hobies;
// console.log(svasl);

// Mutating values
// let [fval, sval] = datas.hobies;
// console.log(fval, sval);
// const temp = fval;
// fval = sval;
// sval = temp;
// console.log(fval, sval);

// ----------------------------------------------------
