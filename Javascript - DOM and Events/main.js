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
console.log(secretNum)

const handleEvent = function(){
  const value = Number(document.querySelector('.guess').value);
  if(value == 0){
    document.querySelector('.message').textContent = '⛔ No number'
  }else{
    if(value === secretNum){
      document.querySelector('.message').textContent = '🎉 Nice'
      document.querySelector('.number').textContent = '🎉 Nice One!'
      document.querySelector('.again').textContent = '🎉 Success!'
      console.log('nice');
    }else{
      document.querySelector('.message').textContent = 'Opps wrong number'
      value > secretNum ? document.querySelector('.again').textContent = 'Too high' : document.querySelector('.again').textContent = 'Too Low'
      console.log('wrong');

    }  
  }
}

document.querySelector('.check').addEventListener('click', handleEvent);
