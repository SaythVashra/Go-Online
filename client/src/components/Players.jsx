import React from "react";
import Player from "./Player";

const axios = require("axios").default;

const serverURL = "http://localhost:5000";

function Players() {

    let allPlayers = [];

    function renderPlayers(player){
        return <Player key={player.id} name={player.name} socketID={player.socketID} />
    }

    axios.get(serverURL + "/getAllPlayers").then((res) => {
        allPlayers = res.data;
        console.log(allPlayers);
    });

    return <div>{allPlayers.map(renderPlayers)}</div>;
    // return <Player name={"Sayth"} socketID={"12345"}/>
}

export default Players;