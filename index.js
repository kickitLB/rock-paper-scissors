'use strict';
let playerScore = 0;
let computerScore = 0;
let round = 1;

const gameRound = document.getElementById('game');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');

// adding an element for round info ie: round win, lose, or draw
const information = document.querySelector('.information');
const roundInfo = document.createElement('p');
roundInfo.textcontent = '';
roundInfo.display = 'none';
information.appendChild(roundInfo);

// adding an element for play again
const playAgainBtn = document.createElement('button');
playAgainBtn.innerHTML = 'Play Again?';
playAgainBtn.style.display = 'none';
information.appendChild(playAgainBtn);

// when button is clicked play game
const buttons = document.querySelectorAll('.playerSelect > img');
buttons.forEach(img => {
    img.addEventListener('click', playGame)
});



// player selection with a call to an event
function playerPlays(event) {
    return event.target.id;
} 

// computer selection
function computerPlays() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor( Math.random() * choices.length);
    return choices[random];
}

// game rules
function playRounds(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'round draw';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'round win';
        } else {
            return 'round lose';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'round win';
        } else {
            return 'round lose';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper'){
            return 'round win';
        } else {
            return 'round lose';
        }
    }
    
}

// displaying round info ie: round win, lose or draw / round number
function getRoundInfo(playerSelection, computerSelection) {
    round++;
    gameRound.innerHTML = `Round ${round}`;
    if (playRounds(playerSelection, computerSelection) === 'round win') {
        roundInfo.innerHTML = 'Round Win!';
        roundInfo.style.display = 'block';
    } else if (playRounds(playerSelection, computerSelection) === 'round lose') {
        roundInfo.innerHTML = 'Round Lose!';
        roundInfo.style.display = 'block';
    } else if (playRounds(playerSelection, computerSelection) === 'round draw') {
        roundInfo.innerHTML = 'Round Draw!';
        roundInfo.style.display = 'block';
    }
}

// displaying player and computer score
function getGameScore(playerSelection, computerSelection) {
    if(playRounds(playerSelection, computerSelection) === 'round win') {
        playerScore++;
    } else if(playRounds(playerSelection, computerSelection) === 'round lose') {
        computerScore++;
    }
    
    playerScoreElement.innerHTML = `Player Score: ${playerScore}`;
    computerScoreElement.innerHTML = `Computer Score: ${computerScore}`;
}

// if score reaches 5 announce winner
function getWinner(playerScore, computerScore) {
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            gameRound.innerHTML = 'You Win!';
            roundInfo.style.display = 'none';
        } else if (playerScore < computerScore) {
            gameRound.innerHTML = 'CPU Wins!';
            roundInfo.style.display = 'none';
        }
        
        buttons.forEach(img => {
            img.removeEventListener('click', playGame)
        });

        playAgain();
    }

}

function playAgain(){
    playAgainBtn.style.display = 'block';
    playAgainBtn.addEventListener('click', reset);
}

function reset() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.innerHTML = `Player Score: ${playerScore}`;
    computerScoreElement.innerHTML = `Computer Score: ${computerScore}`;
    gameRound.innerHTML = `Round ${round}`;
    playAgainBtn.style.display = 'none';
    playerDisplay.src = '';
    computerDisplay.src = '';
    buttons.forEach(img => {
        img.addEventListener('click', playGame)
    });
}

function showPlayerSelection(playerSelection) {
    if (playerSelection === 'rock') {
        playerDisplay.src = '../rock-paper-scissors/imgs/player-rock.svg';
    } else if (playerSelection === 'paper') {
        playerDisplay.src = '../rock-paper-scissors/imgs/player-paper.svg';
    } else if(playerSelection === 'scissors') {
        playerDisplay.src = '../rock-paper-scissors/imgs/player-scissors.svg';
    }
}

function showComputerSelection(computerSelection) {
    if(computerSelection === 'rock') {
        computerDisplay.src = '../rock-paper-scissors/imgs/computer-rock.svg';
    } else if(computerSelection === 'paper') {
        computerDisplay.src = '../rock-paper-scissors/imgs/computer-paper.svg';
    } else if(computerSelection === 'scissors') {
        computerDisplay.src = '../rock-paper-scissors/imgs/computer-scissors.svg';
    }
}

function playGame() {
    let playerSelection = playerPlays(event);
    let computerSelection = computerPlays();
    showPlayerSelection(playerSelection);
    showComputerSelection(computerSelection);
    playRounds(playerSelection, computerSelection);
    getRoundInfo(playerSelection, computerSelection);
    getGameScore(playerSelection, computerSelection);
    // getWinner calls function playAgain and function reset
    getWinner(playerScore, computerScore);
}
