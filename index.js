//Incrementing functions
//Home
let num1 = 0
document.getElementById("home-score").textContent = num1

function add1Home() {
    num1 += 1
    document.getElementById("home-score").textContent = num1
}

function add2Home() {
    num1 += 2
    document.getElementById("home-score").textContent = num1
}

function add3Home() {
    num1 += 3
    document.getElementById("home-score").textContent = num1
}

//Guest
let num2 = 0
document.getElementById("guest-score").textContent = num2


function add1Guest() {
    num2 += 1
    document.getElementById("guest-score").textContent = num2
}

function add2Guest() {
    num2 += 2
    document.getElementById("guest-score").textContent = num2
}

function add3Guest() {
    num2 += 3
    document.getElementById("guest-score").textContent = num2
}

//New game function.
function newGame() {
    num1 = 0
    num2 = 0
    document.getElementById("home-score").textContent = num1
    document.getElementById("guest-score").textContent = num2
}

