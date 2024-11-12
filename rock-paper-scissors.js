const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const round = document.querySelector(".round-div");
const result = document.querySelector(".result-div");
const winner = document.querySelector(".winner-div");
const score = document.querySelector(".score-div");
const roundInfo = document.querySelector(".round-info-div");

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
        humanChoice = humanChoice.toLowerCase();
        roundInfo.innerText = "****** Round #" + roundNumber + " Result ******";
        result.innerText = "Your choice: " + humanChoice + "\n";
        result.innerText += "Computers Choice: " + computerChoice;
        let tieOrInvalid = false;
        
        switch (`${humanChoice} ${computerChoice}`) {
            case "rock paper":
            case "paper rock":
                if (humanChoice === "paper") {
                    winner.innerText = "You won! Paper beats Rock";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lost! Paper beats Rock";                    
                    computerScore += 1;
                    break;
                }
            case "rock scissors":
            case "scissors rock":
                if (humanChoice === "rock") {
                    winner.innerText = "You won! Rock beats Scissors";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lost! Rock beats Scissors";                    
                    computerScore += 1;
                    break;
                }
            case "paper scissors":
            case "scissors paper":
                if (humanChoice === "scissors") {
                    winner.innerText = "You won! Scissors beats Paper";                    
                    humanScore += 1;
                    break;
                } else {
                    winner.innerText = "You lost! Scissors beats Paper";                    
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
            score.style.display = "block";
            score.innerText = "Player Score: " + humanScore + "\n";
            score.innerText += "Computer Score: " + computerScore;
            roundNumber += 1;
            round.textContent = `***** Round ${roundNumber} *****`;
            winner.style.display = "block";
        }  else {
            roundNumber = roundNumber;
            winner.style.display = "block";
        }

        if (roundNumber === 6) {
            if (humanScore > computerScore) {
                round.innerText = "***** You Win! *****";
                round.appendChild(score);
                roundInfo.appendChild(winner);
                btnRock.removeEventListener('click', handleClickRock);
                btnPaper.removeEventListener('click', handleClickPaper);
                btnScissors.removeEventListener('click', handleClickScissors);
                return;
            } else {
                round.innerText = "***** You Lose! *****";
                round.appendChild(score);
                roundInfo.appendChild(winner);
                btnRock.removeEventListener('click', handleClickRock);
                btnPaper.removeEventListener('click', handleClickPaper);
                btnScissors.removeEventListener('click', handleClickScissors);
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