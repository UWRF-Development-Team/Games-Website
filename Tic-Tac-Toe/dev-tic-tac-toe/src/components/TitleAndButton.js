//import css objects here
import {Style} from "./styles/Style.js";
import "./styles/Button.css";
import {React, useEffect, useState} from "react";
import { isError } from "lodash";
import { json } from "express";

export default function TitleAndButton() {
const [text, setText] = useState("Start Game")

    useEffect(() => {
        document.getElementById("start-button").addEventListener('click', () => {fetch('127.0.0.1:3000/startButton') 
    .then(response => setText(json.toString(response)))
    .catch(error => console.error('error: ', error))
})
    } , [])
    return (
        <>
        <header> <h1 style={Style.TicTacToeTitle} id="tic-tac-toe-title">Tic-Tac-Toe</h1></header>
        <div  id="body-top"><button ><h2 id="start-button">{text}</h2></button></div>
        </>
        
    );
}