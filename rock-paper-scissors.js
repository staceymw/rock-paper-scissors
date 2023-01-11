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

let playerPoints = 0;
let computerPoints = 0;

function game(event) {
    const playerSelection = event.path[0].id; 
    const computerSelection = getComputerChoice();
    const competitorChoice = document.getElementById("competitor-choice");
    competitorChoice.innerHTML = "Your competitor chose " + computerSelection;

    let currentRound = playRound(playerSelection, computerSelection);
    calculateStore(currentRound);
    handleEndGame(playerPoints, computerPoints);
    
}

function calculateStore(currentRound) {
    if (currentRound === "win") {
        playerPoints++;
        //console.log("You won this round!");
        const playerScore = document.getElementById("player-score");
        playerScore.innerHTML = playerPoints;
    } else if (currentRound === "lose") {
        computerPoints++;
        //console.log("You lost this round.");
        const competitorScore = document.getElementById("competitor-score");
        competitorScore.innerHTML = computerPoints;
    } else if (currentRound === "tie") {
        console.log("It's a tie");
    }
}

function handleEndGame(playerPoints, computerPoints) {
    if (playerPoints === 5) {
        //console.log("You won the game! Lucky ducky!");
        const playerWins = document.getElementById("game-winner");
        playerWins.innerHTML = "You won the game! Lucky Ducky!";

        const endGame = document.querySelectorAll(".selection");
        endGame.forEach(element => {
           element.disabled = true;
        });

        const endMessage = document.getElementById("end-message");
        endMessage.innerHTML = "Please refresh the page to play again!";
       
        
     } else if (computerPoints === 5) {
         //console.log("You lost. Better luck next time!");
         const competitorWins = document.getElementById("game-winner");
         competitorWins.innerHTML = "You lost. Better luck next time!";
         const endGameTwo = document.querySelectorAll(".selection");
         console.log(endGameTwo)


         endGameTwo.forEach(element => {
            element.style.pointerEvents = 'none';
         });
         
         const endMessage = document.getElementById("end-message");
         endMessage.innerHTML = "Please refresh the page to play again!";
     }
}

let buttons = document.querySelectorAll(".selection");
buttons.forEach(element => {
   element.addEventListener('click', (event) => game(event));
});


   
