//always use strict mode dvds
'use strict';
// //see the text content of 'message' class
// console.log(document.querySelector('.message').textContent);

// //change or manipulate the text of 'message' class
// document.querySelector('.message').textContent = '🎉Correct Number';

// //now see it in console
// console.log(document.querySelector('.message').textContent);

// //change ❔ to 13
// document.querySelector('.number').textContent = 13;

// //change score to 10
// document.querySelector('.score').textContent = 10;

// //change Highscore to 100
// document.querySelector('.highscore').textContent = 100;

// //if we want to see the value of 'guess' class (input field)

// //change or manipulate the value of 'guess' class
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// start
//Guess a random number and show it instead of ❔
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

//we add eventlistener and event handler
/* after click some event happened what you set in event handler*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  //if there are no value then write no number
  if (!guess) {
    document.querySelector('.message').textContent = '☎️No number';
  }

  //if the number matched then write correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    // change the high score value
    document.querySelector('.highscore').textContent = secretNumber;
    //when answer is correct change the background color to green
    document.querySelector('body').style.backgroundColor = 'green';
    //when answer is correct then double the width of the answer boxs
    document.querySelector('.number').style.width = '30rem';

    //when score is greater than highscore then update highscore=score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //if guess>secretNumber then write too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game';
      document.querySelector('score').textContent = 0;
    }
  }
  //if guess<secretNumber then write too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game';
      document.querySelector('score').textContent = 0;
    }
  }
});

//coding challenges #1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
