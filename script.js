
// get player choices
function playerChoices() {
  let playerInput =  prompt(`Rock Paper Scissors? | Whose win 5 rounds first will be the winner.`);
  let plChoice = (playerInput === null) ? "You cancelled the game."
  : playerInput.trim().toLowerCase();
  return plChoice;
  }

// get PC choices
function pcChoices() {
  function getRandomNumFromZeroTo2(max) {
    let aNum0To2 = Math.round(Math.random() * max);
    return aNum0To2;
  }

  function choices(randomNum) {
    let theChoice = (randomNum == 0) ? "rock" :
    (randomNum == 1) ? "paper": "scissors";
    return theChoice;
    } 
  return choices(getRandomNumFromZeroTo2(2));
}


// the thing to play the game
function playGame() {
let humanPoints = 0;
let pcPoints = 0;
function playRound(humanChoice, computerChoice) {

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanPoints += 1;
      console.log(`You win! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}.`);
    } else if (computerChoice === humanChoice) {
      humanPoints += 0;
      pcPoints += 0;
      console.log(`A draw! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}.`);
    } else if (computerChoice === "paper") {
      pcPoints += 1;
      console.log(`You lose! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}`);
    }
  } 
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanPoints += 1;
      console.log(`You win! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}.`);
    } else if (computerChoice === humanChoice) {
      humanPoints += 0;
      pcPoints += 0;
      console.log(`A draw! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}.`);
    } else if (computerChoice === "scissors") {
      pcPoints += 1;
      console.log(`You lose! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}`);
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanPoints += 1;
      console.log(`You win! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}.`);
    } else if (computerChoice === humanChoice) {
      humanPoints += 0;
      pcPoints += 0;
      console.log(`A draw! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}`);
    } else if (computerChoice === "rock") {
      pcPoints += 1;
      console.log(`You lose! | Human's choice: ${humanChoice} | Computer's choice: ${computerChoice}.`);
      console.log(`Human's score: ${humanPoints} | Computer's score: ${pcPoints}`);
    }
  }
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    if (humanChoice === "You cancelled the game.") {
      humanPoints += 7;
      console.log("You cancelled the game.");
    } else if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
      console.log("Please type 'Rock' or 'Paper' or 'Scissors' to play.");
    }
  }
}
  do {
    const humanChoices = playerChoices();
    const computerChoices = pcChoices()
    playRound(humanChoices, computerChoices);

      switch (humanPoints) {
        case 5:
          console.log(`You are the winner!`);
            break;
        }
    
      switch(pcPoints) {
          case 5:
            console.log(`Computer is the winner!`);
            break;
        }
    } while (humanPoints < 5 && pcPoints < 5);
}

playGame();


