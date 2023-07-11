import gameBoard from "../images/Template.webp";
export default function Board() {
    return (
        <div> 
        <img id="board-img" alt="board" src={gameBoard}></img>
<div class="board-container">

    <div class="board">
        <div class="row1"><img id="one" src="images/O.png" alt="red o"></img></div>
        <div class="row1"><img id="two" src="images/O.png" alt="red o"></img></div>
        <div class="row1"><img id="three" src="images/O.png" alt="red o"></img></div>
        <div class="row2"><img id="four" src="images/O.png" alt="red o"></img></div>
        <div class="row2"><img id="five" src="images/O.png" alt="red o"></img></div>
        <div class="row2"><img id="six" src="images/O.png" alt="red o"></img></div>
        <div class="row3"><img id="seven" src="images/O.png" alt="red o"></img></div>
        <div class="row3"><img id="eight" src="images/O.png" alt="red o"></img></div>
        <div class="row3"><img id="nine" src="images/O.png" alt="red o"></img></div>
    </div>
</div>
</div>
    );
}