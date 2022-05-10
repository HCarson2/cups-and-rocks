//-----------------------------------------------------
        //  Variables
//-----------------------------------------------------
//These are objests that I pulled from
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

//Refresh function
function restart(){
    if(confirm("Refresh Game??"))
    {
        location.reload();
    }
}

//This is a wait function which stops my game in-between turns
const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
const btnStart = document.getElementById('btn-start')
let cup1 = document.querySelector('.cup1')
let cup2 = document.querySelector('.cup2')
let cup3 = document.querySelector('.cup3')
// let pebble = document.querySelector('.pebble')

// This function put all of my Keyframes in motion at the same time, and is listening  for my start button that I created
const animations = async () =>{
cup1.addEventListener('click',reveal)
cup2.addEventListener('click',reveal)
cup3.addEventListener('click',reveal)

   cup1.classList.add('cupOne')
   cup2.classList.add('cupTwo')  
   cup3.classList.add('cupThree')

   
//    pebble.classList.add('pebble')
//The wait function was later called down here to awiat (3000) which allowed my game to pause for 3 sec so the player could keep selecting cup
   await wait(3000)
   cup1.classList.remove('cupOne')
   cup2.classList.remove('cupTwo')
   cup3.classList.remove('cupThree')
//    pebble.classList.remove('pebble')
}

//This function that I called reveal allowed me to grab a random number bettween 0 - 2 giving the player a 1/3 chances to win
const reveal = () =>{
    // console.log('abc')
  let randomNum =  Math.floor(Math.random() * 3);
//   console.log(randomNum)
if (randomNum ===0){
    console.log('Winner')
    }else if (randomNum === 1){
    console.log('You lose')
}else if(randomNum=== 2){
    console.log('Almost')
}else{
    console.log('Error')
}
//The event listener was removed to allow only one selection per player turn
cup1.removeEventListener('click',reveal)
cup2.removeEventListener('click',reveal)
cup3.removeEventListener('click',reveal)
// pebble.removeEventListener('click',reveal)
}   
//The event listener was added back on here to allow the click function to resume on the cups
cup1.addEventListener('click',reveal)
cup2.addEventListener('click',reveal)
cup3.addEventListener('click',reveal)
// pebble.addEventListener('click',reveal)
// function startGame(){

//This is my start button that I made in HTML that's listening for a click
btnStart.addEventListener('click', animations)
// btnStart.addEventListener('click', bounceup)
// btnStart.addEventListener('click', leftroll)



// const addScoreToPlayerOne = () =>{


// }
// const addScoreToPlayerTwo = () =>{

// }
//This function allows the player to input their score manually in the scoreboard
const playA = () =>{
    playerOne.score++
    let screen = document.querySelector('.scoreboardPointsA')
    screen.textContent= `${playerOne.score}` 
    // const determineRound = () =>{
        // let pointsA = document.querySelector('.scoreboardPointsA')
        // console.log(pointsA.textContent)
        // let score = 0;
        if (screen.textContent == 3){
            alert ("Player 1 won Round 1...Begin Round 2");
         }
        else if (screen.textContent == 6){
            alert ("Player 1 Won Round 2...Begin Round 3")
         }
        else if (screen.textContent ==9){
            alert ("Player 1 Won Round 3...Player 1 Is The Winner!")
        
        }
        // determineRound()
    }
   
//This function determines who won the rounds and determines the winner
    const playB = () =>{
        playerTwo.score++
        let screen = document.querySelector('.scoreboardPointsB')
        screen.textContent= `${playerTwo.score}`
        if (screen.textContent == 3){
            alert ("Player 2 won Round 1...Begin Round 2");
         }
        else if (screen.textContent == 6){
            alert ("Player 2 Won Round 2...Begin Round 3")
         }
        else if (screen.textContent ==9){
            alert ("Player 2 Won Round 3...Player 2 Is The Winner!")
        
        }
        // determineRound()

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






    
    
    
    

