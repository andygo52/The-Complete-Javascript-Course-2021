// 82. PROJECT#3: Pig Game
// 83. Rolling the Dice
// 84. Switching the Active Player

'use strict';

//To begin with, we are going to set scores for Player 1 and Player 2 to 0
//and we are going to hide the image of the die.

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Create an array to keep track of the scores for player 0 and player 1
//Since it's an array, you can use const
const scores = [0, 0];

//Create a variable to keep track of the currentScore.
let currentScore = 0;

//Create a variable to keep track of current player.
//The game starts with player 0.
let activePlayer = 0;

//Create a variable to keep track of the state of the game
let playing = true;

//Create a function to switch active player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for a rolled 1:  if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore; //CHANGE LATER
    } else {
      //switch to next player
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      //toggle adds class if it's not there and removes it if it is.
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //console.log(scores[activePlayer]);  //for debugging purposes
    //scores[1] = scores + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score >= 100
    if (scores[activePlayer] >= 20) {
      // Finish game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //Remove active player class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player.
      switchPlayer();
    }
  }
});
