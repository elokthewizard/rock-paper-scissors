let playerScore = 0
let computerScore = 0
const choices = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection;

const gameSpace = document.createElement('div')
gameSpace.classList.add('gameSpace');
document.body.appendChild(gameSpace);

const rockButton = document.createElement('button');
rockButton.id = 'rockButton'
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.id = 'paperButton'
paperButton.textContent = "Paper";

const scissorButton = document.createElement('button');
scissorButton.id = 'scissorButton'
scissorButton.textContent = "Scissors";

gameSpace.appendChild(rockButton);
gameSpace.appendChild(paperButton);
gameSpace.appendChild(scissorButton);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}

gameSpace.addEventListener('click', (e) => {
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

let resultMessage = document.createElement('div');
let resultSpace = document.createElement('div');

function playRound () {
    const computerSelection = getComputerChoice();

    resultMessage.textContent = `You chose ${playerSelection}, and I chose ${computerSelection}`;

    console.log("playing...")

    if (playerSelection === computerSelection) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "It's a tie!";
        gameSpace.appendChild(resultSpace);
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Paper beats rock, try again.";
        gameSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Rock beats scissors, nice!";
        gameSpace.appendChild(resultSpace);
        playerScore = playerScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Paper beats rock, nice!";
        gameSpace.appendChild(resultSpace);
        playerScore = playerScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Scissors beat paper, try again.";
        gameSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Rock beats scissors, sorry.";
        gameSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        gameSpace.appendChild(resultMessage);
        resultSpace.textContent = "Scissors beats paper, nice!";
        gameSpace.appendChild(resultSpace);
        playerScore = playerScore++;
    }
    
}



// function playGame(){
//     playRound();
//     if (playerScore > computerScore) {
//         console.log("You win!")
//     } else {
//         console.log("Too bad, you lost!")
//     }
// }

// playGame()