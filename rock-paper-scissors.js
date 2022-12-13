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
        return "win";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "lose";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "lose";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "win"
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return "tie";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "win";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
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
        const computerSelection = getComputerChoice();
        //console.log("Your competitor chose " + computerSelection);
        let currentRound = playRound(playerSelection, computerSelection)
        if (currentRound === "win") {
            playerPoints++;
            console.log("You won this round!");
        } else if (currentRound === "lose") {
            computerPoints++;
            console.log("You lost this round.");
        } else {
            console.log("It's a tie");
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







        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

