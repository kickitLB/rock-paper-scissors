
// Attempt one

// let buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     let playerSelection = playerPlays();
//     let computerSelection = computerPlays();
//     button.addEventListener('click', playRounds(playerSelection, computerSelection))
// });


// function playerPlays() {
//     let buttons = document.querySelectorAll('button');
//     buttons.forEach(button => {
//         button.addEventListener('click', event => {
//             if (button.id === 'rock') {
//                 return 'rock';
//             } else if (button.id === 'paper') { 
//                 return 'paper';
//             } else if (button.id === 'scissors') {
//                 return 'scissors';
//             }
//         });
//     });
// }


// Attempt Two

// let buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
    // button.addEventListener('click', () => {
        // let playerSelection = playerPlays();
        // let computerSelection = computerPlays();
        // playRounds(playerSelection, computerSelection);
    // });
// });
// 
// 
// function playerPlays() {
    // let buttons = document.querySelectorAll('button');
    // buttons.forEach(button => {
        // button.addEventListener('click', (e) => {
            // return e.target.value;
        // });
    // });
// }



// one that works so far but it is separated in different scopes 

let rock = document.getElementById('rock')
rock.addEventListener('click', rockPlay);

let paper = document.getElementById('paper');
paper.addEventListener('click', paperPlay);

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', scissorsPlay);

function rockPlay() {
    let playerSelection = 'rock';
    let computerSelection = computerPlays();
    playRounds(playerSelection, computerSelection);
}

function paperPlay() {
    let playerSelection = 'paper';
    let computerSelection = computerPlays();
    playRounds(playerSelection, computerSelection);
}

function scissorsPlay() {
    let playerSelection = 'scissors';
    let computerSelection = computerPlays();
    playRounds(playerSelection, computerSelection);
}


// function game() {
//     for (let i = 0; i < Infinity; i++) {
        
//         if (playRounds(playerSelection, computerSelection) === 'round win') {
//             playerScore += 1;
//             alert(`Player score: ${playerScore} Computer score: ${computerScore}`);
//             continue;
//         } else if (playRounds(playerSelection, computerSelection) === 'round lose') {
//             computerScore += 1;
//             alert(`Player score: ${playerScore} Computer score: ${computerScore}`);
//             continue;
//         } else {
//             alert('Round Draw');
//         }
        
//     }

//     if (`${playerScore} > ${computerScore}`) {
//         return 'game win';
//     } else if (`${playerScore} < ${computerScore}`) {
//         return 'game lose';
//     } else if (`${playerScore} === ${computerScore}`) {
//         return 'game draw';
//     }
    
// }