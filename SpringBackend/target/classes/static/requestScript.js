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
function attachListeners() {
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
