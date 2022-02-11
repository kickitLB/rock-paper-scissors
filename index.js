// function that returns a random value of rock paper or scissors
function computerPlays() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerInput = computerChoices[Math.floor(Math.random() * 3)]; 
    return computerInput;
}

// plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // if player and computer choose the same input alert draw
    if (computerSelection == playerSelection.toLowerCase()) {
        alert('Draw!');
    
    // scenario for rock
    } else if (computerSelection == 'rock') {

        // player chooses paper against rock
        if (playerSelection.toLowerCase() == 'paper') {
            playerScore++;
            alert('you win! Computer chose rock!');
            
        // player chooses scissors against rock 
        } else if(playerSelection.toLowerCase() == 'scissors') {
            computerScore++;
            alert('You lose! Computer chose rock!');

        // player enters an invalid value 
        } else if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
            alert('it\'s case insensitive but you still gotta write it right!');
        }
    
    // scenerio for paper
    } else if (computerSelection == 'paper') {

        // player chooses scissors against paper 
        if ( playerSelection.toLowerCase() == 'scissors') {
            playerScore++;
            alert('You win! Computer chose paper!');
            
        // player chooses rock against paper 
        } else if (playerSelection.toLowerCase() == 'rock') {
            computerScore++;
            alert('You lose! Computer chose paper!');
            
        // player enters an invalid value
        } else if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
            alert('it\'s case insensitive but you still gotta write it right!');
        }    
    
    // scenerio for scissors
    } else if (computerSelection == 'scissors') {

        // player chooses rock against scissors
        if (playerSelection.toLowerCase() == 'rock') {
            playerScore++;
            alert('You win! Computer chose scissors!');
            
        // player chooses paper against scissors
        } else if (playerSelection.toLowerCase() == 'paper') {
            computerScore++;
            alert('You lose! Computer chose scissors!');

        // player enters an invalid value
        }else if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
            alert('it\'s case insensitive but you still gotta write it right!');
        }
    } 
}

// best out of five
function game() {
    // game starts at round 0, will go on for an infinite amount of time, every iteration round increases
    for (i = 0; i = Infinity; i++) {
        
        let playerSelection = prompt('Rock, Paper, Scissors Shoot!');
        let computerSelection = computerPlays();
        
        playRound(playerSelection, computerSelection);
        alert(`CPU Score: ${computerScore}` + ' ' + `Player Score: ${playerScore}` );
        
        // breaks the loop if computer reaches 5 wins
        if (computerScore === 5) {
            alert('Game Over: You lose!');
            break;

        // breaks the loop if player reaches 5 wins
        } else if (playerScore === 5) {
            alert ('Game Over: You Win!');
            break;
        }
    }
}

let computerScore = parseInt(0);
let playerScore = parseInt(0);

game();