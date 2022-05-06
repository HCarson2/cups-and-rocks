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

const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
const btnStart = document.getElementById('btn-start')
let cup1 = document.querySelector('.cup1')
let cup2 = document.querySelector('.cup2')
let cup3 = document.querySelector('.cup3')

const animations = async () =>{
   cup1.classList.add('cupOne')
   cup2.classList.add('cupTwo')
   cup3.classList.add('cupThree')
   await wait(3000)
   cup1.classList.remove('cupOne')
   cup2.classList.remove('cupTwo')
   cup3.classList.remove('cupThree')

}
const reveal = () =>{
    // console.log('abc')
  let randomNum =  Math.floor(Math.random() * 3);
  console.log(randomNum)
if (randomNum ===0){
    console.log('winner')
    }else if (randomNum === 1){
        // <img src="https://i.gifer.com/3tfo.gif" alt="">
        // document.getElementById('yourRWrong').src
       let picture = document.createElement('img')
       picture.setAttribute('src', 'https://i.gifer.com/3tfo.gif')
       let shadow = document.querySelector('.hidden2')
    console.log('you lose')
    shadow.append(picture)
}else if(randomNum=== 2){
    console.log('almost')
}else{
    console.log('error')
}
cup1.removeEventListener('click',reveal)
cup2.removeEventListener('click',reveal)
cup3.removeEventListener('click',reveal)

}   

// cup1.addEventListener('click',reveal)
// cup2.addEventListener('click',reveal)
// cup3.addEventListener('click',reveal)

// function startGame(){


btnStart.addEventListener('click', animations)
// btnStart.addEventListener('click', bounceup)
// btnStart.addEventListener('click', leftroll)


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

const showME = () =>{
    playerOne.score+=10
    }

const jordan = () =>{
    let randomNum =  Math.floor(Math.random() * 3);
    if (randomNum % 2===0){
        let picture = document.createElement('img')
        picture.setAttribute('src', 'https://i.gifer.com/3tfo.gif')
        let shadow = document.querySelector('.hidden2')
     console.log('you lose')
     shadow.replaceWith(picture)
     alert('you lose')
     shadow.classList.toggle('ghost')
    }
}







    
    
    
    

