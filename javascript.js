// make a function to make random choice for computer.
let computerChoice = '';
function getComputerChoice(limit) {
    randomNumber = Math.round(Math.random() * limit);
    if (randomNumber <= 50) {
    computerChoice ='rock';
}   else if (randomNumber > 50 && randomNumber <= 100) {
    computerChoice ='paper';
}   else {
    computerChoice ='scissor';
}
}
getComputerChoice(150)

let computerSelection = computerChoice;


let playerSelection = prompt('Rock, Paper, or Scissors? ', '').toLocaleLowerCase();


let result = null;

// Make a function to check who win who.
function playGround(playerSelection,computerSelection) {
    console.log(computerSelection);
    if (playerSelection.toLowerCase() === computerSelection) {
         result = 'both';
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'paper') {
             result = 1;
        }   else {
             result = 2;
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'scissors') {
             result = 1;
        }   else {
             result = 2;
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
             result = 1;
        }   else {
             result = 2;
        }
    }
}

playGround(playerSelection, computerSelection);

function getResult() {
    if (result == 'both') {
        console.log('Tie!');
    } else if (result == 1) {
        console.log('You lose!');
    } else if (result == 2) {
        console.log('You win!');
    }
}

getResult();