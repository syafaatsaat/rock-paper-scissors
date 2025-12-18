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
const computerBox = document.querySelector("#computer-box");

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
    hideGameElements(true);
}

function showComputerChoice(choice) {
    switch (choice) {
        case 'rock':
            computerBox.textContent = "✊";
            break;
        case 'paper':
            computerBox.textContent = "✋";
            break;
        case 'scissors':
            computerBox.textContent = "✌";
            break;
    }
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    let roundState = "DRAW";

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        roundState = "HUMAN WINS";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        roundState = "HUMAN WINS";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        roundState = "HUMAN WINS";
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        roundState = "COMPUTER WINS";
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        roundState = "COMPUTER WINS";
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        roundState = "COMPUTER WINS";
    }

    let message = "Human " + humanScore + " | Computer " + computerScore;

    scoreboardText.textContent = message;
    showComputerChoice(computerChoice);
    disableChoiceButtons(true);

    messageText.textContent = "ROUND " + roundsPlayed + " - " + roundState;
    
    setTimeout(() => {
        roundsPlayed++;
        messageText.textContent = "ROUND " + roundsPlayed;
        computerBox.textContent = "?";
        disableChoiceButtons(false);
        resetChoiceButtonsState();

        if (roundsPlayed > 5) {
            showEndResults();
        }
    }, 5000);
}

function startGame() {
    humanScore = computerScore = 0;
    roundsPlayed = 1;
    scoreboardText.textContent = "Human 0 | Computer 0";
    startButton.textContent = "RESTART";
    messageText.textContent = "ROUND " + roundsPlayed;
    hideGameElements(false);
}

function changeButtonToGreen(element) {
    element.classList.add("green-box");
}

function resetChoiceButtonsState() {
    for (let choiceButton of choiceButtons.children) {
        choiceButton.classList.remove("green-box");
    }
}

let choiceButtons = document.querySelector('#choice-buttons');
choiceButtons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            //console.log("ROCK!");
            playRound(CHOICES[0]);
            changeButtonToGreen(target);
            break;
        case 'paper':
            //console.log("PAPER!");
            playRound(CHOICES[1]);
            changeButtonToGreen(target);
            break;
        case 'scissors':
            //console.log("SCISSORS!");
            playRound(CHOICES[2]);
            changeButtonToGreen(target);
            break;
    }
});

function disableChoiceButtons(disable) {
    for (let choiceButton of choiceButtons.children) {
        choiceButton.disabled = disable;
    }
}

function hideGameElements(hidden) {
    for (let choiceButton of choiceButtons.children) {
        choiceButton.hidden = hidden;
    }
    scoreboardText.hidden = hidden;
    scoreboardText.hidden = hidden;
    
    startButton.hidden = !hidden;

    if (hidden) {
        computerBox.setAttribute("style", "display: none;");
    }
    else {
        computerBox.setAttribute("style", "display: flex;");
    }
}

hideGameElements(true);
