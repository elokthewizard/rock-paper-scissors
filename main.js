const choices = ["ROCK", "PAPER", "SCISSORS"];

// console.log(choices)
// console.log(choices[0])
// console.log(choices[1])
// console.log(choices[2])


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}


// console.log("compSel: " + computerSelection);
// console.log("userSel: " + playerSelection)

function playRound () {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase()

    if (playerSelection === computerSelection) {
        console.log("Tie!");
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        console.log("Paper beats rock, try again.");
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log("Rock beats scissors, nice!");
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        console.log("Paper beats rock, nice!");
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        console.log("Scissors beat paper, try again.");
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log("Rock beats scissors, sorry.");
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log("Scissors beats paper, nice!");
    }
}

playRound()
playRound()
playRound()
playRound()
playRound()