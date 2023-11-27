'use strict';

// Getting use to querySelector
// document.querySelector('.score').textContent = 21;
// document.querySelector('.highscore').textContent = 30;
// document.querySelector('.message').textContent = 'Successfully Guest!';
// document.querySelector('.number').textContent = 45

// log the value of the field
// let val = document.querySelector('.guess').value = 21;
// console.log(val);

// -----------------
//Adding events in button
const secretNum = Math.trunc(Math.random()*20);
let score = Number(document.querySelector('.score').textContent);

// const handleEvent = function(){
//   const value = Number(document.querySelector('.guess').value);
//   if(!value){
//     document.querySelector('.message').textContent = '⛔ No number'
//   }else{
//     if(value === secretNum){
//       document.querySelector('.message').textContent = '🎉 Nice'
//       document.querySelector('.number').textContent = '🎉 Nice One!'
//       document.querySelector('.again').textContent = '🎉 Success!'
//       console.log('nice');
//     }else{
//       document.querySelector('.message').textContent = 'Opps wrong number';
//       if(value > secretNum){
//         document.querySelector('.again').textContent = 'Too high'
//         score = score - 1;
//         console.log(score);
//       }else{
//         document.querySelector('.again').textContent = 'Too Low'
//         score = score - 1;
//         console.log(score);
//       }
//     }
//   }
// }



// Guard Clause
// Uses only if statement that only returns 


const handleEventBetter = function(){
  const value = Number(document.querySelector('.guess').value);
  if(!value){
    document.querySelector('.message').textContent = '⛔ No number'
    return
  }
  if(value < secretNum && value != 0){
    document.querySelector('.message').textContent = 'Too Low'
    score = score - 1;
    document.querySelector('.score').textContent = score
    console.log(score);
    return
  }
  if(value > secretNum){
    document.querySelector('.message').textContent = 'Too High'
    score = score - 1;
    document.querySelector('.score').textContent = score
    console.log(score);
    return
  }

  document.querySelector('.message').textContent = '🎉 Nice'
  // document.querySelector('.number').textContent = '🎉 Nice One!'
  document.querySelector('.number').textContent = secretNum;
  document.querySelector('.highscore').textContent = score
  document.querySelector('body').style.backgroundColor = '#949ca9'
  document.querySelector('.number').style.width = '30rem'

  console.log('nice');
  return
}

const handleReset = function(){
  const secretNum = Math.trunc(Math.random()*20);
  score = 20;
  console.log(secretNum);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('.guess').value = ''
}

document.querySelector('.again').addEventListener('click', handleReset);
document.querySelector('.check').addEventListener('click', handleEventBetter);

