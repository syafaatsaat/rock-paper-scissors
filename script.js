//console.log("Hello, World!");
const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    return CHOICES[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock (1), Paper (2), or Scissors (3)? \nEnter the corresponding number: ");
    return CHOICES[humanChoice - 1];
}

function playRound(humanChoice, computerChoice) {
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
    }

    console.log("Human " + humanScore + " | Computer " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);