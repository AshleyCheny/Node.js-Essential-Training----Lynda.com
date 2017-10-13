// create an express server
var express = require("express");
var http = require("http");
var app = express();
// create an http server based on express app
var server = http.createServer(app).listen(3002);
// invoking the server for incoming connection/messages
var io = require("socket.io")(server);

app.use(express.static("./public"));

// listen on the incoming connection
io.on("connection", function(socket) {

    // when a chat event occurs in the server
    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });

  // send back the message to the client
	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3002");
