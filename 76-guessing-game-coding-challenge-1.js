// Guess My Number game

//76. Coding Challenge 1

'use strict';

//Define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Create a score variable and set it to 20 so that we can decrease
//the score by one with each wrong guess

let score = 20;

//Display secretNumber for developmental purposes
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //Log guess to a variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //Check if there actually is a value for guess, and if not,
  //output a response

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ☹️ ';
  }
  //do a series of else if statements to implement each scenario:
  //if guess is correct, if guess is too high, if guess is too low

  //if guess is the correct number
  else if (guess === secretNumber) {
    //Display message "Correct Number!"
    document.querySelector('.message').textContent = 'Correct Number! 👍';

    //Display the secretNumber
    document.querySelector('.number').textContent = secretNumber;

    //Select the entire body for CSS background-color of green
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Increase the width of secretNumber display
    document.querySelector('.number').style.width = '30rem';
  }

  //if the guess is greater than the secretNumber,
  //and the score is greater than zero,
  //decrease the score by one for each guess that is too high
  //and display a message "Too high!"" and display the score.
  //When the score shows 0, it stays at 0.
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';

      //decrease score by one for each incorrect guess and
      //display the new score.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ☹️';
      //Display Score of 0
      document.querySelector('.score').textContent = 0;
    }
  }

  //if the guess is lower than the secretNumber
  //and the score is greater than zero,
  //decrease the score by one for each guess that is too high
  //and display a message "Too high!"" and display the score.
  //When the score shows 0, it stays at 0.
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';

      //decrease score by one for each incorrect guess and
      //display the new score.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ☹️';
      //Display Score of 0
      document.querySelector('.score').textContent = 0;
    }
  }
});

//When player presses the "Again" button to play
//We want to reset all the messages.
//We want to generate a new secretNumber
//We want the background to go back to black
//We want the width of the secretNumber rectangle
//to go back to it's original size.
//We want to reset the score to 20
//We want the input number box to be blank at the start

document.querySelector('.again').addEventListener('click', function () {
  //Reset the score to 20
  score = 20;

  //Display the reset score of 20
  document.querySelector('.score').textContent = score;

  //Generate a new secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Display secretNumber for developmental purposes
  document.querySelector('.number').textContent = secretNumber;

  //Display an empty input box
  document.querySelector('.guess').value = '';

  //Reset the message to "Start guessing..."
  document.querySelector('.message').textContent = 'Start guessing... ';

  //Select the entire body to reset CSS background-color of black
  document.querySelector('body').style.backgroundColor = '#222';

  //Decrease the width of secretNumber display to original size
  document.querySelector('.number').style.width = '15rem';
});
