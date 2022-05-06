//-----------------------------------------------------
        //  Variables
//-----------------------------------------------------
let playerOne = {
    myTurn: false,
    won_it_all: false,
    score: 0,
}
let playerTwo = {
    myTurn: false,
    won_it_all: false,
    score: 0,

}
const determineRound = () =>{
    if (playerOne.score >= 3 || playerTwo.score >= 3){
        alert ("You won Round 1")
        alert ("Begin Round 2")
    }
    if (playerOne.score >= 6 || playerTwo.score >= 6){
        alert ("You Won Round 2")
        alert ("Begin Round 3")
    }
    if (playerOne.score >= 9 || playerTwo.score >= 9){
        alert ("You Won Round 3")
        alert ("You Are The Winner!")
    }
}

const addScoreToPlayerOne = () =>{


}
const addScoreToPlayerTwo = () =>{

}
    // scoreboardPointsB: 0,

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



const playA = () =>{

}
    
    
    
    // score.scoreboardPointsA++
    // let screen = document.querySelector('.scoreboardPointsA')
    // screen.textContent= `${score.scoreboardPointsA}`

