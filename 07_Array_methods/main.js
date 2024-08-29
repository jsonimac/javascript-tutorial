"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const moveDepot = document.querySelector('movements__type--deposit')

const displayAccountMovement = function(data){
  containerMovements.innerHTML = ''
  data.map(function(el,i){
    const type = el > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">You ${type} ${i+1} days ago</div>
        <div class="movements__value">${Math.abs(el)}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html)
  });
}

displayAccountMovement(account1.movements)


const getUserName = function(data){
 data.forEach(val => {
    val.userName = val.owner.
    toLowerCase().
    split(" ").
    map((i)=>{
      return i[0]
    }).join("");
  });
}
// accounts.map()
getUserName(accounts);


// ----------------------------
// Todo - Make a function that will total both withdraw and deposit
// ----------------------------

const displayeSummary = function(data){
  // Total DEPOSIT in FILTER Method
  const totalDeposit = data.movements.filter((amount)=>{
      return amount > 0
    }).reduce((pre, cur)=>{
      return pre + cur
    }, 0);
  labelSumIn.innerHTML = totalDeposit;

  // Total WITHDRAWAL in FILTER Method
  const totalWithdraw = data.movements.filter((amount)=>{
      return amount < 0;
    }).reduce((pre, curr)=>{
      return pre +curr
    },0);
  labelSumOut.innerHTML = Math.abs(totalWithdraw);

  // Interest in every deposit and sum
  const inter = data.movements.filter((amount)=>{
    return amount > 0;
  }).map((amount)=>{
    return amount * 1.2
  }).reduce((prev, cur)=>{
    return prev + cur
  }, 0)
  
  labelSumInterest.textContent = inter;
  
}

displayeSummary(account1)
 





// GET BALANCE in FILTER Method
const getBalance = function(data) {
  const bal = data.movements.reduce((acc, curr)=>{
    return acc + curr
  })
  labelBalance.innerHTML = `${bal}$`
}
getBalance(account1)


// Get MAX Value
const getMaxVal = function(data){
  const maxV = data.movements.reduce((prev, curr)=>{
    return prev > curr ? prev : curr
    
  },data.movements[0])
  return maxV;
}
console.log(`Maximum Value is ${getMaxVal(account1)}`);



// console.log(getMaxVal(account1));
 
// DEPOSIT in For of Loop
// const storeResult = []
// for(const i of account1.movements) {
//   if(i>0){
//     storeResult.push(i)
//   }
// }
// console.log(storeResult);

// console.log(deposits(account1));
// console.log(withdrawals(account1));
// getBalance(account1)


// Challenge Begin --
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:




4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function(ages){
  
  const ageAve = ages.map((age)=>{
    if(age<=2){
      return 2 * age
    }else{
      return 16 + age * 4
    }
  }).filter((age)=>{
    return age >= 18
  }).reduce((prev, curr, i, k)=>{
    return prev + curr / k.length 
  }, 0)

  console.log(`Average ${ageAve}`);
  
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])




 
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////




// --- Coding Challege ---
// const julia = [3,5,2,12,7];
// const kate = [4,1,15,8,3];

// // const finalData = [...kate, ...julia.slice(1,3)]

// const checkDogs = function(dogsJulia, dogsKate){
//   // Step 1
//   const finalJulia = dogsJulia.slice();
  
//   finalJulia.splice(0,1)
//   finalJulia.splice(-2)

//   //Step 2
//   const dogs = dogsKate.concat(finalJulia)

//   //Step 3
//   const result = dogs.map(function(year, index){
//     return year >= 3 
//       ? `the dog number ${index+1} is Adult, and is ${year} year old`
//       : `the dog number ${index+1} still a puppy, ${year} year old`
//   });
//   console.log(result);
// }

// checkDogs(julia, kate)
 
//  console.log('-----------');


//  const newArr = [...aray, ...aray2]

// console.log(aray.concat(aray2));
 
// console.log(newArr);





// Loop Over arrays
// const accountMovement = [
//   100, 300, 5000, -3000, 1000, -900, -800, 980,
// ];
// const eutoToUsd = 1.1;

// const result = accountMovement.map((i)=>{
//   return i *  eutoToUsd
// })
// console.log(result);


// accountMovement.forEach(function(val){
//   if (val > 0) {
//     total = total
//     console.log(`You deposit ${each}`);
//   }
//   if (val < 0) {
//     console.log(`You withdrawn ${Math.abs(each)}`);
//   }
// })

// for (const each of accountMovement) {
//   if (each > 0) {
//     console.log(`You deposit ${each}`);
//   }
//   if (each < 0) {
//     console.log(`You withdrawn ${Math.abs(each)}`);
//   }
// }
// console.log(`--------------This is foreach---------------`);
// accountMovement.forEach(function (val, placeMent, arrVal) {
//   console.log(
//     `This is the value: ${val}\nLoop number: ${
//       placeMent + 1
//     }\nThis is the array value ${arrVal}`
//   );
// });
// Getting the value by using at method
// console.log("Hello Arrays ");
// const compName = "AMSG88";
// const arrVals = ["Jessie", true, false, 234, Object, "Last Part"];
// console.log(arrVals.at(4));
// console.log(arrVals.at(-1));
// console.log("---------");
// console.log(compName.at());

// --------- Simple Array Methods -----------
// const pname = "Jessie Caminos";
// const newAr = ["a", "b", "c", "d", "e"];

// console.log(newAr.slice(2, 4));
// console.log(newAr);
// console.log(newAr);
// console.log([...pname]);
// console.log(newAr.splice(0, 3));
// console.log(newAr);

// const newAr2 = ["i", "h", "g", "f", "e"];
// console.log(newAr2.reverse());
// console.log(newAr2);

// const fname = "Jessie";
// const lname = "Caminos";
// console.log(fname.concat(lname));
// console.log(lname.concat(newAr));
// console.log([...fname, ...lname]);

// console.log(newAr.join(""));
