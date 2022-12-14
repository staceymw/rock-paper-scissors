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
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "win"
    } else if (playerSelection === "rock" && computerSelection === "Rock"){
        return "tie";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "win";
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "lose";
    } else {
        return "tie";
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playerSelection.toLowerCase());
        const computerSelection = getComputerChoice();
        console.log("Your competitor chose " + computerSelection);
        let currentRound = playRound(playerSelection, computerSelection)
        if (currentRound === "win") {
            playerPoints++;
            console.log("You won this round!");
        } else if (currentRound === "lose") {
            computerPoints++;
            console.log("You lost this round.");
        } else if (currentRound === "tie") {
            console.log("It's a tie");
        }
    } 
    if (playerPoints > computerPoints) {
        console.log("You won the game! Lucky ducky!");
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







        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

