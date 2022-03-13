'use strict';
let playerScore = 0;
let computerScore = 0;
let round = 1;

const gameRound = document.getElementById('game');
const getPlayerScore = document.getElementById('playerScore');
const getComputerScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.playerSelect > img');
const information = document.querySelector('.information');
const draw = document.createElement('p');
const roundInfo = document.createElement('p');

draw.textContent = 'DRAW!';
information.appendChild(draw);
draw.style.display = 'none';

roundInfo.textcontent = '';
roundInfo.display = 'none';
information.appendChild(roundInfo);


buttons.forEach(img => {
    img.addEventListener('click', () => {
        let playerSelection = img.id;
        let computerSelection = computerPlays();
        game(playerSelection, computerSelection);
        winner(playerScore, computerScore);
    });
});


function computerPlays() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor( Math.random() * choices.length);
    return choices[random];
}

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

function game(playerSelection, computerSelection) {
    round++;
    playRounds(playerSelection, computerSelection);
        if (playRounds(playerSelection, computerSelection) === 'round win') {
            getPlayerScore.innerHTML = `Player Score: ${++playerScore}`;
            gameRound.innerHTML = `Round ${round}`;
            roundInfo.style.display = 'block';
            roundInfo.innerHTML = 'Round Win!'
            draw.style.display = 'none';
        } else if (playRounds(playerSelection, computerSelection) === 'round lose') {
            getComputerScore.innerHTML = `CPU Score: ${++computerScore}`;
            gameRound.innerHTML = `Round ${round}`;
            roundInfo.style.display = 'block';
            roundInfo.innerHTML = 'Round Lose!';
            draw.style.display = 'none';
        } else if (playRounds(playerSelection, computerSelection) === 'round draw') {
            gameRound.innerHTML = `Round ${round}`;
            roundInfo.style.display = 'none';
            draw.style.display = 'block';
        }

}

function winner(playerScore, computerScore) {
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
        gameRound.innerHTML = 'You Win!';
        roundInfo.style.display = 'none';
        } else if (playerScore < computerScore) {
        gameRound.innerHTML = 'CPU Wins!';
        roundInfo.style.display = 'none';
    }
    }
}
