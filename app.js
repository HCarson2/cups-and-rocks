//-----------------------------------------------------
        //  Variables
//-----------------------------------------------------
let scory = {
    scoreboardPointsA: 0,
    scoreboardPointsB: 0,

    // scoreboardPointsA: 0
    // scoreboardPointsB: 0
}
// let playerOne;
// let playerTwo;

// let youWon;
// let hidden;
// let wrong;
// let right;
// let playerOneJustScored;
// let playerTwoJustScored;


//-------------------------------------------------------

// scoreboardPointsA = 0
// scoreboardPointsB = 0
// let button = document.getElementById("a");
// button.addEventListener("click", function(){
// });

const playA = () =>{
    scory.scoreboardPointsA++
    let screen = document.querySelector('.scoreboardPointsA')
    screen.textContent= `${scory.scoreboardPointsA}`
    
    if ('scoreboardPointsA' === 10){
        imgWinner.classList.remove('hidden')
    }
}
// const b = () =>{
//     scory.scoreboardPointsB++
//     let scan = document.querySelector('.scoreboardPointsB')
//     screen.textContent= `${scory.scoreboardPointsB}`


// playerTwoJustScored = scoreboardPointsB++;
// console.log('scoreboardPointsA');


    // playerOneJustScored = () =>{
    // scoreboardPointsA.score++
    // let screen = document.querySelector('.scoreboard')
    // screen.textContent = `score : ${scoreboardPointsA.score}`

// } 
//  playerOneJustScored = document.querySelector('scoreboard')




// let youWon = document.querySelector('#youWon')
// let body = document.querySelector('body')


