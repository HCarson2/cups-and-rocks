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

// const determineRound = () =>{
//     let score = 0;
//     if (score === 3){
//         alert ("You won Round 1...Begin Round 2");
//      }
//     else if (score === 6){
//         alert ("You Won Round 2...Begin Round 3")
//      }
//     else if (score ===9){
//         alert ("You Won Round 3...You Are The Winner!")
    
//     }
// }
//Refresh function
function restart(){
    if(confirm("Refresh Game??"))
    {
        location.reload();
    }
}


const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
const btnStart = document.getElementById('btn-start')
let cup1 = document.querySelector('.cup1')
let cup2 = document.querySelector('.cup2')
let cup3 = document.querySelector('.cup3')
// let pebble = document.querySelector('.pebble')

// This function put all of my Keyframes in motion at the same time
const animations = async () =>{
   cup1.classList.add('cupOne')
   cup2.classList.add('cupTwo')  
   cup3.classList.add('cupThree')
//    pebble.classList.add('pebble')
//This awiat (3000) allowed my game to pause for 3 sec so the player could keep selecting cup
   await wait(3000)
   cup1.classList.remove('cupOne')
   cup2.classList.remove('cupTwo')
   cup3.classList.remove('cupThree')
//    pebble.classList.remove('pebble')
}
//This function allowed me to grab a random number bettween 0 - 2 giving the player a 1/3 chances to win
const reveal = () =>{
    // console.log('abc')
  let randomNum =  Math.floor(Math.random() * 3);
//   console.log(randomNum)
if (randomNum ===0){
    console.log('winner')
    }else if (randomNum === 1){
    console.log('you lose')
}else if(randomNum=== 2){
    console.log('almost')
}else{
    console.log('error')
}
cup1.removeEventListener('click',reveal)
cup2.removeEventListener('click',reveal)
cup3.removeEventListener('click',reveal)
// pebble.removeEventListener('click',reveal)
}   

cup1.addEventListener('click',reveal)
cup2.addEventListener('click',reveal)
cup3.addEventListener('click',reveal)
// pebble.addEventListener('click',reveal)
// function startGame(){


btnStart.addEventListener('click', animations)
// btnStart.addEventListener('click', bounceup)
// btnStart.addEventListener('click', leftroll)



// const addScoreToPlayerOne = () =>{


// }
// const addScoreToPlayerTwo = () =>{

}
//This function allows the player to input their score manually in the scoreboard
const playA = () =>{
    playerOne.score++
    let screen = document.querySelector('.scoreboardPointsA')
    screen.textContent= `${playerOne.score}`    
} 
const playB = () =>{
    playerTwo.score++
    let screen = document.querySelector('.scoreboardPointsB')
    screen.textContent= `${playerTwo.score}`
}

    // scoreboardPointsB: 0,

    // scoreboardPointsA: 0
    // scoreboardPointsB: 0

// let playerOne;
// let playerTwo;

// let youWon;
// let hidden;
// let wrong;
// let right;
// let playerOneJustScored;
// let playerTwoJustScored;


//-------------------------------------------------------






    
    
    
    

