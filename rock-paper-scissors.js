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
    let choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        getHumanChoice();
    } else {

        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("humanChoice: " + humanChoice);
    console.log("computerChoice: " + computerChoice);
    switch (`${humanChoice} ${computerChoice}`) {
        case "rock paper":
        case "paper rock":
            if (humanChoice === "paper") {
                humanScore += 1;
                console.log("You win! Paper beats Rock");
                break;
            } else {
                computerScore += 1;
                console.log("You lose! Paper beats Rock");
                break;
            }
        case "rock scissors":
        case "scissors rock":
            if (humanChoice === "rock") {
                humanScore += 1;
                console.log("You win! Rock beats Scissors");
                break;
            } else {
                computerScore += 1;
                console.log("You lose! Rock beats Scissors");
                break;
            }
        case "paper scissors":
        case "scissors paper":
            if (humanChoice === "scissors") {
                humanScore += 1;
                console.log("You win! Scissors beats Paper");
                break;
            } else {
                computerScore += 1;
                console.log("You lose! Scissors beats Paper");
                break;
            }
        default:
            console.log("It's a tie. Choose again")
            playRound(getHumanChoice(), getComputerChoice());
            break;
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);
playRound(getHumanChoice(), getComputerChoice());
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);
playRound(getHumanChoice(), getComputerChoice());
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);