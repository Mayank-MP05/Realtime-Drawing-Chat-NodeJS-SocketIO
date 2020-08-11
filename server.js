const express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var PORT = process.env.PORT || 8000;

app.use(express.static(`${__dirname}/client`));
let dwgArr = [];
// app.get("/", (req, res) => {
//   console.log("Get request to Homepage");
//   res.send("Hiii sent by server...");
// });

//Realtime message sending socket part
io.on("connection", function (socket) {
  //On getting drawing from request emit it to all users
  //console.log("usr connected");
  socket.on("drawing", function (dwg) {
    dwgArr.push(dwg);
    io.emit("drawing", dwg);
  });
});

http.listen(PORT, function () {
  console.log(`Server Started on PORT: ${PORT}`);
});
