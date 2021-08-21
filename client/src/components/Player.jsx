import React from "react";

function Player(props){
    return (
        <div className={"player-card"}>
            <p>{props.name}</p>
            <p>{props.socketID}</p>
        </div>
    )
}

export default Player;