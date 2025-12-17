//console.log("Hello, World!");
const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    return CHOICES[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock (1), Paper (2), or Scissors (3)? \nEnter the corresponding number: ");
    return CHOICES[humanChoice - 1];
}