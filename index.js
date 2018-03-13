var express = require("express");
var app = express();
const path = require("path");
var http = require("http").Server(app);
var io = require("socket.io")(http);

const nouns = [
  "alarm",
  "animal",
  "aunt",
  "bait",
  "balloon",
  "bath",
  "bead",
  "beam",
  "bean",
  "bedroom",
  "boot",
  "bread",
  "brick",
  "brother",
  "camp",
  "chicken",
  "children",
  "crook",
  "deer",
  "dock",
  "doctor",
  "downtown",
  "drum",
  "dust",
  "eye",
  "family",
  "father",
  "fight",
  "flesh",
  "food",
  "frog",
  "goose",
  "grade",
  "grandfather",
  "grandmother",
  "grape",
  "grass",
  "hook",
  "horse",
  "jail",
  "jam",
  "kiss",
  "kitten",
  "light",
  "loaf",
  "lock",
  "lunch",
  "lunchroom",
  "meal",
  "mother",
  "notebook",
  "owl",
  "pail",
  "parent",
  "park",
  "plot",
  "rabbit",
  "rake",
  "robin",
  "sack",
  "sail",
  "scale",
  "sea",
  "sister",
  "soap",
  "song",
  "spark",
  "space",
  "spoon",
  "spot",
  "spy",
  "summer",
  "tiger",
  "toad",
  "town",
  "trail",
  "tramp",
  "tray",
  "trick",
  "trip",
  "uncle",
  "vase",
  "winter",
  "water",
  "week",
  "wheel",
  "wish",
  "wool",
  "yard",
  "zebra"
];

app.get("/", function(req, res) {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname + "/index.html");
});
//app.use(express.static(path.join(__dirname, 'public')));

var gameList = [];

function GenerateWordList() {
  var wordList = [];
  while (wordList.length < 25) {
    var newWord = nouns[Math.round(Math.random() * nouns.length)];
    if (wordList.indexOf(newWord) == -1) wordList.push(newWord);
  }
  return wordList;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//generates the board
function GenerateBoardConfig(firstPlayer) {
  var boardList = ["death"];
  //generate 6 blue
  for (var i = 0; i < 6; i++) {
    boardList.push(OppositeColor(firstPlayer));
  }
  //generate 7 red
  for (i = 0; i < 7; i++) {
    boardList.push(firstPlayer);
  }
  while (boardList.length < 25) {
    boardList.push("none");
  }
  return shuffle(boardList);
  //return ["blue","red","blue","red"];
  //generate 1 death, neutral, and 7/8 blue and red
}

function OppositeColor(color) {
  return color == "red" ? "blue" : "red";
}

var boards = {};

io.on("connection", function(socket) {
  //console.log("a user connected");
  socket.emit("game list", gameList);
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
    //socket.emit("chat message")
    console.log("message: " + msg);
  });
  socket.on("create game", function(msg) {
    boards[msg] = {};
    boards[msg].board = GenerateBoardConfig("red");
    boards[msg].currentTurn = "red";
    boards[msg].words = GenerateWordList();
    boards[msg].guesses = [];
    for (var i = 0; i < 25; i++) boards[msg].guesses.push(false);
    io.emit("create game", msg);
    if (gameList.indexOf(msg) != -1) return;
    gameList.push(msg);
  });

  socket.on("guess word", function(data) {
    console.log(data);
    boards[data[0]].guesses[data[1]] = true;
    io.to(data[0]).emit("guess word", data[1]);
    if (boards[data[0]].board[data[1]] == "death") {
      console.log("DEATH WORD PICKED");
      boards[data[0]].winner = OppositeColor(boards[data[0]].currentTurn);
      io.to(data[0]).emit("game won", boards[data[0]].winner);

      var index = gameList.indexOf(data[0]);
      boards[index] = null;
      gameList.splice(index, 1);
    }
    else if (boards[data[0]].board[data[1]] != boards[data[0]].currentTurn) {
      boards[data[0]].currentTurn =
        boards[data[0]].currentTurn == "blue" ? "red" : "blue";
      io.to(data[0]).emit("end turn", boards[data[0]].currentTurn);
      console.log("New turn: " + boards[data[0]].currentTurn);
    }
  });
  socket.on("join game", function(msg) {
    if (boards[msg] == null) {
      socket.emit("error", "Game not found");
    }
    socket.join(msg);
    if (boards[msg].winner != null)
      io.to(msg).emit("game won", boards[msg].winner);
    io.to(msg).emit("word list", boards[msg].words);
    io.to(msg).emit("game board", boards[msg].board);
    io.to(msg).emit("end turn", boards[msg].currentTurn);
    io.to(msg).emit("guesses", boards[msg].guesses);
  });

  socket.on("end turn", function(msg) {
    boards[msg].currentTurn =
      boards[msg].currentTurn == "blue" ? "red" : "blue";
    io.to(msg).emit("end turn", boards[msg].currentTurn);
    console.log("New turn: " + boards[msg].currentTurn);
  });

  socket.on("end game", function(msg) {
    io.to(msg).emit("end game");
    //Todo destroy the game
    var index = gameList.indexOf(msg);
    boards[index] = null;
    gameList.splice(index, 1);
    console.log("Destoying game at index: " + index);
    io.emit("game list", gameList);
  });
});
const port = process.env.PORT || 3000;
http.listen(port, function() {
  console.log("Listening on " + port);
});
