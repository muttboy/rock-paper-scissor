function game() {
    let playerScore = 0;
    let computerScore = 0;
    let choices = ["rock", "paper", "scissor"]
    let winner

    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter: Rock, Paper, or Scissor").toLowerCase();
        let random = Math.floor(Math.random() * choices.length);
        let computerChoice = choices[random];
        if (playerChoice == computerChoice) {
            result = "It's a Tie!";
        } else if (playerChoice == "rock" && computerChoice == "scissor" || 
                   playerChoice == "scissor" && computerChoice == "paper" ||
                   playerChoice == "paper" && computerChoice == "rock") {
            result = "You Win!";
            playerScore++;
    
        } else if (playerChoice == "rock" && computerChoice == "paper" ||
                   playerChoice == "scissor" && computerChoice == "rock" ||
                   playerChoice == "paper" && computerChoice == "scissor") {
            result = "You Lose!";
            computerScore++;
    
        } else {
            result = "Input Error";
        }
    
    console.log("You chose " + playerChoice + " & computer chose " + computerChoice + ".");
    console.log(result + " Your score: " + playerScore + ", Computer score: " + computerScore);
    
    }

    if (playerScore > computerScore) {
        winner = "You are the Winner!";
    } else if (playerScore < computerScore) {
        winner = "You have been defeated!";
    } else {
        winner = "Draw!"
    }
    console.log(winner);
    return
}

game();

