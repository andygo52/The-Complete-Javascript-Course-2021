// 82. PROJECT#3: Pig Game

'use strict';

//To begin with, we are going to set scores for Player 1 and Player 2 to 0
//and we are going to hide the image of the die.

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Start conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
