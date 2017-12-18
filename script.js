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
function playRound(playerSelection, computerSelection) {
  const playerMove = playerSelection.toUpperCase();
  if (playerMove === computerSelection) {
    return "It's a tie motherfucker!";
  } else if (playerMove === "ROCK" && computerSelection === "SCISSORS") {
    return "You win! Rock smashes Scissors";
  } else if (playerMove === "ROCK" && computerSelection === "PAPER") {
    return "You lose! Paper covers rock biatch";
  } else if (playerMove === "PAPER" && computerSelection === "ROCK") {
    return "You win! Paper covers rock biatch";
  } else if (playerMove === "PAPER" && computerSelection === "SCISSORS") {
    return "You lose! Your paper got cut up";
  } else if (playerMove === "SCISSORS" && computerSelection === "PAPER") {
    return "You win! You cut that bitch up good!";
  } else {
    return "You lose! That rock broke yo ass";
  }
}
const computerSelection = computerPlay()
function game() {
 let playerSelection = prompt("Make your choice");
 alert(playRound(playerSelection, computerSelection));
}
game();
