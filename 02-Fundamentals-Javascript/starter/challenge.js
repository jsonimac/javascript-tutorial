
//--------------------------------------------------
// CHALLENGE 1 
// const calcAverage = (score1, score2, score3) => {
//   const average  = (score1 + score2 + score3) / 3;
//   return average;
// }

// const scoreDolphins = calcAverage(99, 99, 99);
// const scoreKoalas = calcAverage(12, 11, 49);

// function checkWinner(scoreDol, scoreKoal){
//   if(scoreDol >= scoreKoal * 2){
//     console.log(`Dolphin Wins (${scoreDol} vs. ${scoreKoal})`);
//   }else if(scoreKoal >= scoreDol * 2){
//     console.log(`Koala Wins (${scoreKoal} vs. ${scoreDol})`);
//   }else{
//     console.log(`No team wins`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);


//--------------------------------------------------
// CHALLENGE 2
// calcTip = (bill) => {
//   const tipPercent = bill >= 50 && bill <= 300 ? 15 : 20;
//   const totalTip = (tipPercent / 100) * bill
//   return totalTip;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

// console.log(bills)
// console.log(tips)
// console.log(total)
//--------------------------------------------------



//--------------------------------------------------
// CHALLENGE 3
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// }

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// }

// const result = mark.calcBMI() > john.calcBMI() ? `
//     ${mark.fullName}'s BMI(${mark.calcBMI().toFixed(2)}) is higher than ${john.fullName}' (${john.calcBMI().toFixed(2)}) 
//   ` : `
//     ${john.fullName}'s BMI(${john.calcBMI().toFixed(2)}) is higher than ${mark.fullName}' (${mark.calcBMI().toFixed(2)}) 
//   `;

// console.log(result);


// ------------------------------------------
// CHALLENGE 4
// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// console.log(bill.length);


// const calcTip = function(bills){
//   let tipPercent = 0;
//   for (let i = 0; i < bills.length; i++) {
//     tipPercent = bills[i] >= 50 && bills[i] <= 300 ? 15 : 20;
//     tips[i] = (tipPercent / 100) * bills[i];
//     totals[i] = tips[i] + bills[i];
//   }
//   console.log(`-----------BILLS--------------`);
//   console.log(bills);
//   console.log(`-----------TIPS--------------`);
//   console.log(tips);
//   console.log(`-----------TOTALS--------------`);
//   console.log(totals);
// }

// calcTip(bill);



// Solve the BONUS

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. 
// This function calculates the average of all numbers in the given array. 
// This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. 
// To do the addition, start by creating a variable sum that starts at 0. 
// Then loop over the array using a for loop. In each iteration, 
// add the current value to the sum variable. This way, by the end of the loop, 
// you have all values added together.

// To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements).

// Call the function with the totals array.