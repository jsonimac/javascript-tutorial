'use strict';

console.log('hello datastructure');
console.log('------------------');


// const flights =
//   `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// const convert = (strVal) => {
//   return strVal.slice(0, 3).toUpperCase();
// }

// const flightsList = flights.split('+');
// for (const eachFlight of flightsList) {
//   const [status, from, to, time] = eachFlight.split(';');
//   let finalStat = status.replaceAll('_',' ').trim();
//   let finalTime = time.replace(':','h');
//   let output = `${finalStat.includes('Delayed') ?  '🤔 '+finalStat : '🥳 '+finalStat} from ${convert(from)} to ${convert(to)} (${finalTime})`
//   console.log(output.padStart(50));
// }

// Challenge Strings
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function(){
//   const val = document.querySelector('textarea').value
//   const datas = val.split('\n');
//   for (const words of datas) {
//     let [fwor, swor] = words.toLowerCase().trim().split('_');
//     const res = [fwor, swor.replace(swor[0],swor[0].toUpperCase())]
//     console.log(res.join('')); 
//   }
  
// })





// const words = 'Hello there this is Java Script language';
// console.log(words.split('J'));

// const pName = 'Jessie caAmInos';
// const [fname, lname] = pName.split(' ')
// console.log(fname, lname);
// const updated = ['Mr',fname, lname[0].toLocaleUpperCase() + lname.slice(2).toLocaleLowerCase()].join(' ')
// updated

// String Methods
// const plane = 'A52';
// const airline = ' 4 Ninoy Aquino Air';
// console.log(airline[0]);
// console.log(airline[3]);
// console.log('HelloWor'.length);
// console.log(airline.indexOf(4));
// console.log(airline.slice(3,8));

// const checkMiddleSeat = function(seat){
//   const seatpos = seat.slice(-1) == 'B' || seat.slice(-1) == 'A' ? 'Middle Seat' : 'Not a middle seat';
//   return console.log(seatpos);
// }

// checkMiddleSeat('22B');
// checkMiddleSeat('12A');
// checkMiddleSeat('3F');
// checkMiddleSeat('4A');

// Make the first letter of this work Capital and the rest is lowercase "dREamS Are VEry True if yOU PUt action to IT"
// Remove all the white Space
// Replace the words "PUt action to IT" to "Do it Now"
// Check if the sentence includes "Dreams" and "Action" if both are true then log "Great"\
// Check if the sentence start and ends with "Dreams"

// const formatter = '     dREamS Are VEry True if yOU PUt action to IT       '
// const updated = formatter.charAt(0).toLocaleUpperCase() + formatter.slice(1).toLowerCase();
// console.log(updated); 

// console.log(updated.trim(" "));
// console.log(updated.replaceAll(' ', '')); 
// console.log(updated);
// console.log(updated.replace('put action to it', 'do it now'));

// console.log('------------------------');

// const perso = ' pana Naa';
// // console.log(perso.toLowerCase().includes('naa')); 
// const checkAntipara = function(person, status){
//   const finalStat = status.toLowerCase().includes('naa');
//   if(!finalStat){
//     return console.log(`Dli kauban si ${person}`);
//   }
//   return console.log(`Birada na ta ${person}`);
// }

// checkAntipara('Balong','Wala antipara og pana');
// checkAntipara('Dave','Naa antipara og pana');
// checkAntipara('Renwel','Wala antipara og pana');
// checkAntipara('Dodong','Naa antipara og pana');



// CODING CHALLENGE 3
// DEVELOP PROBLEM SOLVING SKILLS

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
  So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
  (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or 
  second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const uniqueEvents = [...new Set(gameEvents.values())];
// console.log(uniqueEvents);


// console.log('------------------------');

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log('------------------------');

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// console.log('------------------------');
// let mins = 0
// for (const [key, value] of gameEvents) {
//   mins += key
//   console.log(
//     `${mins <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
//   );
// }
// Maps fundamentals
// const newMap = new Map([
//   ['question', 'What is the best hobby?'],
//   [1, 'Coding'],
//   [2, 'Sleeping'],
//   [3, 'Reading Books'],
//   [1, 'Your Correct'],
//   ['message', 'Wrong choice']
// ])

// console.log(newMap.get('question'));
// console.log(newMap.get('answer'));
// console.log(newMap.values());

// for (const [key, value] of newMap) {
//   typeof key == 'number' ? console.log(key, value) : ''
// }

// const answer = Number(prompt(newMap.get('question')))

// console.log(`You answer ${answer}`);

// const result = newMap.get(answer) != undefined ? newMap.get(answer) : newMap.get('message')
// console.log(result);

// const map1 = new Map()
// map1.set('fname', 'Jessie')
// map1.set('lname', 'Caminos')
// map1.set('car', 'Ford Ranger')

// console.log(map1.get('fname'));

// Sets make the values inside the array unique
// const newSets = new Set([
//   'Jessie',
//   'Jessie', 
//   'Jessie'
// ])
// console.log(newSets);


// const phone = {
//   brands: ['Samsung', 'RealMe', 'Vivo', 'Huawei', 'Lenovo'],
//   prices: [9000, 10000, 13000, 7000, 19000],
//   owner: {
//     Jessie: {
//       phoneType: 'Samsung Owner',
//     },
//     Jessel: {
//       phoneType: 'Iphone Owner',
//     },
//     Jarviz: {
//       phoneType: 'Lenovo Owner'
//     },
//     Jarviz2: {
//       phoneType: 0
//     }
//   },
//   caseCover: ['Red', 'Yellow', 'Blue', 'Green'],
//   secondHand: false,
//   brandNew: true,
//   yearBuy: 2018,
//   orderPhone: function (phone, price) {
//     // const chosenPhone = this.brands[phone]
//     // // const fixedPrice = this.prices[price]
//     // return `You choose the phone ${chosenPhone} with the price of ${fixedPrice}`
//     return [this.brands[phone], this.prices[price]]
//   },
//   schedShipped: {
//     mon: {
//       am: 8,
//       pm: 8
//     },
//     tue: {
//       am: 10,
//       pm: 10
//     },
//     wed: {
//       am: 6,
//       pm: 6
//     }
//   },
//   totalYear: function (today) {
//     const totalYearOwn = today - this.yearBuy
//     return `This phone is already ${totalYearOwn} years old`
//   },

//   // Desctructure value directly in the function 
//   OrderDetails: function ({ indexOwner, indexPrices }) {
//     console.log(`
//       Hello ${this.owner[indexOwner]} is the owner and the price is ${this.prices[indexPrices]}
//     `);
//   },

//   listOrder: function (...orderss) {
//     let x = orderss.toString().replace(/,/g, " ")
//     return `
//       All orders are ${x}
//     `
//   },

//   ordersAre: function (opt1, opt2, opt3) {
//     console.log(
//       `This are your orders ${opt1}, ${opt2}, ${opt3}`
//     );
//   },
//   listOfPersons: [
//     'Mark',
//     'John',
//     'Jessie', 
//     'Jessel',
//     'Jarviz',
//     'Jarviz2'
//   ]
// }

// -------------------
// Optional Chaining .? - Objects
// --------------------

//1. Check object attribute inside object by using optional chaining.
// Use if statement
// console.log(phone?.newOwner || 'Default');

// const landOwners = {
//   names: 
//   {
//     Richman: {
//       property: true,
//       size: 12000
//     },
//     Carl: {
//       property: true,
//       size: 100
//     },
//     Brono: {
//       property: true,
//       size: 32000
//     },
//     Jason: {
//       property: true,
//       size: 10000
//     } ,
//     Chanli: {
//       property: false,
//       size: 0
//     },
//     Markie: {
//       property: true,
//       size: 100
//     },
//   }
// };






// const newObj = {
//   Matt: { height: 174, weight: 69 },
//   Jason: { height: 190, weight: 103 },
//   Mark: { height: 200, weight: 103 },
//   Clark: { height: 150, weight: 103 }
// }

// const newob = Object.values(newObj)
// console.log(newob);
// for (const i of newob) {
//   console.log(i);
// }

// const objVals = Object.keys(newObj);
// console.log(objVals.entries());


// for (const [i, vals] of objVals.entries()) {
//   console.log(i, vals);
// }

// Loop over all the owners and calculate the size
// get the average size (add all and devide by the length)
// function calcAvgHeight(object) {
//   const personName = Object.keys(object)
//   let totalAverage = 0;
//   personName.forEach(function(element) {
//     const propSizes = object[element].height;
//     totalAverage += propSizes;
//   });
//   totalAverage = totalAverage / personName.length
//   return totalAverage
// }

// console.log(calcAvgHeight(newObj));




//2. Loop over the objects and check if not null
// for (const persons of phone.listOfPersons) {
//   const certOwner = phone.owner[persons]?.phoneType || 'Not Owner';
//   console.log(certOwner);
// }



// --------------
// For-of loop
// --------------

// 1. Loop over brands ang owner in the object
// const brandsOwner = [...phone.brands, ...phone.owner]

// 2. You can destructure the output by wraping the variable with "[]"
// for (const [i, value] of Object.keys(phone).entries()) {
//   console.log(`Index: -- Value: ${value}`);
// }


// // Success Game
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

/* -- Challenge 2 --
  1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them (except for "draw"). 
  HINT: Note how the odds and the game objects have the same property names 😉

  BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
  and the number of goals as the value. In this game, it will look like this:
        {
          Gnarby: 1,
          Hummels: 1,
          Lewandowski: 2
        }

  GOOD LUCK 😀 
  */

//1
// for (const [goal, names] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1} is ${names}`);
// }

// //2
// let total = 0;
// let avg = 0
// for (const i of Object.values(game.odds)) {
//   total += i
// }
// avg = total / Object.keys(game.odds).length
// console.log(avg);

// //3
// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(`
//     Odd of ${key == 'x' ? 'draw' : 'victory'} ${game[key] ?? ''} ${value}
//   `);
// }




// ------------------- Game Challenge -------------------
// 1. Create players using destructure
// const [players1, players2] = game.players

// 2. first players in every team is a goalkeeper
// const [gkBurki, ...fieldPlayers2] = players2;
// const [gkNeuer, ...fieldPlayers1] = players1;

// 3. use spread operator to add all players
// const allPlayers = [...players1, ...players2];

// 4.  All players1 and add 3 substitute
// const players1Final = [...players1, 'Thigo', 'Coutinho', 'Peresic']

// 5. Create on variable for each odd (team1, draw, team2)
// const {team1, x: draw, team2} = game.odds

// 6. Create a function that accepts name of players and print in console along with the number of goals
// const printGoals = function(...Aplayers){
//   console.log(Aplayers.length);
// }
// printGoals('Davies', 'Muller', ...game.scored)

// const winner = team1 < team2 && 'Team 1 Win'
// console.log(winner);




// --------------------------------
// Null Coalescing
// --------------------------------
/**
 * The Null coalescing operator
 * returns its first operand if it exists and is not NULL
 * otherwise it returns its second operand.
 * 
 * EX: 
 * const notNull = 'This is not null';
 * const defaultVal = 'This is default';
 * const result = notNull ?? defaultVal; 
 * console.log(result);
 */



// --------------------------------
// Short Circuiting (&& and ||)
// --------------------------------
/**
  (|| or OR) Operator
  Returns the first true value.
  if all are false it will return the last false value
  
  (&& or AND) Operator
  return the first false value.
  if all are true the last true value.
*/ 



// --------------------------------
// Rest Operator - Assign all the remaining parameters to a variable in Left Side
// --------------------------------

//Assign to a function
// const x = phone.listOrder([
//   'Iphone',
//   'RealMe',
//   'Ssamsung',
//   'HouseAndLot'
// ])
// console.log(x);

// Variable declaration
// const { wed, ...weekDays } = phone.schedShipped;
// console.log(weekDays);


// Assign all the rest of the values to the last variable
// const [val1, val2, ...allVals] = [

// Combine the arrays
//   ...phone.brands,
//   ...phone.prices
// ]
// console.log(val2);



// --------------------------------
// Spread Operator - Spread the elements of an iterable in Right Side
// --------------------------------


// Use Spread in objects
// const updateObject = { newAttri: 'This is new attribute', ...phone, lastAttri: 'Last Part Attri' }
// console.log(updateObject);


// Pass a list of array to function in easy way
// const orders = [
//   prompt('What is your order 1?'),
//   prompt('What is your order 2?'),
//   prompt('What is your order 3?'),
// ]
// phone.ordersAre(...orders)


// Add another owrner in phone object
// const newOwner = ['NewOwner1', 'NewOwner2', ...phone.owner];
// console.log(newOwner);

// const likes = [
//   'The Secret',
//   'The 80/20',
//   'Programming'
// ];
// Use spread operator to add arrays easy
// const addSpread = ['Hello', 'New', ...likes]
// console.log(addSpread);

// Declare Spread Operator
// const arrValues = [1, 3, 54, 65, 32, 123];
// const newVals = [10, 20, ...arrValues];
// const [, , , , val1, ...val2] = newVals
// console.log(val1);






// ---------------------------------
// Destructuring Objects - unpack Objects or Arrays
// ---------------------------------

// Passing Object to a function inside Object
// Desctructure directly to the function
// phone.OrderDetails({
//   personName: 'Jessie',
//   indexPrices: 1,
//   indexOwner: 2,
//   hasTempered: true
// })


// Destructure Nested Object
// const { schedShipped:
//   { mon:
//     { am: morning = [], pm: after = [] }
//   }
// } = phone;
// console.log(morning, after);

// Mutating values of variables
// let place1 = 'Jimenez';
// let place2 = 'Taboo';

// const address = { place1: 'Sinacaban', place2: 'Estrella' };

// ({ place1, place2 } = address);
// console.log(place1, place2);

// let thing1 = 12
// let thing2 = 12

// const obj1 = { thing1: 1000, thing2: 20000 };
// ({ thing1, thing2 } = obj1)
// console.log(thing1, thing2);

//initialize use exact property names to get sa values
// const { brands, prices, schedShipped } = phone;
// console.log(brands);

//RENAME value by using colon after variable
// const { brands: model } = phone;
// console.log(model);

// SETTING default value
// const { brand: collections = 'this is the default val' } = phone;
// console.log(collections);

// ---------------------------------
// Destructuring Array
// ---------------------------------

//initialize array
// const [color1, color2, , color3] = phone.caseCover;
// console.log(color3);


// destructure the return values from array from function
// const [thisPhone, thisPrice] = phone.orderPhone(1, 2);
// console.log(thisPhone, thisPrice);

