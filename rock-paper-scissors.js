function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log("getComputerChoice: ", choice);
}

function getHumanChoice() {
    let choice = +prompt("Choose 1, 2 or 3");
    console.log("getHumanChoice: ", choice);
}

getComputerChoice();
getHumanChoice();

let humanScore = 0;
let computerScore = 0;
