let homeScore = document.getElementById("homePara");
let guestScore = document.getElementById("guestPara");
homeScore.textContent = 0;
guestScore.textContent = 0;
let homeResult = 0;
let guestResult = 0;

// Home score
function addOneHome() {
    homeResult += 1;
    homeScore.textContent = homeResult;
    checkWinner(); // Call the checkWinner function when the score changes
}

function addTwoHome() {
    homeResult += 2;
    homeScore.textContent = homeResult;
    checkWinner();
}

function addThreeHome() {
    homeResult += 3;
    homeScore.textContent = homeResult;
    checkWinner();
}

// Guest score
function addOneGuest() {
    guestResult += 1;
    guestScore.textContent = guestResult;
    checkWinner();
}

function addTwoGuest() {
    guestResult += 2;
    guestScore.textContent = guestResult;
    checkWinner();
}

function addThreeGuest() {
    guestResult += 3;
    guestScore.textContent = guestResult;
    checkWinner();
}

// Function to check the winner
function checkWinner() {
    if (homeResult > guestResult) {
        document.getElementById("homePara").style.color = "green";
        document.getElementById("guestPara").style.color = "red"; 
    } else {
        document.getElementById("guestPara").style.color = "green"; 
        document.getElementById("homePara").style.color = "red";
    }
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeResult = 0;
    guestResult = 0;
    document.getElementById("homePara").style.color = "red";
    document.getElementById("guestPara").style.color = "red";
}
