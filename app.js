//-----------------------------------------------------
        //  Variables
//-----------------------------------------------------
let playerOne;
let playerTwo;
let scoreboardPointsA;
let scoreboardPointsB;
let youWon;
let hidden;
let wrong;
let right;
let playerOneJustScored;
let playerTwoJustScored;


//-------------------------------------------------------

playerOne = 0

    playerOneJustScored = () =>{
    scoreboardPointsA.score++
    let screen = document.querySelector('.scoreboard')
    screen.textContent = `score : ${scoreboardPointsA.score}`

// } 
//  playerOneJustScored = document.querySelector('scoreboard')





// let youWon = document.querySelector('#youWon')
// let body = document.querySelector('body')
// if (score === 10){
//     gameOver.classList.remove('hidden')
// }
