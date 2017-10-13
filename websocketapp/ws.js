var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3002});

// the callback will be invoked when there is a new connection(user) event triggered
wss.on("connection", function(ws){
  // send message back to the client
  ws.send("Welcome to Cyber Chat");
});

console.log("Web Socket Server is running");
