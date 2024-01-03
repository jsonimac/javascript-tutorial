'use strict';

// 1. Implement reset
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');
let players = document.querySelectorAll('.player');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');



document.querySelector('.btn--new').addEventListener('click', reset);
function reset(){
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hide');
  rollScore = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

}

// 2. Impletment Roll Dice
document.querySelector('.btn--roll').addEventListener('click', rollDice);
let rollScore = 0;
let activePlayer = 0;
function rollDice(){
  dice.classList.remove('hide');
  let randomDice = Math.trunc(Math.random()*6)+1;

  if(randomDice == 1){
    rollScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = rollScore;
    activePlayer = activePlayer == 1 ? 0 : 1

    for (const player of players) {
      player.classList.contains('player--active')
      ? player.classList.remove('player--active')
      : player.classList.add('player--active')
    }
    
  }

  if(player0.classList.contains('player--active')){
    rollScore += randomDice;
    current0.textContent = rollScore;
  }
  if(player1.classList.contains('player--active')){
    rollScore += randomDice;
    current1.textContent = rollScore;
  }

  document.querySelector('.dice').src = `dice-${randomDice}.png`;
}

// 3. Implement Hold
document.querySelector('.btn--hold').addEventListener('click', holdScore);
function holdScore(){
  let addScore = Number(document.querySelector(`#current--${activePlayer}`).textContent);
  let total = Number(document.querySelector(`#score--${activePlayer}`).textContent);
  total += addScore;
  document.querySelector(`#score--${activePlayer}`).textContent = total;
  rollScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 1 ? 0 : 1
  
  for (const player of players) {
    player.classList.contains('player--active')
    ? player.classList.remove('player--active')
    : player.classList.add('player--active')
  }

  //Display the winner when the score gets >= 100
  let activeP = Number(document.querySelector(`#score--${activePlayer}`).textContent)
  if(activeP >= 100){
    document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer} Wins`;
  }
}
