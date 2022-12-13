/*
    computer prompts user to choose rock, paper, or scissors.
    computer randomly generates a rock paper scissors choice.
    computer must
*/

function getComputerChoice() {
    const choiceArray = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    const randomChoice = Math.floor(Math.random()*choiceArray.length);
    return(choiceArray[randomChoice]);
}
getComputerChoice();

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose. Scissors beats Paper.";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose. Paper beats Rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!"
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return "It's a tie!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose. Rock beats Scissors.";
    } else {
        return "It's a tie!";
    }
}


//const playerSelection = getPlayerChoice;



function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        //get the computer and player selection
        //use selection vars as args to playRound
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        let currentRound = playRound(playerSelection, computerSelection)
        if (currentRound === "You win! Rock beats scissors!" || currentRound === "You win! Paper beats Rock!" || currentRound === "You win! Scissors beats Paper!") {
            playerPoints++;
            console.log("You won this round!");
        } else if (currentRound === "You lose. Rock beats Scissors." || currentRound === "You lose. Scissors beats Paper." || currentRound === "You lose. Paper beats Rock.") {
            computerPoints++;
            console.log("You lost this round.");
        } else {
            console.log("It's a tie!");
        }
    } 
    if (playerPoints > computerPoints) {
        console.log("You won! Lucky ducky!");
        } else {
            console.log("You lost. Better luck next time!");
    }
}

game();
        // result.push(playRound(playerSelection, computerSelection));
//store number
//store object
//store result of function 
    //result of current round

/*let number = 0
let obj = {}

let func = function nameOfFunc() {
     return ''
};
let currentRound = playRound(playerSelection, computerSelection)*/







        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

