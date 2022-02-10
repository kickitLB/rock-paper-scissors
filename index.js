const computerInput = ['rock', 'paper', 'scissors'];
const computerSelection = computerInput[Math.floor(Math.random() * computerInput.length)]; 

// function that returns a random value of rock paper or scissors
function computerPlays() {
    return computerSelection;
}
computerPlays();

console.log(computerPlays());


// stores the value of rock paper or scissors inside playerSelection
const playerSelection = prompt('Rock, Paper, or Scissors?');


// rules defining rock priority
function rock() {
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        alert('You win! Paper beats rock!');
    } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        alert('You lose! Rock beats paper!');
    }
}

// rules defining paper priority
function paper() {
    if (computerSelection == 'paper' && playerSelection == 'scissors') {
        alert('You win! Scissors beats paper!')
    } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
        alert('You lose! Paper beats rock!');
    }
}

// rules defining scissors priority 
function scissors() {
    if (computerSelection == 'scissors' && playerSelection == 'rock') {
        alert('You win! Rock beats scissors!');
    } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
        alert('You lose! Scissors beats paper!');
    }
}

function round() {
    if (rock(), paper(), scissors() == true) {

    } else if ( computerSelection == playerSelection) {
        alert('draw');
    } else if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert('invalid input');
    }
}

round();