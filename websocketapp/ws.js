var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3002});

// the callback will be invoked when there is a new connection(user) event triggered
wss.on("connection", function(ws){

  // if the socket gets messages from the client, run the callback function 
  ws.on('message', function(message){
    if (message === 'exit') {
      ws.close();
    } else {
      // broadcast the chat message back to the clients
      wss.clients.forEach(function(client){
        client.send(message);
      });
    }
  });

  // send message back to the client
  ws.send("Welcome to Cyber Chat");
});

console.log("Web Socket Server is running");
