//This is jquery syantax to autoexecute function once
let socket, sendMessageBoard;
$(() => {
  socket = io.connect("http://localhost:8000");
  sendMessageBoard = new DrawingBoard.Board("sendMessageBoard");
  $("#sendDWGbtn").click(() => {
    // Send image to server on button click
    //console.log("SEND DRAWINGG");
    socket.emit("drawing", sendMessageBoard.getImg());
    //After sending image clears out the canvas
    sendMessageBoard.resetBackground();
    return false;
  });
  socket.on("drawing", function (msg) {
    $("#messageContainer").append(
      $("<li class='w-100 d-flex align-center justify-content-center'>").html(
        `<img src="${msg}" class="w-75 m-auto img-msg"/>`
      )
    );
    window.scrollTo(0, document.body.scrollHeight);
  });
});
