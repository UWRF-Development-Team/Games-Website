const {toInteger} = require("lodash");
const prompt = require("prompt-sync") ({sigint: true});
let board = new Array(9).fill(' ');
let currentPlayer = 1;
function resetBoard(board) {
    for (let i = 0; i < board.length; i++) {
        board[i] = ' ';
    }
}
function isTaken(spot) {
    if (board[spot] === "1") {
        return true;
    } else if (board[spot] === "1") {
        return true;
    } else if (board[spot] === " ") {
        return false;
    }
}
function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        currentPlayer = 1;
    }
}
function getCurrentPlayerSymbol() {
    if (currentPlayer === 1) {
        return "X";
    } else {
        return "O";
    }
}
function makeMove(spot) {
    let spotPlacementXO;
    if (currentPlayer === 1) {
        spotPlacementXO = 'X';
    } else {
        spotPlacementXO = 'O';
    }
    switch (spot) {
        case "1":
            board[0] = spotPlacementXO;
            break;
        case "2":
            board[1] = spotPlacementXO;
            break;
        case "3":
            board[2] = spotPlacementXO;
            break;
        case "4":
            board[3] = spotPlacementXO;
            break;
        case "5":
            board[4] = spotPlacementXO;
            break;
        case "6":
            board[5] = spotPlacementXO;
            break;
        case "7":
            board[6] = spotPlacementXO;
            break;
        case "8":
            board[7] = spotPlacementXO;
            break;
        case "9":
            board[8] = spotPlacementXO;
            break;
        default:
            console.log(spot);
            console.log("Error");
            break;
    }
}
function determineWinningMoves(board) {
    console.log(typeof board);
    /*
    0 1 2
    3 4 5
    6 7 8
     */
    if (board[0] === "1" && board[1] === "1" && board[2] === "1") {
        return 1;
    } else if (board[4] === "1" && board[5] === "1" && board[6] === "1") {
        return 1;
    } else if (board[6] === "1" && board[7] === "1" && board[8] === "1") {
        return 1;
    } else if (board[0] === "1" && board[3] === "1" && board[6] === "1") {
        return 1;
    } else if (board[1] === "1" && board[4] === "1" && board[7] === "1") {
        return 1;
    } else if (board[2] === "1" && board[5] === "1" && board[8] === "1") {
        return 1;
    } else if (board[0] === "1" && board[4] === "1" && board[8] === "1") {
        return 1;
    } else if (board[6] === "1" && board[4] === "1" && board[2] === "1") {
        return 1;
    } else if (board[0] === "2" && board[1] === "2" && board[2] === "2") {
        return 2;
    } else if (board[4] === "2" && board[5] === "2" && board[6] === "2") {
        return 2;
    } else if (board[6] === "2" && board[7] === "2" && board[8] === "2") {
        return 2;
    } else if (board[0] === "2" && board[3] === "2" && board[6] === "2") {
        return 2;
    } else if (board[1] === "2" && board[4] === "2" && board[7] === "2") {
        return 2;
    } else if (board[2] === "2" && board[5] === "2" && board[8] === "2") {
        return 2;
    } else if (board[0] === "2" && board[4] === "2" && board[8] === "2") {
        return 2;
    } else if (board[6] === "2" && board[4] === "2" && board[2] === "2") {
        return 2;
    } else {
        return 0;
    }
}
function isWinner() {
    if (determineWinningMoves(board) === 0) {
        return false;
    } else if (determineWinningMoves(board) === 1) {
        console.log("Congratulations Player 1 (X) -- You are the winner!")
        return true;
    } else if (determineWinningMoves(board) === 2) {
        console.log("Congratulations Player 2 (O) -- You are the winner!")
        return true;
    }
}
function displayBoard() {
    console.log("Current Board ------");
    console.log("\n              " + "------");
    console.log("              " + board[0] +"|" + board[1] + "|" + board[2]);
    console.log("              " + "------");
    console.log("              " + board[3] +"|" + board[4] + "|" + board[5]);
    console.log("              " + "------");
    console.log("              " + board[6] +"|" + board[7] + "|" + board[8]);
    console.log("              " + "------");
    console.log("\n--------------------");

}
function isDraw() {
    let isBoardFilled = false;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === ' ') {
            return false;
        } else if (determineWinningMoves(board) === 1 || determineWinningMoves(board) === 2) {
            return false;
        }
    }
}
function takeTurn() {
    let hasWinner = false;
    while (!hasWinner) {
        console.log("\n")
        console.log("Board Slots --------");
        console.log("\n              ------");
        console.log("              1|2|3");
        console.log("              ------");
        console.log("              4|5|6");
        console.log("              ------");
        console.log("              7|8|9");
        console.log("              ------");
        console.log("\n--------------------");
        let userInput = prompt(`Player ${currentPlayer} (${getCurrentPlayerSymbol()}), please choose a spot: `);
        if (isTaken(userInput)) {
            console.log('You cannot use that spot.');
            displayBoard(board);
        } else {
            makeMove(userInput);
            hasWinner = isWinner();
            if (!hasWinner) {
                switchPlayer();
                displayBoard(board);
            }
        }
    }
}
function startGame() {
    takeTurn();
}
startGame();




// document.addEventListener('DOMContentLoaded',function() {
//     /* Load the functions when the page loads */
//
//     function clearBoard() {
//         let boards = document.getElementsByClassName('board-container');
//         for (let board of boards) {
//             board.style.opacity = 0.0001;
//         }
//         //now that the start button was pressed, we will add event listeners to each
//         //individual div element. thier value will be passed to a function, and stored
//         //in the empty array if the spot is null
//         boxes.forEach(box => box.addEventListener('click', chosenSpot))
//     }
//     function unclearBoard() {
//         let boards = document.getElementsByClassName('board-container');
//         for (let board of boards) {
//             board.style.opacity = 1;
//         }
//     }
//     function switchPlayer() {
//         let changePlayerButton = document.getElementById("start-button");
//         let playerText = document.getElementById("player");
//         if (playerText.innerText === "Player 1") {
//
//         }
//
//     }
//
//     /* Add event listeners */
//     const button = document.getElementById('start-button');
//     button.addEventListener('click', clearBoard);
//     button.addEventListener('mousedown', unclearBoard);
//     //variables for each box, when they are clicked, an action will be performed
//     const spotOne = document.getElementById('o-one');
//     spotOne.addEventListener('click', function() {
//         spotOne.style.opacity = 1;
//     });
//     const spotTwo =  document.getElementById('o-two');
//     spotTwo.addEventListener('click', function() {
//         spotTwo.style.opacity = 1;
//     });
//     const spotThree = document.getElementById('o-three');
//     spotThree.addEventListener('click', function() {
//         spotThree.style.opacity = 1;
//     });
//     const spotFour =  document.getElementById('o-four');
//     spotFour.addEventListener('click', function() {
//         spotFour.style.opacity = 1;
//     });
//     const spotFive = document.getElementById('o-five');
//     spotFive.addEventListener('click', function() {
//         spotFive.style.opacity = 1;
//     });
//     const spotSix =  document.getElementById('o-six');
//     spotSix.addEventListener('click', function() {
//         spotSix.style.opacity = 1;
//     });
//     const spotSeven = document.getElementById('o-seven');
//     spotSeven.addEventListener('click', function() {
//         spotSeven.style.opacity = 1;
//     });
//     const spotEight =  document.getElementById('o-eight');
//     spotEight.addEventListener('click', function() {
//         spotEight.style.opacity = 1;
//     });
//     const spotNine = document.getElementById('o-nine');
//     spotNine.addEventListener('click', function() {
//         spotNine.style.opacity = 1;
//     });
//
// /* switching the picture to other player picture when player switches */
// });
//
