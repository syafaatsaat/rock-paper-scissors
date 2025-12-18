//console.log("Hello, World!");
const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const startButton = document.querySelector("#start");
startButton.addEventListener('click', (event) => {
    startGame();
});

const scoreboardText = document.querySelector("#scoreboard");
const messageText = document.querySelector("#message");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    return CHOICES[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock (1), Paper (2), or Scissors (3)? \nEnter the corresponding number: ");
    return CHOICES[humanChoice - 1];
}

function showEndResults() {
    let message = "";
    if (humanScore === computerScore) {
        message = "It's a DRAW! GGWP!"
    }
    else if (humanScore > computerScore) {
        message = "You WIN!!! AI CAN NEVER REPLACE HUMANITY!!!";
    }
    else {
        message = "You LOST! Skill issue?";
    }

    messageText.textContent = message;
    choiceButtons.hidden = true;
    startButton.hidden = false;
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

    scoreboardText.textContent = message;
    
    if (++roundsPlayed == 5) {
        showEndResults();
    }
}

function startGame() {
    humanScore = computerScore = roundsPlayed = 0;
    scoreboardText.textContent = "Human 0 | Computer 0";
    scoreboardText.hidden = false;

    choiceButtons.hidden = false;
    startButton.hidden = true;
    startButton.textContent = "RESTART";
    messageText.textContent = "";
}

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
choiceButtons.hidden = true;
scoreboardText.hidden = true;

