// Guess My Number game

'use strict';

//Define secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//Display secretNumber for developmental purposes
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //Log guess to a variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //Check if there actually is a value for guess, and if not,
  //output a response

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ☹️';
  }
  //do a series of else if statements to implement each scenario:
  //if guess is correct, if guess is too high, if guess is too low
});
