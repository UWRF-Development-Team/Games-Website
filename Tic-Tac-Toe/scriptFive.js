document.addEventListener('DOMContentLoaded', function () {
    // Image URL
    const OSrc = "https://github.com/UWRF-Development-Team/Games-Website/blob/4e1b493e0f8263df59a733d7b9947867f0456d72/Tic-Tac-Toe/O.png?raw=true";
    const XSrc = "https://github.com/UWRF-Development-Team/Games-Website/blob/4e1b493e0f8263df59a733d7b9947867f0456d72/Tic-Tac-Toe/X.png?raw=true";
    // Image elements
    const O = new Image();
    const X = new Image();
    O.src = OSrc;
    X.src = XSrc;
    const startButton = document.getElementById("start-button");
    const notificationButton = document.getElementById("announcement");
    let spotOne = document.getElementById("one");
    let spotTwo = document.getElementById("two");
    let spotThree = document.getElementById("three");
    let spotFour = document.getElementById("four");
    let spotFive = document.getElementById("five");
    let spotSix = document.getElementById("six");
    let spotSeven = document.getElementById("seven");
    let spotEight = document.getElementById("eight");
    let spotNine = document.getElementById("nine"); //lines 11 - 21 can be reduced by added the classname to the array.
    let board = [spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix, spotSeven, spotEight, spotNine];
    let currentPlayer  = 1;
    let isGoing = true; //variable to tell if the game is still going.

    for (let item of board) { //display all items in board array
        console.log(item);
    }

    console.log(OSrc);//testing
    console.log(XSrc);

    for (let item of board) {
        item.addEventListener("click", makeMove); //add event listener to all squares
    }
    startButton.addEventListener("click", resetBoard); //add event listener to start button

    function switchPlayer() { //switch the current player
        currentPlayer = currentPlayer === 1? 2: 1;
        notificationButton.innerHTML = "Turn: Player " + currentPlayer;
    }

    function freezeBoard() { //keep this, but add a method to freeze item after it's clicked
        for (let item of board) {
            item.removeEventListener("click", makeMove); //stop listening for clicks
        }
    }


    function resetBoard() { // taking away all values on board.
        notificationButton.innerText = "Turn: Player 1";
        console.log("reset");
        newRound();
    }
    
    function determineWinningMoves() {
        /* 
        0 1 2
        3 4 5
        6 7 8
     */
        // Horizontal win conditions
        for (let i = 0; i < 9; i += 3) {
            if (board[i].src === board[i + 1].src && board[i + 1].src === board[i + 2].src) {
                if (board[i].src === XSrc) {
                    return 1;
                } else if (board[i].src === OSrc) {
                    return 2;
                }
            }
        }

        // Vertical win conditions
        for (let i = 0; i < 3; i++) {
            if (board[i].src === board[i + 3].src && board[i + 3].src === board[i + 6].src) {
                if (board[i].src === XSrc) {
                    return 1;
                } else if (board[i].src === OSrc) {
                    return 2;
                }
            }
        }

        // Diagonal win conditions
        if (board[0].src === board[4].src && board[4].src === board[8].src) {
            if (board[0].src === XSrc) {
                return 1;
            } else if (board[0].src === OSrc) {
                return 2;
            }
        } else if (board[2].src === board[4].src && board[4].src === board[6].src) {
            if (board[2].src === XSrc) {
                return 1;
            } else if (board[2].src === OSrc) {
                return 2;
            }
        }
    }

function checkForWin() {
        let winner = determineWinningMoves();
        if (winner === 1) {
            notificationButton.innerHTML = "Player 1 wins!";
            freezeBoard();
            isGoing = false;

        } else if (winner === 2) {
            notificationButton.innerHTML = "Player 2 wins!";
            freezeBoard();
            isGoing = false;
        }
    }

    function newRound() {
        for (let item of board) { //board is being cleared
            item.src = "";
            item.style.opacity = "0.001";
            item.addEventListener("click", makeMove);
        }
    }

    function makeMove() {
        if (this.style.opacity === "1") { //spot is already taken
            return;
        } else {
            if (currentPlayer === 1) {
                this.src = XSrc;
                this.style.opacity = "1"; //display x on board
                console.log('successful');
                checkForWin();
                if(isGoing) switchPlayer();//maybe switch player if and only if the game is still going
                //can create boolean variable

            } else {
                this.src = OSrc;
                this.style.opacity = "1";
                checkForWin();
                if(isGoing) switchPlayer();
            }
        }
    }

});
