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
//const header = document.querySelector('h3');
const rckBtn = document.getElementById('rock');
const pprBtn = document.getElementById('paper');
const scsBtn = document.getElementById('scissors');
rckBtn.addEventListener("click", caseRock);
pprBtn.addEventListener("click", casePpr);
scsBtn.addEventListener("click", caseScs);
function caseRock(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "SCISSORS") {
    alert('You win! rock beats scissors')
  } else if (computerSelection === "PAPER") {
    alert('You lose! paper beats rock')
  } else {
    alert('Its a tie!')
  }
};
function casePpr(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "SCISSORS") {
    alert('You lose! scissors beat paper')
  } else if (computerSelection === "ROCK") {
    alert('You win! Paper beats rock')
  } else {
    alert('Its a tie!')
  }
};
function caseScs(computerSelection) {
  computerSelection = computerPlay()
  if(computerSelection === "ROCK") {
    alert('You lose! rock beats scissors')
  } else if (computerSelection === "PAPER") {
    alert('You win! scissors beat paper')
  } else {
    alert('Its a tie!')
  }
};
