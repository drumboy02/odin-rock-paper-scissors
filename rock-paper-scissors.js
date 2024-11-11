const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const round = document.querySelector(".round-div");
const result = document.querySelector(".result-div");
const score = document.querySelector(".score-div");
const winner = document.querySelector(".winner-div");

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

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors");

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
                playRound(getHumanChoice(), getComputerChoice());
                break;
            default:
                tieOrInvalid = true;
                winner.innerText = "Choose Rock, Paper, or Scissors";            
                playRound(getHumanChoice(), getComputerChoice());
        }
        console.log("tieOrInvalid: " + tieOrInvalid);
        if (!tieOrInvalid) {
            score.innerText = "humanScore: " + humanScore + "\n";
            score.innerText += "computerScore: " + computerScore;
            roundNumber += 1;
            round.textContent = `***** Round ${roundNumber} *****`;
        } else {
            roundNumber = roundNumber;
        }
    }
    
    btnRock.addEventListener('click', () => {
        const playerSelection = "rock";
        playRound(playerSelection, getComputerChoice());
    })

    btnPaper.addEventListener('click', () => {
        const playerSelection = "paper";
        playRound(playerSelection, getComputerChoice());
    })

    btnScissors.addEventListener('click', () => {
        const playerSelection = "scissors";
        playRound(playerSelection, getComputerChoice());
    })
/*
    console.log("***** Round 1 *****");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
    console.log("");
    console.log("***** Round 2 *****");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
    console.log("");
    console.log("***** Round 3 *****");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
    console.log("");
    console.log("***** Round 4 *****");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
    console.log("");       
    console.log("***** Round 5 *****");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
    console.log("");

    if (humanScore > computerScore) {
        console.log("***** You Win! *****");
    } else {
        console.log("***** You Lose! *****");
    }
*/              
}

playGame()