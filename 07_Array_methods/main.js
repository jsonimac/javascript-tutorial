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

// Implement Login Function
let currentUser;

btnLogin.addEventListener('click', (e)=>{
   // Prevent from submitting
   e.preventDefault();

   // Check if the value in input field exist in the accounts
   currentUser = accounts.find((user)=>{
      return user.userName === inputLoginUsername.value
   })

   // Assign value if the input is not found
   currentUser == undefined ? "No user login" : ""
   console.log(currentUser);
   
   // Check the pin in the user if matches
   if(currentUser?.pin == Number(inputLoginPin.value)){
      // Display page
      // containerApp.style.opacity = "1";

      // Remove input data in fields
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur()

      // Display Name in page
      labelWelcome.textContent = `Welcome ${currentUser.owner}`

      //Display movements
      displayAccountMovement(currentUser.movements)

      //Display balance and summary
      displayeSummary(currentUser)  
   }
})


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
// displayAccountMovement(account1.movements)

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
getUserName(accounts);

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
   }).map((positive)=>{
      return positive * data.interestRate / 100
   }).filter((validInter)=>{
      return validInter >= 1
   }).reduce((prev, eachInter)=>{
      return eachInter + prev 
   },0)   
   labelSumInterest.textContent = inter;

   data.balance = data.movements.reduce((acc, curr)=>{
      return acc + curr
   })
   labelBalance.innerHTML = `${data.balance}$`
}

// GET Transfer Method
btnTransfer.addEventListener("click", function(e){
   e.preventDefault()
                                                                                                        
   const to = inputTransferTo.value;
   const amount = Number(inputTransferAmount.value);

   // Check if receiver exist
   const res = accounts.find((acc)=>{
      return acc.userName == to
   })

   // Check if user does exist
   if(res == undefined){
      return console.log("Reciever don't exist");
   }

   // Check if balance is not less that 0
   if(currentUser.balance <= 0){
     return console.log("Dont have enough balance");
   }

   // Check if balance is not less that 0
   if(amount <= 0){
      return console.log("You can't send 0");
   }

   // Check if amount is not greater than balance
   if(amount > currentUser.balance){
      return console.log("Money must not greater than balance");
   }

   // console.log(res.userName);
   // Check if user is not thesame with the reciever
   if(res.userName === currentUser.userName){
      return console.log("You can't send money to your own account");
   }
   
   res.movements.push(Number(amount))
   currentUser.movements.push(-Number(amount))
   //Display movements
   displayAccountMovement(currentUser.movements)
   //Display balance and summary
   displayeSummary(currentUser)

   inputTransferTo.value = inputTransferAmount.value = ""
   console.log(res);  
   
})

// Array method practice

//total of all sum in deposits




// const userDetails = accounts.find((i)=>{
//    return i.owner === "Sarah Smith"
// })
// console.log(userDetails);
// let val = []
// for (const [index, data] of accounts.entries()) {
//    if(data.owner == "Jessica Davis"){
//       val.push(accounts[index])
//    }
// }
// console.log(val);


// console.log(accounts);
 

// Get MAX Value
// const getMaxVal = function(data){
//    const maxV = data.movements.reduce((prev, curr)=>{
//       return prev > curr ? prev : curr
//    },data.movements[0])
//    return maxV;
// }
// console.log(`Maximum Value is ${getMaxVal(account1)}`);

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

// const calcAverageHumanAge = function(ages){
//    const ageAve = ages.map((age)=>{
//       return age <= 2 ? 2 * age : 16 + age * 4;
//    }).filter((convertAge)=>{
//       return convertAge >= 18
//    }).reduce((prev, legalAge, i, k)=>{      
//       return prev + legalAge / k.length 
//    }, 0)
//    console.log(`Average ${ageAve}`);
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Total Bank Deposits
// const totalDeposit = accounts.flatMap((acc)=>{
//    return acc.movements
// }).filter((posi)=>{
//    return posi > 0
// }).reduce((prev, curr)=>{
//    return prev + curr
// },0)
// console.log(totalDeposit);

// console.log('Get all 1000 deposits');

// const all1k = accounts.flatMap((acc)=>{
//    return acc.movements
// }).filter((all1k)=>{
//    return all1k > 1000
// }).length;
// console.log(all1k);

// console.log('Objects with withdrawal and deposits');

// const depowith = accounts.flatMap((acc)=>{
//    return acc.movements
// }).reduce((prev, curr)=>{
//    curr > 0 ? prev.deposit += curr : prev.withdrawal += curr;
//    return prev
// },{deposit: 0, withdrawal: 0})

// console.log(depowith);
// console.log("-------- All string to title case ot capital case -------");

// const convertTitleCase = function(params){
//    const exceptions = ["at","in", "or","to","a","is","the"];
//    const convertedTitle = params.toLowerCase().split(" ").map((word)=>{
//       if(!exceptions.includes(word)){
//          return word[0].toUpperCase() + word.slice(1)
//       }
//      return word
//    })
//    return convertedTitle.join(" ");
// }
 

// console.log(convertTitleCase("this is one of the TITLE to be a blame game"));
// console.log(convertTitleCase("find me this FLAMING"));
// console.log(convertTitleCase("dont be a HANDSOME"));


// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
// TODO:
// Challenge 1


const dogs = [
  { weight: 22, curFood: 284, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
const depotsss = accounts.flatMap((data)=>{
   return data.movements
}).reduce((prev, curr)=>{
   return curr >= 1000 ? prev + 1 : prev
},0)
const alldep = accounts.flatMap((data)=>{
   return data.movements
})
console.log(alldep);

console.log(depotsss);



console.log(`------------Answer 1--------------`);
dogs.forEach((dog)=>{
   const recoF = dog.weight ** 0.75 * 28
   dog.recoFood = Math.trunc(recoF)
})
console.log(dogs);



// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
console.log(`---------------Answer 2-------------`);

const ownersarah = dogs.find((user)=>{
   return user.owners.includes("Sarah")
})
const isEatingTooMuch = ownersarah.curFood > ownersarah.recoFood
console.log(`Sarah's dog is eating ${isEatingTooMuch ? 'Too much' : 'Right amount'}`);


// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// TODO: make use of the problem solving technique
console.log(`----------------Answer 3-------------`);

// Create ownersEatTooMuch Array
const ownersEatTooMuch = dogs.filter((dogsOwner)=>{
   return dogsOwner.curFood > dogsOwner.recoFood
}).flatMap((owner)=>{
   return owner.owners
})

const ownersEatTooLittle = dogs.filter((dogsOwner)=>{
   return dogsOwner.curFood < dogsOwner.recoFood
}).flatMap((owner)=>{
   return owner.owners
})
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);


console.log(`----------------Answer 4-------------`);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`List of dog ${dogsList.}`);


console.log(`Owners who eats too little ${ownersEatTooLittle.join(" and ")}`);
console.log(`Owners who eats too MUCH  ${ownersEatTooMuch.join(" and ")}`);


// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
const exactFood = dogs.find((food)=>{
   return food.curFood == food.recoFood
})
console.log(exactFood);
console.log(`----------------Answer 5-------------`);


//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const okAmount = dogs.some((dog)=>{
   return dog.curFood > dog.recoFood * 0.90 && dog.curFood < dog.recoFood * 1.10
})
console.log(okAmount);
console.log(`----------------Answer 6-------------`);


const allOkAmount = dogs.filter((dog)=>{
   return dog.curFood > dog.recoFood * 0.90 && dog.curFood < dog.recoFood * 1.10
})
console.log(allOkAmount);
console.log(`----------------Answer 7-------------`);


//8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const shalowSort = dogs.slice().sort((a,b)=>{
   return a.recoFood - b.recoFood
})
console.log(shalowSort);

console.log(`----------------Answer 8-------------`);



/*
1. Ask a question(Clarify all)
2. Divide and conquer
   a. break the problem into sub problems to make it easy to solve
3. Search as much as possible
4. WRITE PSEUDO-CODE to know the flow of the code you write to have vision 
*/



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
