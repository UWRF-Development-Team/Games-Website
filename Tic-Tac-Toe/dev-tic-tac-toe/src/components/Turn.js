import {useState, useContext} from "react";
export default function Turn(props) {
    let message = "Turn: player 1"
    return (
        <h2 id="announcement">{message}</h2>
    );
}