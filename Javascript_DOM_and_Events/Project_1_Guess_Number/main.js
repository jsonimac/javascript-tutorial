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
let secretNum = Math.trunc(Math.random()*20);
let score = Number(document.querySelector('.score').textContent);
let currentHigh = Number(document.querySelector('.highscore').textContent)
console.log(secretNum);

// Guard Clause
// Uses only if statement that only returns error

const handleEventBetter = function(){
  const value = Number(document.querySelector('.guess').value);
  // let currentScore = Number(document.querySelector('.').textContent)
  if(!value){
    document.querySelector('.message').textContent = '⛔ No number'
    return
  }
  if(score < 1){
    document.querySelector('.message').textContent = 'You lost The Game'
    document.querySelector('.score').textContent = score
    console.log(score);
    return
  }
  if(value < secretNum && score != 0){
    document.querySelector('.message').textContent = 'Too Low'
    score = score - 1;
    document.querySelector('.score').textContent = score
    // console.log(score);
    return
  }
  if(value > secretNum){
    document.querySelector('.message').textContent = 'Too High'
    score = score - 1;
    document.querySelector('.score').textContent = score
    console.log(score);
    return
  }

  let newHighscore = score > currentHigh ? currentHigh = score : currentHigh
  document.querySelector('.message').textContent = '🎉 Nice'
  document.querySelector('.number').textContent = secretNum;
  document.querySelector('.highscore').textContent = newHighscore
  document.querySelector('body').style.backgroundColor = '#949ca9'
  document.querySelector('.number').style.width = '30rem'
  return
}

const handleReset = function(){
  secretNum = Math.trunc(Math.random()*20);
  score = 20;
  document.querySelector('.score').textContent
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = currentHigh;
  document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', handleReset);
document.querySelector('.check').addEventListener('click', handleEventBetter);

