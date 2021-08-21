import React, {useState, useRef} from "react";

const axios = require("axios").default;
const serverURL = "http://localhost:5000";

function Login(props) {

    const loginContainer = useRef("");
    const userInput = useRef("");
    const takenNameP = useRef(null);

    let nameMatches = false;

    function checkNameMatches() {

        const name = userInput.current.value;

        if (name === "") {
            takenNameP.current.innerHTML = "That nickname isn't valid.";
            takenNameP.current.className = "";
        } else {
            axios.post(serverURL + "/checkNameMatches", {name: name}).then(function (res) {

                if (res.data === true) {
                    takenNameP.current.innerHTML = "That nickname is already being used.";
                    takenNameP.current.className = "";
                    nameMatches = true;
                } else if (res.data === false) {
                    takenNameP.current.className = "invisible";
                    nameMatches = false;
                }
            });
        }
    }

    function hideComponent(event) {

        checkNameMatches();

        if (!nameMatches && userInput.current.value !== "") {

            const userName = userInput.current.value;

            axios.post(serverURL + "/saveUser", {name: userName, socketID: props.userSocketID}).then(function (res){
                console.log("User name saved in Database");
            });

            loginContainer.current.className = loginContainer.current.className + " login-container-invisible";
            setTimeout(function () {props.loginState(true)}, 500);
        } else {
            console.log("Can't proceed, that's not a valid name.")
        }

        event.preventDefault();
    }

    return (
        <div ref={loginContainer} className={"login-container"}>

            <h1>What's your nickname??</h1>

            <form onSubmit={hideComponent}>
                <input ref={userInput} type={"text"} autoFocus={true} onChange={checkNameMatches}/>
                <p ref={takenNameP} className={"invisible"}>That nickname is already being used.</p>
                <button type="submit">Done!!</button>
            </form>

        </div>
    )
}

export default Login;