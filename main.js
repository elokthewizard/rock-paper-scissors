let userScore = 0
let computerScore = 0
const choices = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection;

const div = document.createElement('div')
div.classList.add('gameSpace');
document.body.appendChild(div);

const rockButton = document.createElement('button');
rockButton.id = 'rockButton'
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.id = 'paperButton'
paperButton.textContent = "Paper";

const scissorButton = document.createElement('button');
scissorButton.id = 'scissorButton'
scissorButton.textContent = "Scissors";

div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorButton);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}

div.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'rockButton':
            playerSelection = rockButton.textContent.toUpperCase();
            break;
        case 'paperButton':
            playerSelection = paperButton.textContent.toUpperCase();
            break;
        case 'scissorButton':
            playerSelection = scissorButton.textContent.toUpperCase();
            break;
    }      
    playRound()
})

function playRound () {
    console.log("playing...")
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(`You chose ${playerSelection}, and I chose ${computerSelection}`)

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


// function playGame(){
//     playRound();
//     if (userScore > computerScore) {
//         console.log("You win!")
//     } else {
//         console.log("Too bad, you lost!")
//     }
// }

// playGame()