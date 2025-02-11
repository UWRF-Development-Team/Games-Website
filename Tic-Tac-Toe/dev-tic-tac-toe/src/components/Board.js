import gameBoard from "../images/Template.webp";
import redO from "../images/O.png";
import  "./styles/Board.css";
export default function Board() {
    return (
        <div> 
        <img id="board-img" alt="board" src={gameBoard}></img>
<div class="board-container">

    <div class="board">
        <div class="row1"><img id="one" src={redO} alt="red o"></img></div>
        <div class="row1"><img id="two" src={redO} alt="red o"></img></div>
        <div class="row1"><img id="three" src={redO} alt="red o"></img></div>
        <div class="row2"><img id="four" src={redO} alt="red o"></img></div>
        <div class="row2"><img id="five" src={redO} alt="red o"></img></div>
        <div class="row2"><img id="six" src={redO} alt="red o"></img></div>
        <div class="row3"><img id="seven" src={redO} alt="red o"></img></div>
        <div class="row3"><img id="eight" src={redO} alt="red o"></img></div>
        <div class="row3"><img id="nine" src={redO} alt="red o"></img></div>
    </div>
</div>
</div>
    );
}