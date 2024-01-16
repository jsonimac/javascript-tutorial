'use strict';


const arrVals = [
  {fname: 'Josh', age: 23, hoby: 'Code'},
  {fname: 'Joshs', age: 23, 
    frid: {
      ff: 'inside Object'
    } 
  }
]

const shoes = ['nike', 'adidas', 'anta']

// Using Object.entries to return array of key/value pairs
// Apply in Array
// for (const [key, value] of Object.entries(shoes)) {
//   console.log(value);
// }

// Use Object.entries in object destructure
for (const [key, {ff} ] of Object.entries(arrVals[1])) {
  console.log(ff ?? 'no value');
}

// Optional Chaining

// const person = {
//   fname: 'Jessie',
//   lname: 'Caminos',
  // age: 24,
  // minus(int){
  //   let diff = 0;
  //   diff = int - 4;
  //   return diff
  // },
//   hoby: {
//     type: 'coding',
//     hours: 0
//   },
//   friends: {
//     f1: {
//       age: 23,
//       fname: 'Rhandyl',
//       lname: 'Cacayan',
//       parents: {
//         fname: 'Lolita'
//       }
//     },
//     f2: {
//       age: 23,
//       fname: 'Rhandyl',
//       lname: 'Cacayan',
//       parents: {
//         // fname: 'Lolita'
//       }
//     }
//   },
//   minus(int){
//     let diff = 4;
//     return int - diff;
//   }
// }

// --------------------------------
// Objects Optional Chaining
// --------------------------------
// Using Optional Chaining --> Use ?. check property exist or not <--
// Return undefine of property doesnot exist/
// Calling property name.
// const diff = person?.friends?.f1?.parents?.fname
// console.log(diff);

// Using Optional Chaining in Calling methods.
// If exist then pass arguments, If not then return undefine.
// const meth = person?.minus?.(10);
// console.log(meth ?? 'function not exist');

// Work together with null coalision
// const comb = person?.hoby?.hours
// console.log(comb ?? 'not exist');
// --------------------------------

// --------------------------------
// Array Optional Chaining
// --------------------------------
// const arrVals = [
//   {fname: 'Josh', age: 23, hoby: 'Code'},
//   {fname: 'Joshs', age: 23, 
//     frid: {
//       ff: 'inside Object'
//     } 
//   }
// ]

// Apply Optional Chaining and Null Coalesion
// const checkHoby = arrVals[1]?.hoby ?? 'No hoby indecated '
// console.log(checkHoby);

// const [asd, sd] = arrVals[0];
// console.log(asd);

// Optional Chaining

// ----------------------------

//Object Literal Start

// Adding object inside object
// const newObj = {
//   obj1: 'ASDasd',
//   obj2: 'jjlaskdj'
// }
// const newArr = ['Jese', 'jskajd', 'dkm']

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//     ],
//     // Adding new object
//     newObj,

//     // Adding new array
//     newArr,

//     // Adding value from array.
//     [newArr[0]]: {

//     }
// }

// console.log(game.newArr);

//Object Literal End


// FOR OF LOOP START -->
// const players = [...game.players[0], ...game.players[1]];


// for (const i of players.entries()) {
//   console.log(i);
// }

// FOR OF LOOP END -->

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// CHALLENGE 1 START

// 1. Create player1 and player2
// Apply Array Destructuringto create team1 and team2
// const [players1, players2] = game.players;

// // 2. First Player should be the Goal Keeper and the rest players should be Field Players. 
// // Apply rest operator for dividing every first player in the game as Goal Keeper.
// const [gkNeuer, ...fieldPlayers] = players1;
// // const [gkBurki, ...fieldPlayers2] = players2;

// // 3. Merge 2 players
// const allPlayers = [...players1, ...players2]

// // 4. Add 4 substitute players in array.
// const subPlayers = ['New1,', 'New2', 'New3', 'AllSubPlayers'];
// const finalPlayers1 = [...players1, ...subPlayers];

// // 5. Create one variable for each odd.(Based on the games.odds);
// const {team1, x: draw, team2} = game.odds;
// console.log(draw);

// const printGoals = function(...playerName){
//   console.log(playerName.length);
// }
// printGoals(...game.scored);

// CHALLEGE 1 END

// Logical Assignment Operator
// const motor1 ={
//   brand: 'Mio',
//   price: 0,
//   owner: 'Jeson',
//   klmRun: 1200
// }

// const motor2 = {
//   brand: 'XRM',
//   // price: 15000,
//   owner: 'Jessie',
// }

// motor2.owner &&= 'Unknown';
// console.log(motor2);

// Null Coalescing --> checks if its null or undefined
// const val = motor1.price ?? 20;
// console.log(val);

// Logical OR Shorthand
// motor1.price ||= 0;
// motor2.price ||= 0;
// console.log(motor2.price);


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
    },
    saturday: {
      am: 7,
      pm: 1
    },
    sunday: {
      am: 7,
      pm: 1
    },
    
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

// Or operator return true value.
// const result = null || '' || undefined; // All are false.
// const result1 = 1 || 'jess' || true; // All are true
// const result2 = null || '' || 'Hey theyr'; // One is false
// const result3 = undefined || '' || true; // One is true
// console.log(result, result1, result2, result3);

// // AND Operator return false value.
// const resul = 1 && "Hey" && true; // All are true. --> LAST TRUE VALUE
// const resul1 = null && undefined && '' && 0 && false; // All are false. --> FIERST FALSE VALUE
// const resul2 = null && '' && 'Hey theyr' && false && undefined; // One is true. --> FIRST FALSE VALUE
// const resul3 = true && 'jess' && 1 && undefined && undefined; // One is false --> FIRST FALSE VALUE
// console.log(resul);
// console.log(resul1);
// console.log(resul2);
// console.log(resul3);

// const books = [
//   {
//     author: 'James Clear',
//     book: 'Atomic Habits',
//     isbm: '123$',
//     keywords: 'keyword value',
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     publisher: 'James Clear',
//     printBookInfo: function({title, author, year = "unknown"}){
//       console.log(`${title} by ${author}, ${year}`);
//     },
//     spellWord: function(word){
//       console.log(...word);
//     }
//   },
//   {
//     author: 'Angela Duck',
//     book: 'Grit',
//     isbm: '213$',
//   },
//   {
//     author: 'Stephen covy',
//     book: '7 Hbits',
//     isbm: '2103$',
//   }
// ];

// const {publisher: bookPublisher, ...restOfTheBook} = books[0];
// console.log(restOfTheBook);


//Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. 
//The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable
// const [mainkeyWord, ...rest] = books[0].keywords
// console.log(mainkeyWord);

// Spread Operator
// books[0].spellWord('Javascript');


// Pass Object as argument and set default value for year.
// books[0].printBookInfo({
//   title: 'Grit',
//   author: 'Angela',
//   year: 2018
// })

// -----------------------------------------------------------------
// REST Operator - Collect elements
// Only one REST Operator in destructuring
// Rest Operator is same as Spread but Left side of the signment operator.
// const [sd, ...ddd] = ['firstValue', 3, 'jessi', 'james', 23, 33];
// console.log(ddd);

// Use REST Operator to separate weekdays and weekends.
// const { saturday, ...weekDays} = datas.available;
// console.log(weekDays);

// --------------------------------
// Use REST Operator in function. ->>Object
// --------------------------------
// Display Object Properties.
// const displayResult = function({...info}){
//   return `${info.fname}, ${info.lname}`
// }
// console.log(displayResult({
//   fname: 'Jess',
//   lname: 'Sonimac'
// }));

// --------------------------------
// Use REST Operator in function. ->>Array
// --------------------------------
// const displayResult = function(...info){
//   let sum = 0;
//   for (let i = 0; i < info.length; i++) {
//     sum += info[i]
//   }
//   return info;
// }
// console.log(displayResult({
//   fd: 1, sd: 4, ff: 3
// },
// {
//   vv: 1, bb: 4, nn: 3
// }));


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
