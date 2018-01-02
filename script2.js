//Variable declaration
let playerWins = 0;
let computerWins = 0;
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const winner = document.getElementById('winner');
const header = document.querySelector('h3');
const rckBtn = document.getElementById('rock');
const pprBtn = document.getElementById('paper');
const scsBtn = document.getElementById('scissors');
//Event listeners
rckBtn.addEventListener("click", caseRock);
pprBtn.addEventListener("click", casePpr);
scsBtn.addEventListener("click", caseScs);
//Functions
function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "ROCK";
  } else if (choice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
};
function chooseWinner() {
  if (playerWins === 5) {
    winner.innerHTML = 'YOU ARE THE WINNER!!'
  } else if (computerWins === 5) {
    winner.innerHTML = 'COMPUTER IS THE WINNER!!'
  } else {
    winner.innerHTML = 'NO WINNER YET'
  }
  if (playerWins > 5 || computerWins > 5) {
    alert('Game is over, please refresh the page to play again');
  }
}
function caseRock(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "SCISSORS") {
    header.innerHTML = 'You win! rock beats scissors';
    playerWins++;
    playerScore.innerHTML = 'PLAYER SCORE: ' + playerWins;
    chooseWinner();
  } else if (computerSelection === "PAPER") {
    header.innerHTML = 'You lose! paper beats rock';
    computerWins++;
    computerScore.innerHTML = 'COMPUTER SCORE: ' + computerWins;
    chooseWinner();
  } else {
    header.innerHTML = 'Its a tie!';
  }
};
function casePpr(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "SCISSORS") {
    header.innerHTML = 'You lose! scissors beat paper';
    computerWins++;
    computerScore.innerHTML = 'COMPUTER SCORE: ' + computerWins;
    chooseWinner();
  } else if (computerSelection === "ROCK") {
    header.innerHTML = 'You win! Paper beats rock';
    playerWins++
    playerScore.innerHTML = 'PLAYER SCORE: ' + playerWins;
    chooseWinner();
  } else {
    header.innerHTML = 'Its a tie!';
  }
};
function caseScs(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "ROCK") {
    header.innerHTML = 'You lose! rock beats scissors';
    computerWins++
    computerScore.innerHTML = 'COMPUTER SCORE: ' + computerWins;
    chooseWinner();
  } else if (computerSelection === "PAPER") {
    header.innerHTML = 'You win! scissors beat paper';
    playerWins++
    playerScore.innerHTML = 'PLAYER SCORE: ' + playerWins;
    chooseWinner();
  } else {
    header.innerHTML = 'Its a tie!';
  }
};
