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
// const books = ['Grit', '7 Habits', 'Atomic Habits', 12344];

// ADD FUNCTIONS
// -------------------------
// push(Add item in last)
// unshift(add item in first)
// -------------------------
// console.log('Using push method (New book last)')
// books.push('New book last'); //Add Last
// console.log(books);

// console.log('Using unshift method (first new book)')
// books.unshift('first new book'); //Add first
// console.log(books);

// REMOVE FUNCTIONS
// -------------------------
// pop(remove item in last)
// shift(remove item in first)
// -------------------------
// console.log('Using pop method (Remove last)')
// books.pop(); // Remove last
// console.log(books);

// console.log('Using shift method (Remove first)')
// books.shift(); // Remove first
// console.log(books);


// console.log(books.indexOf('Grit'));
// console.log(books.indexOf('grit'));
// console.log(books.includes('Grit'));
// console.log(books.includes(12344));


// ---------------------------------------------
// OBJECT

// function ageCal(year){
//   return 2023 - year;
// }
// const gender = (gender) => {
//   return gender;
// }


// const jessie = {
//   first_name: 'Jessie',
//   last_name: 'Caminos',
//   age: ageCal(1999),
//   friends: ['Mel John', 'Rhandyl', 'Tadong'],
//   gender: 'Male',
//   favNum: 23,
//   certified: true,
//   job: 'Wed Developer',
//   total: function(sampNum){
//     this.newNum = this.favNum + sampNum;
//     return this.newNum
//   },
  // samFunc: (sample) => {
  //   return `This is sample ${sample} function`
  // }

  // Use function rather than arrow inside object to access the properties
  // samFunc: function(){
  //   return `Function accessing the property: ${this.first_name}`;
  // },

  //Accessing all global method thru this property
  // propertyy: console.log(this)

//   summary: function(){
//     const isCertified = this.certified ? 'a' : 'not';
//     const pronoun = this.gender === "male" ? 'he' : 'she';
//     const sentence = `
//       ${this.first_name} is a ${this.job} ${pronoun} is  ${isCertified} certified ${this.job}
//     `
//     return console.log(sentence);
//   },


// }


// console.log(jessie.last_name);
// console.log(jessie.friends);
// console.log(jessie.age);
// console.log(jessie.isBoy);

// const word = 'ends';
// console.log('This is braket Notation ' + jessie['fri'+ word]);
// console.log('This is Dot Notation '+ jessie.friends);

// Accessing the function using dot notation
// console.log(jessie.samFunc('Jessie'));

// Accessing the function using the bracket notation
// console.log(jessie['samFunc']('Jessie'));


// const answer = prompt(`Choose between first_name, last_name, age, friends, isBoy`);

// if(jessie[answer]){
//   console.log(`You choose: `+ jessie[answer])
// }else{
//   console.log(`Invalid Choice`+ jessie[answer])
// }

// CHALLENGE - Access array inside object
// console.log(`
//   ${jessie.first_name} has ${jessie.friends.length} friends, and his best friend is ${jessie.friends[0]}
// `);


// console.log(typeof jessie['samFunc']);
// console.log(jessie['propertyy']);
// console.log(jessie['total'](5));
// console.log(jessie['newNum']);
// console.log(jessie.summary());

// Object End lesson
// ---------------------------------------------



// ---------------------------------------------
// Loops Lessons
// const rip = 10;

// for (let i = 0; i < rip; i++) {
//   console.log(`This is ${i}`);
// }

// Loop in arrays
// const jessie = [
//   'Jessie',
//   'Caminos',
//   2023 - 1999,
//   'Boy'
// ]

// for (let i = 0; i < jessie.length; i++) {
//   console.log(jessie[i]);
// }

//Loop using Break and Continue
// const jessie = [
//   'Jessie',
//   'Caminos',
//   2023 - 1999,
//   'Boy'
// ]

// CONTINUE => skip the value or "jumps over" the loop
// Ex. if value is not a string then it will skip or "Jumps over" the loop
// for (let i = 0;  i< jessie.length; i++) {
//   if(typeof jessie[i] !== 'string'){
//     continue;
//   }
//   console.log(jessie[i]);
// }

// BREAK => end the loop or "Jumps out" the loop
// for (let i = 0;  i< jessie.length; i++) {
//   if(typeof jessie[i] !== 'string'){
//     break;
//   }
//   console.log(jessie[i]);
// }

// Loop Backwards
// --------------------------------------------
// CONTINUE AFTER STUDYING OBJECT MANIPULATION
// --------------------------------------------
// const jessie = [
//   'Jessie',
//   'Caminos',
//   2023 - 1999,
//   'Boy'
// ]

// for (let i = jessie.length - 1; i >= 0; i--) {
//   console.log(jessie[i]);
// }

// const exercise = ['Biceps', 'Arm', 'Legs', 'Abdominal'];

// for (let i = 0; i < exercise.length; i++) {

//   for (let j = 0; j < 5; j++) {
//     let ord = '';
//     if(i+1 == 1){
//       ord = 'st'
//     }else if(i+1 == 2){
//       ord = 'nd'
//     }else if(i+1 == 3){
//       ord = 'rd'
//     }else{
//       ord = 'th'
//     }
//     console.log(`The ${i+1}${ord} excercise is ${exercise[i]} => rip ${j+1}`)
//   }

// }

// --------------------------------------------
// Loop over OBJECT 

const sampleData = {
  jessie: { 
    height: 174, 
    weight: 69, 
    skills: ['swimm', 'pull ups'],
    parents: {
      mother: 'clara',
      father: 'richmon'
    }
  },
  mark: { 
    height: 165, 
    weight: 43, 
    skills: ['travel', 'girlss'],
    parents: {
      mother: 'jaden',
      father: 'josh'
    }  
  },
  clark: { 
    height: 172, 
    weight: 53, 
    skills: ['coffee', 'coding'],
    parents: {
      mother: 'blane',
      father: 'bron'
    }  
  },
  charles: { 
    height: 189, 
    weight: 72, 
    skills: ['sleep', 'eating'],
    parents: {
      mother: 'mary',
      father: 'mike'
    }
  },
}

/* CHALLENGE 1
  --------------------------------
  GET THE AVERAGE OF THE HEIGHT
  --------------------------------
*/
// const calcHeight = function(data){
//   let total = 0;
//   let ave = 0;
//   let length = Object.keys(data).length;
//   for (const key in data) {
//     console.log(`${total} = ${total} + ${data[key].height}`)
//     total += data[key].height
//   }
//   console.log(`-----------------------------`);
//   console.log(`${ave} = ${total} / ${length}`);
//   ave = total / length;
//   console.log(`-----------------------------`);
//   console.log(ave);
// }
// calcHeight(sampleData)
// --------------------------------


/* CHALLENGE 2
  --------------------------------
  GET THE ALL THE SKILLS OF ALL PLAYERS
  --------------------------------
  
  const getSkill = function(data){
    for (const key in data) {
      console.log(data[key].skills);
    }
  }
  getSkill(sampleData)

*/


/* CHALLENGE 3
  --------------------------------
  GET THE ALL THE SKILLS OF CHARLES using LOOP(for in)
  --------------------------------
  const charlesSkill = function(data){
    for (const key in data) {
      if(key !== "charles"){
        continue;
      }else{
        console.log(data[key].skills);
      }
    }
  }

charlesSkill(sampleData)

*/






/* CHALLENGE 4
  --------------------------------
  GET THE ALL THE PARENTS OF ALL PLAYERS
  --------------------------------

  const getParents = function(data){
    for (const key in data) {
      console.log(data[key].parents);
    }
  }
  getParents(sampleData)
*/



/* CHALLENGE 5
  --------------------------------
  GET THE ALL THE PARENTS OF MARK PLAYER
  --------------------------------

  const markParents = function(data){
    for (const key in data) {
      if(key == 'mark') console.log(data[key].parents);
    }
  }
  markParents(sampleData)

*/

// WHILE LOOP

// let lift = 10;

// while(lift < 90){
//   console.log(lift);
//   lift++;
// }



// 
/**
 * BREAK INTO PEACES
 * 
 * 
 * 1. Ask question for clear picture of the problem.
 * 
 * --------------------------------------------------------
 * 
 * 2. Divide and Conquer
 *    - Break it into small problems by ⬇️
 *    - Create a sub problems ⬇️
 *    - List that needs to implement ⬇️
 * 
 * --------------------------------------------------------
 * 
 * 3. Research on how to solve the problems
 *    - Use Google, Stackoverflow and MDN Docs
 * 
 * --------------------------------------------------------
 * 
 * 4. Write it in Pseudo Code
 *    - To make it more readable understandable
 *    - To know the flow on how the code works
 * 
 * --------------------------------------------------------
 * 
 */

