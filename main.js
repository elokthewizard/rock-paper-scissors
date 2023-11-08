const choices = ["ROCK", "PAPER", "SCISSORS"];

// console.log(choices)
// console.log(choices[0])
// console.log(choices[1])
// console.log(choices[2])


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}

const computerSelection = getComputerChoice();
console.log("compSel: " + computerSelection);
const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase()
console.log("userSel: " + playerSelection)

function playRound () {
    if (playerSelection === computerSelection) {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("Tie!");
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        console.log("Paper beats rock, try again!");
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log("Rock beats scissors, nice!");
    }
}

playRound()