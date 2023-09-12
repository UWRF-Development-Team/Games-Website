//===============================-Board-Pieces-===============================

//---------------------------------Variables----------------------------------
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let board = [one, two, three, four, five, six, seven, eight, nine];
//---------------------------Load-Listener-Methods----------------------------
function attachListeners() {
    // Reloads the array of elements when a pseudo-refresh is made
    board = [document.getElementById("one"),
             document.getElementById("two"),
             document.getElementById("three"),
             document.getElementById("four"),
             document.getElementById("five"),
             document.getElementById("six"),
             document.getElementById("seven"),
             document.getElementById("eight"),
             document.getElementById("nine")];
    board.forEach(spot => spot.removeEventListener("click", makeMove));
    board.forEach(spot => spot.addEventListener("click", makeMove));
}
//---------------------------------Make-Move----------------------------------
function makeMove() {
    let request = new XMLHttpRequest();
    request.open("POST", "tictactoe/select/" + this.id, true);
    console.log(`sent request to ${this.id}`);
    request.onload = function () {
        let fragResponse = request.responseText;
        let boardDiv = document.getElementById("board");
        boardDiv.outerHTML = fragResponse;
        attachListeners();
    }
    request.send();
}
attachListeners();

//============================-Start-Game-Button-=============================

//---------------------------------Variables----------------------------------
let startButton = document.getElementById("start-button");
function resetBoard() {
    let request = new XMLHttpRequest();
    request.open("POST", "tictactoe/resetboard", true);
    console.log("sent request to reset board");
    request.onload = function () {
        let fragResponse = request.responseText;
        let boardDiv = document.getElementById("board");
        boardDiv.outerHTML = fragResponse;
        attachListeners();
    }
    request.send();
}
startButton.addEventListener("click", resetBoard);