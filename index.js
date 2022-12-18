const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

let playerSelection;
const computerSelection = getComputerChoice();

function game() {
  let result;
  let human = 0;
  let alien = 0;
  let draw = 0;
  for (i = 0; i < 5; i++) {
    result = playRound(playerSelection, getComputerChoice());
    if (result.includes('Win')) {
      human++;
    } else if (result.includes('Lose')) {
      alien++;
    } else if (result.includes('Draw')) {
      draw++;
    }
  }
  console.log(human, alien, draw);

  if (human > alien) {
    console.log('Human wins');
  } else if (alien > human) {
    console.log('Alien wins');
  } else if (human === alien) {
    console.log('No winner No Vanquished');
  }
}

// console.log(playRound(playerSelection, computerSelection));
const btnClick = document.querySelector('.btn');

btnClick.addEventListener('click', () => {
  playerSelection = prompt('Rock, Paper, Scissors');
  game();
});
// console.log(result);
