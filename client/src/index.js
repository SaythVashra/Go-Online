import React from "react";
import ReactDOM from "react-dom";
import "./javascripts/game";
import socketClient from "socket.io-client";

//Components
import Board from "./components/Board";
import Login from "./components/Login";

const serverURL = "http://localhost:5000";
var socket = socketClient(serverURL);

const axios = require("axios").default;

// axios.get(serverURL + "/login").then(function (res) {
//
//     ReactDOM.render(
//         <div>
//             <Login />
//         </div>,
//         document.getElementById("root")
//     )
//
// });

axios.get(serverURL + "/game").then(function (res) {

    const response = res.data;
    console.log(response);

    ReactDOM.render(
        <div id={"board"}>
        <Board />
        </div>,
        document.getElementById("root")
    )
});

socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});