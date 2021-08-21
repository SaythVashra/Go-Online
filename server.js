const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const httpServer = require("http").createServer(app),
    options = {cors: true},
    io = require("socket.io")(httpServer, options);

/////////////////////////////////  DATABASE  /////////////////////////////////

mongoose.connect("mongodb://localhost:27017/gogameDB", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const playerSchema = new mongoose.Schema({
    name: String,
    socketID: String
});

const Player = new mongoose.model("Player", playerSchema);



/////////////////////////////////  REQUESTS  /////////////////////////////////

httpServer.listen(port, () => console.log("Server listening on port: " + port));

app.get("/login", (req, res) => {
    res.send("login");
});

app.get("/game", (req, res) => {
    res.send("board");
});

app.post("/checkNameMatches", function (req, res) {

    const userName = req.body.name;
    let nameMatches = false;

    Player.findOne({name: userName}, function (err, foundUser) {

        if (!err) {
            if (foundUser) {
                res.send(true);
            } else if (!foundUser) {
                res.send(false);
            }
        } else {
            console.log(err);
        }

    })

});

app.post("/saveUser", (req, res) => {

    const userName = req.body.name;
    const userSocketID = req.body.socketID;

    const newUser = new Player({
        name: userName,
        socketID: userSocketID
    });

    newUser.save();

    console.log('User "' + userName + '" connected and saved to database with socket-ID: ' + userSocketID);
});

app.get("/getAllPlayers", (req, res) => {

    Player.find({}, (err, foundPlayers) => {
        if (!err && foundPlayers){
            res.send(foundPlayers);
        } else if (!err && !foundPlayers) {
            res.send("No players connected at the moment.");
        } else {
            console.log(err);
        }
    })

});

io.on("connection", (socket) => {

    socket.on("disconnect", () => {

        Player.findOneAndRemove({socketID: socket.id}, (err, foundPlayer) => {
            if(!err && foundPlayer){
                console.log("Player: " + "{name: " + foundPlayer.name + ", socketID: " + foundPlayer.socketID + "} was successfully deleted.")
            } else {
                console.log(err);
            }
        });
    })
});