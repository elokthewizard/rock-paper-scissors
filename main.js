let userScore = 0
let computerScore = 0
const choices = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection;

const playSpace = document.createElement('div')
playSpace.classList.add('playSpace');
document.body.appendChild(playSpace);

const rockButton = document.createElement('button');
rockButton.id = 'rockButton'
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.id = 'paperButton'
paperButton.textContent = "Paper";

const scissorButton = document.createElement('button');
scissorButton.id = 'scissorButton'
scissorButton.textContent = "Scissors";

playSpace.appendChild(rockButton);
playSpace.appendChild(paperButton);
playSpace.appendChild(scissorButton);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; 
}

playSpace.addEventListener('click', (e) => {
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
    const computerSelection = getComputerChoice();

    console.log("playing...")
    const resultMessage = document.createElement('div');
    const resultSpace = document.createElement('div')
    resultMessage.textContent = `You chose ${playerSelection}, and I chose ${computerSelection}`

    if (playerSelection === computerSelection) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "It's a tie!";
        playSpace.appendChild(resultSpace);
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Paper beats rock, try again.";
        playSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Rock beats scissors, nice!";
        playSpace.appendChild(resultSpace);
        userScore = userScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Paper beats rock, nice!";
        playSpace.appendChild(resultSpace);
        userScore = userScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Scissors beat paper, try again.";
        playSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Rock beats scissors, sorry.";
        playSpace.appendChild(resultSpace);
        computerScore = computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        playSpace.appendChild(resultMessage);
        resultSpace.textContent = "Scissors beats paper, nice!";
        playSpace.appendChild(resultSpace);
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