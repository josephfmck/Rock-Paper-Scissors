//STEP1 func randomly return 'rock' 'paper' 'scissors'
function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3);
    
    let computerChoice = "";

    if (randomNum == 1) {
        computerChoice = "rock";
    }
    else if (randomNum == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}


//GLOBAL STEP5
let playerScore = 0; //increment when player wins
let computerScore = 0; // increment when com wins
let roundsPlayed = 0; //increment each round played, when hits 5 stop game and post results




//STEP3 function to select winner
function playRound(playerSelection, computerSelection) {

    let playerVar = playerSelection.toLowerCase();

    if (playerVar === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Win! Rock beats Scissors";
    }
    else if (playerVar === 'rock' && computerSelection === 'paper') {
        computerScore++
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Lose! Paper beats Rock";
    }
    else if (playerVar === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Win! Scissors beats Paper";
    }
    else if (playerVar === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Lose! Rock beats Scissors";
    }
    else if (playerVar === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Win! Paper beats Rock";
    }
    else if (playerVar === 'paper' && computerSelection === 'scissors') {
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Lose! Scissors beats Paper";
    }
    else {
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        return "You Tied!"
    }

}



//STEP4 function
function game() {
        //STEP4 set player's answer to the prompt
    const playerSelection = prompt("rock, paper, or scissors?");

    //run to get computer choice;
    const computerSelection = computerPlay();
    
    roundsPlayed++;

    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
    console.log(roundsPlayed);

    //rerun game till roundsplayed hit 5
    if (roundsPlayed < 5) {
        game();
    }
    else {
        console.log("GAME OVER");
    }

}

//STARTS THE GAME ON PAGE LOAD
game();



//LOGIC 
//have playerSelection chosen through prompt each time
//have computerSelection run each time run game()
//game() will run playRound to determine winner
//run playRound 5 times 
//add score to winner of each round