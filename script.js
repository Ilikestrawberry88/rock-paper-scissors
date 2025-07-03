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
console.log(computerChoice());

let getHumanChoice = () => {
  let choices = prompt("Enter your choice: Rock, Paper, or Scissors");
  choices = choices.charAt(0).toUpperCase() + choices.slice(1).toLowerCase();
  if (choices !== "Rock" && choices !== "Paper" && choices !== "Scissors") {
    alert("Invalid choice! Please try again.");
    return getHumanChoice();
  }
  return choices;
}
console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;
