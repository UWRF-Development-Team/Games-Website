/*This page deals with
the actions that are performed
when a user plays the game. */






//let boxes = [1,2,3,4,5,6,7,8,9];
// const boxMap = new Map();
// boxMap.set(document.getElementById('1'), 1) //map that has a key equal to the id of the image map, and value with its square number
// boxMap.set(document.getElementById('2'), 2)
// boxMap.set(document.getElementById('3'), 3)
// boxMap.set(document.getElementById('4'), 4)
// boxMap.set(document.getElementById('5'), 5)
// boxMap.set(document.getElementById('6'), 6)
// boxMap.set(document.getElementById('7'), 7)
// boxMap.set(document.getElementById('8'), 8)
// boxMap.set(document.getElementById('9'), 9)
let boxes = Array.from(document.getElementById('box'));
let emptyArray = Array(9).fill(null);//fill with 9 values

const picX = document.getElementById("picX");
const picO = document.getElementById("picO");
const playerO = "O";
const playerX = "X"; //change these in css, if there is an o or x on the board switch to image
let currentPlayer = playerX; //the first player by default is player x.

//the following variable are subject to change, and are just meant to display on each spot

spotX.src = "./X.png";
spotO.src = "./O.png"


boxes.forEach(box => box.addEventListener('click', alertUser())); //listen for click, and alert user when a box is clicked


function alertUser() { alert("The event listener works!")}

     let checkWin = player => {
    //take player as parameter, check if it has 3 in a row, return
         // 0 if it isn't a win, 1 (or x) if it is a win for x,
         // or 2 (or o) if it is a win for o.
     }
         const winArray = [[1,2,3],
                                 [4,5,6],
                                 [7,8,9],
                                 [1,4,7],
                                 [2,5,8],
                                 [3,6,9],
                                 [1,5,9],
                                 [3,5,7],
                         ];
         for(let i = 0; i < winArray.length; i++) {

     }


    // function clearBoard() {
    //     let boards = document.getElementsByClassName('board-container');
    //     for (let board of boards) {
    //         board.style.opacity = 0.0001;
    //     }
    //     //now that the start button was pressed, we will add event listeners to each
    //     //individual div element. their value will be passed to a function, and stored
    //     //in the empty array if the spot is null
    //    // boxes.forEach(box => box.addEventListener('click', chosenSpot))
    // }
   

    // let chosenSpot = index =>{
    //     const spot = index.target.id; //store the id of the box clicked (reduces redundancy)
    //     if (emptyArray[spot] === null) { //if the player didn't click a spot
    //         emptyArray[spot] = currentPlayer; //it will retrieve the box id and store it in the empty array
    //         //call the method displayOnBoard, so it will show in the correct box
    //         displayOnBoard(spot);
    //         IsWinner(); //check if the current player has the correct pattern to win, and, end game if they do.
    //         //last but not least, change the player
    //          currentPlayer = (currentPlayer === playerX) ? playerO: playerX;
    //     }

    //     }

      

