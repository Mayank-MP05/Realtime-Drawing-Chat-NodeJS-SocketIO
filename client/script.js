//This is jquery syantax to autoexecute function once
let socket, sendMessageBoard;
$(() => {
  socket = io();
  sendMessageBoard = new DrawingBoard.Board("sendMessageBoard");
  $("#sendDWGbtn").click(() => {
    // Send image to server on button click
    console.log("SEND");
    socket.emit("chat message", sendMessageBoard.getImg());
    //After sending image clears out the canvas
    sendMessageBoard.resetBackground();
    return false;
  });
  socket.on("chat message", function (msg) {
    $("#messageContainer").append($("<li>").html(`<img src="${msg}"/>`));
    window.scrollTo(0, document.body.scrollHeight);
  });
});
