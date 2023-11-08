const choice = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)]; 
}

let computerSelection = getComputerChoice();
console.log("compSel:" + computerSelection);

const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase()

