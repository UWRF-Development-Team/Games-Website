let boxes = Array.from(document.getElementByClassName('box'));
let emptyArray = Array(9).fill(null);
let displayText = document.getElementById('displayText');
const picX = document.getElementById("picX");
const picO = document.getElementById("picO");
const playerO = "O";
const playerX = "X"; //change these in css, if there is an o or x on the board switch to image
let currentPlayer = playerX; //the first player by default is player x.

//the following variable are subject to change, and are just meant to display on each spot

spotOneX.src = "./X.png";
spotTwoX.src = "./X.png";
spotThreeX.src = "./X.png";
spotFourX.src = "./X.png";
spotFiveX.src = "./X.png";
spotSixX.src = "./X.png";
spotSevenX.src = "./X.png";
spotEightX.src = "./X.png";
spotNineX.src = "./X.png";

spotOneO.src = "./O.png"
spotTwoO.src = "./O.png"
spotThreeO.src = "./O.png"
spotFourO.src = "./O.png"
spotFiveO.src = "./O.png"
spotSixO.src = "./O.png"
spotSevenO.src = "./O.png"
spotEightO.src = "./O.png"
spotNineO.src = "./O.png"



    function clearBoard() {
        let boards = document.getElementsByClassName('board-container');
        for (let board of boards) {
            board.style.opacity = 0.0001;
        }
        //now that the start button was pressed, we will add event listeners to each
        //individual div element. their value will be passed to a function, and stored
        //in the empty array if the spot is null
        boxes.forEach(box => box.addEventListener('click', chosenSpot))
    }
   

    let chosenSpot = index =>{
        const spot = index.target.id; //store the id of the box clicked (reduces redundancy)
        if (emptyArray[spot] === null) { //if the player didn't click a spot
            emptyArray[spot] = currentPlayer; //it will retrieve the box id and store it in the empty array
            //call the method displayOnBoard, so it will show in the correct box
            displayOnBoard(spot);
            IsWinner(); //check if the current player has the correct pattern to win, and, end game if they do.
            //last but not least, change the player
             currentPlayer = (currentPlayer === playerX) ? playerO: playerX;
        }

        }

        let displayOnBoard = spot =>{
           boxes[spot] = currentPlayer

           if (currentPlayer === playerX) {
               if(spot === 0) spotOneX.style.opacity = 1;
               if(spot === 1) spotTwoX.style.opacity = 1;
               if(spot === 2) spotThreeX.style.opacity = 1;
               if(spot === 3) spotFourX.style.opacity = 1;
               if(spot === 4) spotFiveX.style.opacity = 1;
               if(spot === 5) spotSixX.style.opacity = 1;
               if(spot === 6) spotSevenX.style.opacity = 1;
               if(spot === 7) spotEightX.style.opacity = 1;
               if(spot === 8) spotNineX.style.opacity = 1;
           }
           else {
               if(spot === 0) spotOneO.style.opacity = 1;
               if(spot === 1) spotTwoO.style.opacity = 1;
               if(spot === 2) spotThreeO.style.opacity = 1;
               if(spot === 3) spotFourO.style.opacity = 1;
               if(spot === 4) spotFiveO.style.opacity = 1;
               if(spot === 5) spotSixO.style.opacity = 1;
               if(spot === 6) spotSevenO.style.opacity = 1;
               if(spot === 7) spotEightO.style.opacity = 1;
               if(spot === 8) spotNineO.style.opacity = 1;
           }
    }


