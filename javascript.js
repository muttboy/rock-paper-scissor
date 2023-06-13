let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.getElementById('playerScore');
const computerScoreBoard = document.getElementById('computerScore');
const buttons = document.querySelectorAll('input');
const statement = document.getElementById('statement');
const winner = document.getElementById('winner');



// randomly chooses a item from the array
function computerSelection(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function endGame() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

// compares values for computerSelection function and button click
function playRound(playerChoice) {
    let computerChoice = computerSelection()
    let result
    if (playerChoice === computerChoice) {
        statement.textContent = "It's a Tie!";
        return result = 0;
    } else if (playerChoice === "rock" && computerChoice === "scissor" || 
               playerChoice === "scissor" && computerChoice === "paper" ||
               playerChoice === "paper" && computerChoice === "rock") {
        playerScore++
        statement.textContent = "You Won!";
        return result = 1;

    } else if (playerChoice === "rock" && computerChoice === "paper" ||
               playerChoice === "scissor" && computerChoice === "rock" ||
               playerChoice === "paper" && computerChoice === "scissor") {
        computerScore++;
        statement.textContent = "You Lose!";  
        return result = 2;

    } else {
        return;
    }
}

//prints winner of match and disables further inputs
function winnerSelection() {
    if (playerScore === 5 && computerScore < 5) {
        winner.textContent = "You won the match!";
        endGame();
    } else if (computerScore === 5 && playerScore < 5){
        winner.textContent = "You lost the match!";
        endGame();
    } else {
        return
    }
}

// updates scoreboard and prints winner of round
function scoreUpdate() {
    if (playerScore < 5 || computerScore < 5 ) {
        if (result === 1) {
            playerScoreBoard.textContent = `${playerScore}`;
        } else if (result === 2) {
            computerScoreBoard.textContent = `${computerScore}`;
        } else {
            return
        }
    } 
}

// returns a value from the button click and uses it in the playRound function
buttons.forEach(button => {
    button.addEventListener('click', function() {
        result = playRound(button.id);
        scoreUpdate();
        winnerSelection();
    })
})

