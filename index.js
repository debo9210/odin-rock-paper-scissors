const btns = document.querySelectorAll('[data-name]');
const displayResult = document.querySelector('.displayResult > p');
const humanResult = document.querySelector('.human');
const alienResult = document.querySelector('.alien');
const restart = document.querySelector('.restart');

// get computer choice
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
};

// play functionality
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! ${computerSelection} is identical to ${playerSelection}`;
  }
}

let human = 0,
  alien = 0;

function playGame() {
  const result = playRound(this.dataset.name, getComputerChoice());

  if (result.includes('Win')) {
    human++;
    humanResult.textContent = human;
  } else if (result.includes('Lose')) {
    alien++;
    alienResult.textContent = alien;
  }

  if (human === 5) {
    displayResult.textContent = 'Human wins';
  } else if (alien === 5) {
    displayResult.textContent = 'Alien wins';
  } else {
    displayResult.textContent = result;
  }
}

btns.forEach((btn) => btn.addEventListener('click', playGame));

//restart game
restart.addEventListener('click', () => {
  displayResult.textContent = '';
  alienResult.textContent = 0;
  humanResult.textContent = 0;
  human = 0;
  alien = 0;
});
