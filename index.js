
// function that returns a random value of rock paper or scissors
function computerPlays() {
    const computerInput = ['rock', 'paper', 'scissors'];
    const computerSelection = computerInput[Math.floor(Math.random() * computerInput.length)]; 
    return computerSelection;
}
// computerPlays();
// console.log(computerPlays());


// stores the value of rock paper or scissors inside playerSelection
const playerSelection = prompt('Rock, Paper, or Scissors?');


function rules() {
    computerPlays();
    console.log(computerPlays());
    if (computerPlays() === 'rock') {
        if (computerPlays() === 'rock' && playerSelection == 'paper') {
            alert('You win! Paper beats rock!');
        } else if (computerPlays() ==='rock' && playerSelection == 'scissors') {
            alert('You lose! Rock beats scissors');
        } else if (computerPlays() === 'rock' && playerSelection == 'rock') {
            alert('draw');
        }
    } else if (computerPlays() === 'paper') {
        if (computerPlays() === 'paper' && playerSelection == 'scissors') {
            alert('You win! Scissors beats paper!');
        } else if (computerPlays() === 'paper' && playerSelection == 'rock') {
            alert('You lose! Paper beats scissors!');
        } else if (computerPlays() === 'paper' && playerSelection == 'paper') {
            alert('draw');
        }
    }else if (computerPlays() === 'scissors') {
        if (computerPlays() === 'scissors' && playerSelection == 'rock') {
            alert('You win! Rock beats scissors!'); 
        } else if (computerPlays() === 'scissors' && playerSelection == 'paper') {
            alert('You lose! Scissors beats paper!');
        } else if (computerPlays() === 'scissors' && playerSelection == 'scissors') {
            alert('draw');
        }
    } else {
        alert('error');
    }
    console.log(playerSelection);
}
rules();


// // rules defining rock priority
// function rock() {
//     if (computerPlays() == 'rock' && playerSelection == 'paper') {
//         alert('You win! Paper beats rock!');
//     } else if (computerPlays() == 'rock' && playerSelection == 'scissors') {
//         alert('You lose! Rock beats scissors!');
//     } else {

//     }
// }

// // rules defining paper priority
// function paper() {
//     if (computerPlays() == 'paper' && playerSelection == 'scissors') {
//         alert('You win! Scissors beats paper!')
//     } else if (computerPlays() == 'paper' && playerSelection == 'rock') {
//         alert('You lose! Paper beats rock!');
//     } else {

//     }
// }

// // rules defining scissors priority 
// function scissors() {
//     if (computerPlays() == 'scissors' && playerSelection == 'rock') {
//         alert('You win! Rock beats scissors!');
//     } else if (computerPlays() == 'scissors' && playerSelection == 'paper') {
//         alert('You lose! Scissors beats paper!');
//     } else {

//     }
// }

// function round() {
//     if (rock(), paper(), scissors() == true) {

//     } else if ( computerPlays() == playerSelection) {
//         alert('draw');
//     } else if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//         alert('invalid input');
//     }
// }


// round();