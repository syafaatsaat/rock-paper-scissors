//console.log("Hello, World!");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return choices[randomNumber];
}