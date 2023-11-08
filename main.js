const choices = ["ROCK", "PAPER", "SCISSORS"];

// console.log(choices)
// console.log(choices[0])
// console.log(choices[1])
// console.log(choices[2])
let userScore = 0
let computerScore = 0

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
        computerScore = computerScore++;
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log("Rock beats scissors, nice!");
        userScore = userScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        console.log("Paper beats rock, nice!");
        userScore = userScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        console.log("Scissors beat paper, try again.");
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log("Rock beats scissors, sorry.");
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log("Scissors beats paper, nice!");
        userScore = userScore++;
    }
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (userScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("Too bad, you lost!")
    }
}

playGame()