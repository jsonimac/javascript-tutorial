'use strict';
// CHALLENGE 1
// -------------------------------------------------
// const massMark = 78,
//   massJohn = 92;
// const heightMark = 1.69,
//   heightJohn = 1.95;
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
// -------------------------------------------------

// CHALLENGE 2
// 1. Print a nice output to the console, telling the user who has the higher BMI.
// The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1)
// is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.
// -------------------------------------------------
// const massMark = 78,
//   massJohn = 92;
// const heightMark = 1.69,
//   heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }
// -------------------------------------------------

// CHALLENGE 3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// -------------------------------------------------
// BONUS 1
// 1. For 3rd solution, add a requirement for a minimum score of 100. With this rule, 
// a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 2. Minimum score also applies to a draw! So a draw only happens when both teams have 
// the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
// -------------------------------------------------


// const dolfScore = [96, 108, 89];
// const koalsScore = [88, 91, 110];

// const totalAvg = (score) => {
//   let sum = 0;
//   for(let i = 0; i < score.length; i++){
//     sum += score[i];
//   }
//   return sum / score.length;
// }

// const scoreDolphins = totalAvg(dolfScore);
// const scoreKoalas = totalAvg(koalsScore);

// console.log(scoreDolphins);

// if(scoreDolphins > scoreKoalas){
//   console.log('Dolphins win the trophy');
// }else if(scoreKoalas > scoreDolphins){
//   console.log('Koalas win the trophy');
// }else if(scoreDolphins === scoreKoalas){
//   console.log('Both win the trophy');
// }

//Bonus 1
// const dolfScore = [100, 91, 100];
// const koalsScore = [100, 91, 100];

// const totalAvg = (score) => {
//   let sum = 0;
//   for(let i = 0; i < score.length; i++){
//     sum += score[i];
//   }
//   return sum / score.length;
// }

// const scoreDolphins = totalAvg(dolfScore);
// const scoreKoalas = totalAvg(koalsScore);
// console.log(`Dolphins score ${scoreDolphins}`);
// console.log(`Koala score ${scoreKoalas}`);


// if(scoreDolphins >= 100 || scoreKoalas >= 100){
//   if(scoreDolphins === scoreKoalas){
//     console.log(`Draw`);
//   }else if(scoreDolphins > scoreKoalas){
//     console.log(`Dolphins Wins`);
//   }else if(scoreKoalas > scoreDolphins){
//     console.log(`Koala Wins`);
//   }
// }else{
//   console.log(`No one wins the trophy :(`);
// }
// -------------------------------------------------


// -------------------------------------------------
// CHALLENGE 4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
// If the value is different, the tip is 20%.


// Your tasks:
// Calculate the tip, depending on the bill value. 
// Create a variable called tip for this. 
// It's not allowed to use an if...else statement 
// (if it's easier for you, you can start with an if...else statement, 
// and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

let calcuTip = (bill) =>{
  const percnt = bill >= 50 && bill <= 300 ? 15 : 20;
  const totalTip = (percnt / 100) * bill;
  const total = totalTip + bill;
  return console.log(`Your bill ${bill}, Total tip ${totalTip}, Percentage is ${percnt}, 
  The total including tip ${total}`);
}

calcuTip(275);
calcuTip(40);
calcuTip(430);

console.log((20/100)*40);