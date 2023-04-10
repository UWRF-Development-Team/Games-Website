document.addEventListener('DOMContentLoaded', function() {
    let board = document.getElementsByClassName("board-o");
    let startButton = document.getElementById("start-button");
    let notificationButton = document.getElementById("announcement")
    let currentPlayer = 1;
    function setCurrentPlayerToOne() {
        currentPlayer = 1;
    }
    function switchPlayer() {
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else if (currentPlayer === 2) {
            currentPlayer = 1;
        }
    }

    function resetBoard() {
        setCurrentPlayerToOne();
        notificationButton.innerText = "Turn: Player 1";
        spotOne.style.opacity = 0.001;
        spotTwo.style.opacity = 0.001;
        spotThree.style.opacity = 0.001;
        spotFour.style.opacity = 0.001;
        spotFive.style.opacity = 0.001;
        spotSix.style.opacity = 0.001;
        spotSeven.style.opacity = 0.001;
        spotEight.style.opacity = 0.001;
        spotNine.style.opacity = 0.001;
        

    }

    function determineWinningMoves() {
        /*
        1 2 3
        4 5 6
        7 8 9

        0 1 2
        3 4 5
        6 7 8
        
        board[] array is +1 to element objects
     */
        if (spotOne.src === "./X.png" && spotTwo.src === "./X.png" && spotThree.src === "1") {
            if (spotOne.style.opacity > 0.9 && spotTwo.style.opacity > 0.9 && spotThree.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotThree.src === "./X.png" && spotFour.src === "./X.png" && spotFive.src === "./X.png") {
            if (spotThree.style.opacity > 0.9 && spotFour.style.opacity > 0.9 && spotFive.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotFive.src === "./X.png" && spotSix.src === "./X.png" && spotSeven.src === "./X.png") {
            if (spotFive.style.opacity > 0.9 && spotSix.style.opacity > 0.9 && spotSeven.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotOne.src === "./X.png" && spotFour === "./X.png" && spotSeven.src === "./X.png") {
            if (spotOne.style.opacity > 0.9 && spotFour.style.opacity > 0.9 && spotSeven.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotTwo.src === "./X.png" && spotFive.src === "./X.png" && spotEight.src === "./X.png") {
            if (spotTwo.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotEight.style.opacity > 0.9)
                return 1;
        } else if (spotThree.src === "./X.png" && spotSix.src === "./X.png" && spotNine.src === "./X.png") {
            if (spotThree.style.opacity > 0.9 && spotSix.style.opacity > 0.9 && spotNine.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotOne.src === "./X.png" && spotFive.src === "./X.png" && spotNine.src === "./X.png") {
            if (spotOne.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotNine.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotSeven.src === "./X.png" && spotFive.src === "./X.png" && spotThree.src === "./X.png") {
            if (spotSeven.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotThree.style.opacity > 0.9) {
                return 1;
            }
        } else if (spotOne.src === "./O.png" && spotTwo.src === "./O.png" && spotThree.src === "./O.png") {
            if (spotOne.style.opacity > 0.9 && spotTwo.style.opacity > 0.9 && spotThree.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotFive.src === "./O.png" && spotSix.src === "./O.png" && spotSeven.src === "./O.png") {
            if (spotFive.style.opacity > 0.9 && spotSix.style.opacity > 0.9 && spotSeven.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotSeven.src === "./O.png" && spotEight.src === "./O.png" && spotNine.src === "./O.png") {
            if (spotSeven.style.opacity > 0.9 && spotEight.style.opacity > 0.9 && spotNine.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotOne.src === "./O.png" && spotFour.src === "./O.png" && spotSeven.src === "./O.png") {
            if (spotOne.style.opacity > 0.9 && spotFour.style.opacity > 0.9 && spotSeven.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotTwo.src === "./O.png" && spotFive.src === "./O.png" && spotEight.src === "./O.png") {
            if (spotTwo.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotEight.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotThree.src === "./O.png" && spotSix.src === "./O.png" && spotNine.src === "./O.png") {
            if (spotThree.style.opacity > 0.9 && spotSix.style.opacity > 0.9 && spotNine.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotOne.src === "./O.png" && spotFive.src && spotNine.src === "./O.png") {
            if (spotOne.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotNine.style.opacity > 0.9) {
                return 2;
            }
        } else if (spotSeven.src === "./O.png" && spotFive.src === "./O.png" && spotThree.src === "./O.png") {
            if (spotSeven.style.opacity > 0.9 && spotFive.style.opacity > 0.9 && spotThree.style.opacity > 0.9) {
                return 2;
            }
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
            //make inner text "Play again"
        }
    }

    startButton.addEventListener('click', resetBoard);
    const spotOne = document.getElementById('o-one');
    spotOne.addEventListener('click', function () {
        if (spotOne.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotOne.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotOne.src = "./O.png";
        }
        spotOne.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {

            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }

    });
    const spotTwo = document.getElementById('o-two');
    spotTwo.addEventListener('click', function () {
        if (spotTwo.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotTwo.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotTwo.src = "./O.png";
        }
        spotTwo.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotThree = document.getElementById('o-three');
        spotThree.addEventListener('click', function () {
        if (spotThree.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotThree.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotThree.src = "./O.png";
        }
        spotThree.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotFour = document.getElementById('o-four');
        spotFour.addEventListener('click', function () {
        if (spotFour.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotFour.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotFour.src = "./O.png";
        }
        spotFour.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotFive = document.getElementById('o-five');
        spotFive.addEventListener('click', function () {
        if (spotFive.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotFive.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotFive.src = "./O.png";
        }
        spotFive.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }

    });
        const spotSix = document.getElementById('o-six');
        spotSix.addEventListener('click', function () {
        if (spotSix.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotSix.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotSix.src = "./O.png";
        }
        spotSix.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotSeven = document.getElementById('o-seven');
        spotSeven.addEventListener('click', function () {
        if (spotSeven.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotSeven.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotSeven.src = "./O.png";
        }
        spotSeven.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotEight = document.getElementById('o-eight');
        spotEight.addEventListener('click', function () {
        if (spotEight.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotEight.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotEight.src = "./O.png";
        }
        spotEight.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
        const spotNine = document.getElementById('o-nine');
        spotNine.addEventListener('click', function () {
        if (spotNine.style.opacity > 0.9) {
            return;
        }
        if (determineWinningMoves() === 0) {
            if (currentPlayer === 1) {
            spotNine.src = "./X.png";
        } else if (currentPlayer === 2) {
            spotNine.src = "./O.png";
        }
        spotNine.style.opacity = 1;
        switchPlayer();
        notificationButton.innerText = `Turn: Player ${currentPlayer}`
        } else if (determineWinningMoves() === 1) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player One!";
        } else if (determineWinningMoves() === 2) {
            startButton.innerText = "Play Again";
            notificationButton.innerText = "Winner: Player Two!";
        }
    });
});
