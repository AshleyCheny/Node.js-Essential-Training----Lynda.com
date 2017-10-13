// create a web socket instance in the client side if the browser supports WebSocket(it means the browser provides the WebSocket method)
// WebSocket uses their own protocols
var ws = new WebSocket("ws://localhost:3002");

ws.onopen = function(){
  setTitle("Connected to the Cyber Chat");
};

ws.onclose = function(){
  setTitle("Disconnected");
};

ws.onmessage = function(payload){
  // and the coming messages to the DOM
  printMessage(payload.data);
};


document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
