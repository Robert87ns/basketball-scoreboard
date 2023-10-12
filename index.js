let homeScore = document.getElementById("homePara")
let guestScore = document.getElementById("guestPara")
homeScore.textContent = 0
guestScore.textContent = 0
let homeResult = 0
let guestResult = 0

//Home score
function addOneHome() {
    homeResult += 1
    homeScore.textContent = homeResult
}

function addTwoHome() {
    homeResult+= 2
    homeScore.textContent = homeResult 
}

function addThreeHome() {
    homeResult += 3
    homeScore.textContent = homeResult
}

//Guest score

function addOneGuest() {
    guestResult += 1
    guestScore.textContent = guestResult
}

function addTwoGuest() {
    guestResult += 2
    guestScore.textContent = guestResult    
}

function addThreeGuest() {
    guestResult += 3
    guestScore.textContent = guestResult
}


function newGame () {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeResult = 0
    guestResult = 0
}


