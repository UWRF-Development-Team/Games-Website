//import css objects here
import {Style} from "./styles/Style.js";
import {React} from "react";

export default function TitleAndButton() {
    return (
        <>
        {/* I am putting this code in a fragment so the styling isn't messed up*/}
        <header> <h1 style={Style.TicTacToeTitle} id="tic-tac-toe-title">Tic-Tac-Toe</h1></header>
        <div id="body-top"><button style={{...Style.Button, ...Style.ButtonActive, ...Style.StartButton}} ><h2 id="start-button">Start Game</h2></button></div>
        </>
        
    );
}