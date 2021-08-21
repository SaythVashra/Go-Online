import React, {useState} from "react";
import socketClient from "socket.io-client";

//Components
import Login from "./Login";
import Players from "./Players";

const serverURL = "http://localhost:5000";
const socket = socketClient(serverURL);

function App() {

    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [userSocketID, setUserSocketID] = useState("");

    socket.on("connect", () => {
        console.log(socket.id);

        setUserSocketID(socket.id);
    });

    socket.on("disconnect", () => {
        console.log(socket.id); // undefined
    });

    return (
        <div>
            {userIsLoggedIn ? null : <Login loginState={setUserIsLoggedIn} userSocketID={userSocketID}/>}
            {userIsLoggedIn && <Players />}
        </div>
    )
}

export default App;