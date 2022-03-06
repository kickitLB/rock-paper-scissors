'use strict';

let playerScore = 0;
let computerScore = 0;

function computerPlays() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor( Math.random() * choices.length);
    return choices[random];
}

function playRounds(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection) {
        return 'round draw';
    } else if (playerChoice === 'rock') {
        if (computerSelection === 'scissors') {
            return 'round win';
        } else {
            return 'round lose';
        }
    } else if (playerChoice === 'paper') {
        if (computerSelection === 'rock') {
            return 'round win';
        } else {
            return 'round lose';
        }
    } else if (playerChoice === 'scissors') {
        if (computerSelection === 'paper'){
            return 'round win';
        } else {
            return 'round lose';
        }
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('choices');
        let computerSelection = computerPlays();
        alert(`Computer selects: ${computerSelection}!`);
        playRounds(playerSelection, computerSelection);
        
        if (playRounds(playerSelection, computerSelection) === 'round win') {
            playerScore += 1;
            alert(`Player score: ${playerScore} Computer score: ${computerScore}`);
            continue;
        } else if (playRounds(playerSelection, computerSelection) === 'round lose') {
            computerScore += 1;
            alert(`Player score: ${playerScore} Computer score: ${computerScore}`);
            continue;
        } else {
            alert('Round Draw');
        }
    }

    if (`${playerScore} > ${computerScore}`) {
        return 'game win';
    } else if (`${playerScore} < ${computerScore}`) {
        return 'game lose';
    } else if (`${playerScore} === ${computerScore}`) {
        return 'game draw';
    }
    
}

game();