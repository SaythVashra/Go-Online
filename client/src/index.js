import React from "react";
import ReactDOM from "react-dom";
import "./javascripts/game";

import App from "./components/App";

const serverURL = "http://localhost:5000";

const axios = require("axios").default;

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById("root")
);

// ReactDOM.render(
//     <div id={"board"}>
//         <Board/>
//     </div>,
//     document.getElementById("root")
// );