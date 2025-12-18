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

function playRound(humanChoice, computerChoice = getComputerChoice()) {
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

    let message = "Human " + humanScore + " | Computer " + computerScore;

    const scoreBoard = document.querySelector("#scoreboard");
    scoreBoard.textContent = message;
}

function playGame() {
    humanScore = computerScore = 0;
    alert("Welcome to Rock Paper Scissors!\nYou're playing against the computer.")
    
    //for (let i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    //}

    let message = "Human " + humanScore + " | Computer " + computerScore + "\n";
    if (humanScore === computerScore) {
        message += "It's a DRAW! GGWP!"
    }
    else if (humanScore > computerScore) {
        message += "You WIN!!! AI CAN NEVER REPLACE HUMANITY!!!";
    }
    else {
        message += "You LOST! Skill issue?";
    }

    alert(message);
}

//playGame();

let choiceButtons = document.querySelector('#choice-buttons');
choiceButtons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            //console.log("ROCK!");
            playRound(CHOICES[0]);
            break;
        case 'paper':
            //console.log("PAPER!");
            playRound(CHOICES[1]);
            break;
        case 'scissors':
            //console.log("SCISSORS!");
            playRound(CHOICES[2]);
            break;
    }
});