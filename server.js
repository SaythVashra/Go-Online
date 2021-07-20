const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const httpServer = require("http").createServer(app),
    options = { cors: true },
    io = require("socket.io")(httpServer, options);

/////////////////////////////////  DATABASE  /////////////////////////////////

// mongoose.connect("mongodb://localhost:27017/gogameDB", {useNewUrlParser: true, useUnifiedTopology: true});
//
// const playerSchema = new mongoose.Schema({
//     name: String,
//     password: String,
//     wins: Number,
//     loses: Number,
//     average: Number,
// });
//
// const Player = new mongoose.model("Player", playerSchema);

// const wins = 12,
//     loses = 15,
//     average = wins / ((wins + loses) / 100);
//
// const player1 = new Player({
//     name: "Sayth",
//     password: "Sayth1248",
//     wins: wins,
//     loses: loses,
//     average: average,
// });

/////////////////////////////////  REQUESTS  /////////////////////////////////

httpServer.listen(port, () => console.log("Server listening on port: " + port));

app.get("/login", (req, res) => {
    res.send("login");
});

app.get("/game", (req, res) => {
    res.send("board");
});

io.on("connection", (socket) => {
    console.log("socket ID: " + socket.id);
});