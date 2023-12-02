'use strict';

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice')

document.querySelector('.btn--new').addEventListener('click', reset);
function reset(){
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hide');
}



//TODO: Implement the logic of the players by swithing and adding their scores

document.querySelector('.btn--hold').addEventListener('click', onHold);
let players = document.querySelectorAll('.player')
function onHold(){
  for (const i of players) {
    i.classList.contains('player--active') && i.classList.contains('player--0')
    ? i.classList.remove('player--active')
    : i.classList.add('player--active')
  }
}

document.querySelector('.btn--roll').addEventListener('click', getRandomDice);
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
let score = 0;
function getRandomDice(){

  //1. Generate dice number
  const randDice = Math.trunc(Math.random()*6)+1

  //2 Display the dice.
  dice.classList.remove('hide');
  dice.src = `dice-${randDice}.png`;

  //3. Check if the dice is == 1
  // ? Reset the score and move to other player
  // : Add the dice to the current score
  if(randDice == 1){
    score = 0
    currentScore0.textContent = score;
    return onHold();
  }

  score += randDice;
  currentScore0.textContent = score

  //4. Display the new score
}

