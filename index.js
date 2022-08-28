// let homeAddOne = document.getElementById("score1H").innerText
// let homeAddTwo = document.getElementById("score2H").innerText
// let homeAddThree = document.getElementById("score3H").innerText

// let guestAddOne = document.getElementById("score1G").innerText
// let guestAddTwo = document.getElementById("score2G").innerText
// let guestAddThree = document.getElementById("score3G").innerText
let scoreHome = document.getElementById("homeScore")
let scoreGuest = document.getElementById("guestScore")

let countHome = 0
let countGuest = 0


function increment1(){
    countHome +=1
    scoreHome.textContent = countHome
}

function increment2(){
    countHome +=2
    scoreHome.textContent = countHome
}

function increment3(){
    countHome +=3      
    scoreHome.textContent = countHome
}

function increment4(){
    countGuest +=1    
    scoreGuest.textContent = countGuest
}

function increment5(){
    countGuest +=2
    scoreGuest.textContent = countGuest
}

function increment6(){
    countGuest +=3      
    scoreGuest.textContent = countGuest
}

function reset(){
    countHome = 0
    countGuest = 0
    scoreHome.textContent = countHome
    scoreGuest.textContent = countGuest  
}