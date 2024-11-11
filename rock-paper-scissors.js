const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const round = document.querySelector(".round-div");
const result = document.querySelector(".result-div");
const winner = document.querySelector(".winner-div");
const score = document.querySelector(".score-div");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock";
    } else if (choice === 2) {
        choice = "paper";
    } else if (choice === 3) {
        choice = "scissors";
    }

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let roundNumber = 1;
    round.textContent = `***** Round ${roundNumber} *****`;
    
    function playRound(humanChoice, computerChoice) {
        console.log("roundNumber: " + roundNumber);
        humanChoice = humanChoice.toLowerCase();
        result.innerText = "humanChoice: " + humanChoice + "\n";
        result.innerText += "computerChoice: " + computerChoice;
        let tieOrInvalid = false;
        
        switch (`${humanChoice} ${computerChoice}`) {
            case "rock paper":
            case "paper rock":
                if (humanChoice === "paper") {
                    winner.innerText = "You win! Paper beats Rock";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lose! Paper beats Rock";                    
                    computerScore += 1;
                    break;
                }
            case "rock scissors":
            case "scissors rock":
                if (humanChoice === "rock") {
                    winner.innerText = "You win! Rock beats Scissors";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lose! Rock beats Scissors";                    
                    computerScore += 1;
                    break;
                }
            case "paper scissors":
            case "scissors paper":
                if (humanChoice === "scissors") {
                    winner.innerText = "You win! Scissors beats Paper";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lose! Scissors beats Paper";                    
                    computerScore += 1;
                    break;
                }
            case "rock rock":
            case "paper paper":
            case "scissors scissors":
                tieOrInvalid = true;
                winner.innerText = "It's a tie. Choose again";          
                round.innerText = `***** Tie Breaker *****`
                break;
            default:
                tieOrInvalid = true;
                winner.innerText = "Choose Rock, Paper, or Scissors";            
        }

        if (!tieOrInvalid) {
            score.innerText = "humanScore: " + humanScore + "\n";
            score.innerText += "computerScore: " + computerScore;
            roundNumber += 1;
            round.textContent = `***** Round ${roundNumber} *****`;
        }  else {
            roundNumber = roundNumber;
        }

        if (roundNumber === 6) {
            if (humanScore > computerScore) {
                round.innerText = "***** You Win! *****";
                btnRock.removeEventListener('click', handleClickRock);
                btnPaper.removeEventListener('click', handleClickPaper);
                btnScissors.removeEventListener('click', handleClickScissors);
                return;
            } else {
                round.innerText = "***** You Lose! *****";
                btnRock.removeEventListener('click', handleClickRock);
                btnPaper.removeEventListener('click', handleClickPaper);
                btnScissors.removeEventListener('click', handleClickScissors);
                return;
            }
        }
    }
    
    function handleClickRock() {
        const playerSelection = "rock";
        playRound(playerSelection, getComputerChoice());
    }

    function handleClickPaper() {
        const playerSelection = "paper";
        playRound(playerSelection, getComputerChoice());
    }

    function handleClickScissors() {
        const playerSelection = "scissors";
        playRound(playerSelection, getComputerChoice());
    }

    btnRock.addEventListener('click', handleClickRock);
    btnPaper.addEventListener('click', handleClickPaper);
    btnScissors.addEventListener('click', handleClickScissors);              
}

playGame()