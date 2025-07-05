let computerChoice = () => {
  let choices = Math.floor(Math.random() * 3);
  switch (choices) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

let getHumanChoice = () => {
  let choices = prompt("Enter your choice: Rock, Paper, or Scissors");
  choices = choices.charAt(0).toUpperCase() + choices.slice(1).toLowerCase();
  if (choices !== "Rock" && choices !== "Paper" && choices !== "Scissors") {
    alert("Invalid choice! Please try again.");
    return getHumanChoice();
  }
  return choices;
}

// Function to determine the winner
let playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  
  let playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    return console.log("It's a tie.");
  } 
  else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
           humanChoice == "Scissors" && computerChoice == "Paper" ||
           humanChoice == "Paper" && computerChoice == "Rock"
  ) {
    humanScore++;
    return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

if (computerScore < 5 && humanScore < 5) {
  const humanSelection = getHumanChoice();
  const computerSelection = computerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (computerScore < 5 && humanScore < 5) {
      const humanSelection = getHumanChoice();
      const computerSelection = computerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (computerScore < 5 && humanScore < 5) {
      const humanSelection = getHumanChoice();
      const computerSelection = computerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

      if (computerScore < 5 && humanScore < 5) {
      const humanSelection = getHumanChoice();
      const computerSelection = computerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
      
        if (computerScore < 5 && humanScore < 5) {
          const humanSelection = getHumanChoice();
          const computerSelection = computerChoice();
          playRound(humanSelection, computerSelection);
          console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
          if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
          } else if (humanScore < computerScore) {
            console.log("Sorry! You lose the game.");
          } else {
            console.log("It's a draw!");
          }
        }
      }
    }
  }
}


}
playGame();