import {useState, useContext} from "react";
export default function Turn(props) {
    return (
        <h2 id="announcement">{props.message}</h2>
    );
}