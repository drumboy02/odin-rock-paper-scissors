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

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log("humanChoice: " + humanChoice);
        console.log("computerChoice: " + computerChoice);
        switch (`${humanChoice} ${computerChoice}`) {
            case "rock paper":
            case "paper rock":
                if (humanChoice === "paper") {
                    console.log("You win! Paper beats Rock");
                    console.log("");
                    return humanScore += 1;
                } else {
                    console.log("You lose! Paper beats Rock");
                    console.log("");
                    return computerScore += 1;
                }
            case "rock scissors":
            case "scissors rock":
                if (humanChoice === "rock") {
                    console.log("You win! Rock beats Scissors");
                    console.log("");
                    return humanScore += 1;
                } else {
                    console.log("You lose! Rock beats Scissors");
                    console.log("");
                    return computerScore += 1;
                }
            case "paper scissors":
            case "scissors paper":
                if (humanChoice === "scissors") {
                    console.log("You win! Scissors beats Paper");
                    console.log("");
                    return humanScore += 1;
                } else {
                    console.log("You lose! Scissors beats Paper");
                    console.log("");
                    return computerScore += 1;
                }
            case "rock rock":
            case "paper paper":
            case "scissors scissors":
                console.log("It's a tie. Choose again")
                console.log("");
                playRound(getHumanChoice(), getComputerChoice());
                break;
            default:
                console.log("Choose Rock, Paper, or Scissors")
                console.log("");
                playRound(getHumanChoice(), getComputerChoice());
                break;
        }
    }

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
}

playGame()