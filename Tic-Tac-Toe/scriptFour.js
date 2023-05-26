

document.addEventListener("DOMContentLoaded", function() {
    let OSrc = "O.png";
    let XSrc = "X.png";
    let startButton = document.getElementById("start-button");
    let notificationButton = document.getElementById("announcement");
    let spotOne = document.getElementById("one");
    let spotTwo = document.getElementById("two");
    let spotThree = document.getElementById("three");
    let spotFour = document.getElementById("four");
    let spotFive = document.getElementById("five");
    let spotSix = document.getElementById("six");
    let spotSeven = document.getElementById("seven");
    let spotEight = document.getElementById("eight");
    let spotNine = document.getElementById("nine");
    let board = [spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix, spotSeven, spotEight, spotNine];
    let boardSrc = [spotOne.src, spotTwo.src, spotThree.src, spotFour.src, spotFive.src, spotSix.src, spotSeven.src, spotEight.src, spotNine.src];
    let currentPlayer = 1;

    function switchPlayer() {
        currentPlayer = currentPlayer === 1? 2: 1;
    }

    function resetBoard() {
    board.forEach(item => {
        item.style.opacity = 0.001;
        item.src = XSrc;
    });
    currentPlayer = 1;
    notificationButton.innerText = "Turn: Player 1";
}
    function determineWinningMoves() {
        /*
        1 2 3
        4 5 6
        7 8 9
        

        board[] array is +1 to element objects
     */
        if (spotOne.src.includes("X.png") && spotTwo.src.includes("X.png") && spotThree.src.includes("X.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotTwo.style.opacity) > 0.9 && parseFloat(spotThree.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotFour.src.includes("X.png") && spotFive.src.includes("X.png") && spotSix.src.includes("X.png")) {
            if (parseFloat(spotFour.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotSix.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotSeven.src.includes("X.png") && spotEight.src.includes("X.png") && spotNine.src.includes("X.png")) {
            if (parseFloat(spotSeven.style.opacity) > 0.9 && parseFloat(spotEight.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotOne.src.includes("X.png") && spotFour.src.includes("X.png") && spotSeven.src.includes("X.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotFour.style.opacity) > 0.9 && parseFloat(spotSeven.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotTwo.src.includes("X.png") && spotFive.src.includes("X.png") && spotEight.src.includes("X.png")) {
            if (parseFloat(spotTwo.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotEight.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotThree.src.includes("X.png") && spotSix.src.includes("X.png") && spotNine.src.includes("X.png")) {
            if (parseFloat(spotThree.style.opacity) > 0.9 && parseFloat(spotSix.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotOne.src.includes("X.png") && spotFive.src.includes("X.png") && spotNine.src.includes("X.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotSeven.src.includes("X.png") && spotFive.src.includes("X.png") && spotThree.src.includes("X.png")) {
            if (parseFloat(spotSeven.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotThree.style.opacity) > 0.9) {
                return 1;
            }
        } else if (spotOne.src.includes("O.png") && spotTwo.src.includes("O.png") && spotThree.src.includes("O.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotTwo.style.opacity) > 0.9 && parseFloat(spotThree.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotFour.src.includes("O.png") && spotFive.src.includes("O.png") && spotSix.src.includes("O.png")) {
            if (parseFloat(spotFour.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotSix.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotSeven.src.includes("O.png") && spotEight.src.includes("O.png") && spotNine.src.includes("O.png")) {
            if (parseFloat(spotSeven.style.opacity) > 0.9 && parseFloat(spotEight.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotOne.src.includes("O.png") && spotFour.src.includes("O.png") && spotSeven.src.includes("O.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotFour.style.opacity) > 0.9 && parseFloat(spotSeven.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotTwo.src.includes("O.png") && spotFive.src.includes("O.png") && spotEight.src.includes("O.png")) {
            if (parseFloat(spotTwo.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotEight.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotThree.src.includes("O.png") && spotSix.src.includes("O.png") && spotNine.src.includes("O.png")) {
            if (parseFloat(spotThree.style.opacity) > 0.9 && parseFloat(spotSix.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotOne.src.includes("O.png") && spotFive.src.includes("O.png") && spotNine.src.includes("O.png")) {
            if (parseFloat(spotOne.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotNine.style.opacity) > 0.9) {
                return 2;
            }
        } else if (spotSeven.src.includes("O.png") && spotFive.src.includes("O.png") && spotThree.src.includes("O.png")) {
            if (parseFloat(spotSeven.style.opacity) > 0.9 && parseFloat(spotFive.style.opacity) > 0.9 && parseFloat(spotThree.style.opacity) > 0.9) {
                return 2;
            }
        } else {
            return 0;
        }
        return 0;
    }

    startButton.addEventListener("click", resetBoard);
    function makeMove() {
        if (parseFloat(this.style.opacity) > 0.9) {
            return;
        } else {
            if (currentPlayer === 1) {
                this.src = XSrc;
            } else if (currentPlayer === 2) {
                this.src = OSrc;
            }
            console.log(this.src);
            
            this.style.opacity = 0.99;
            
            let winner = determineWinningMoves();
            console.log(winner);
            if (winner === 1) {
                startButton.innerText = "Play Again";
                notificationButton.innerText = "Winner: Player One!";
                console.log("point 1");
            } else if (parseInt(winner) === 2) {
                // If player 1 has won, announce they won and change text accordingly.
                startButton.innerText = "Play Again";
                notificationButton.innerText = "Winner: Player Two!";
                console.log("point 2");
            } else if (winner === 0) {
                console.log("point 3");
                switchPlayer();
            }
            
        }
    
    }
    board.forEach(item => {
        item.addEventListener('click', makeMove);
    });
    function test() {
        spotOne.src = OSrc;
        spotTwo.src = OSrc;
        spotThree.src = OSrc;
        spotOne.style.opacity = 1;
        spotTwo.style.opacity = 1;
        spotThree.style.opacity = 1;
        let winner = determineWinningMoves();
        if (winner === 2) {
            console.log("test passed");
        } else {
            console.log("test failed");
        }
    }
   // function test
   // test();
});
// Add a test function which will set the spots of spotOne, spotTwo, and spotThree to O.png and then call determineWinningMoves() to see if it returns 2. If it does, then the function works. If it doesn't, then the function doesn't work.

