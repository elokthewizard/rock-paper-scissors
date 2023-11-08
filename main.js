const choices = ["ROCK", "PAPER", "SCISSORS"];

// console.log(choices)
// console.log(choices[0])
// console.log(choices[1])
// console.log(choices[2])


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}

const computerSelection = getComputerChoice();
console.log(getComputerChoice());
console.log("compSel: " + computerSelection);
const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase()
console.log("userSel: " + playerSelection)

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Tie!");
    } 
}

playRound()