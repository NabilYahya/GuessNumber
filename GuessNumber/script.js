'use strict';

/*
//document.queryselector with textContent
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 20;
document.querySelector('.message').textContent = `Correct Number ✔ `;
document.querySelector('.score').textContent = 15;

//document.queryselector with value
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);
  // When there is no number
  if (!guessNum) {
    displaymessage('No Number Entered 🚫');
    /* document.querySelector('.message').textContent = 'No Number Entered 🚫'; */
  }
  //When player Win
  else if (guessNum === secretNumber) {
    displaymessage('Coreect you win 🏆');
    /*   document.querySelector('.message').textContent = 'Coreect you win 🏆'; */
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guessNum !== secretNumber) {
    displaymessage(guessNum > secretNumber ? 'To High 📈' : 'To Low 📉');
    /*  document.querySelector('.message').textContent =
      guessNum > secretNumber ? 'To High 📈' : 'To Low 📉'; */
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      displaymessage('you lost');
      /*  document.querySelector('.message').textContent = 'you lost'; */
    }
    if (score < 0) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        'you lost pleas press Agin to play';
    }
  }
});
//When GuessNumber is Hight
/*  else if (guessNum > secretNumber) {
    document.querySelector('.message').textContent = 'To High 📈';
    if (guessNum != secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        document.querySelector('.message').textContent = 'you lost';
      }
      if (score < 0) {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent =
          'you lost pleas press Agin to play';
      }
    }
  }
  //When GuessNumber is Low
  else if (guessNum < secretNumber) {
    document.querySelector('.message').textContent = 'To Low 📉';
    if (guessNum != secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        document.querySelector('.message').textContent = 'you lost';
      }
      if (score < 0) {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent =
          'you lost pleas press Agin to play';
      }
    }
  }
}); */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing ...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
