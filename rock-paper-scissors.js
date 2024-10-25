function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock";
    } else if (choice === 2) {
        choice = "paper";
    } else if (choice === 3) {
        choice = "scissors";
    }
    console.log("getComputerChoice:", choice);
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        getHumanChoice();
    } else {
        console.log("getHumanChoice:", choice);
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    getHumanChoice();
    getComputerChoice();
}

playRound();
