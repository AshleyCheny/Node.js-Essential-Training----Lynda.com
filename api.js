var http = require('http');

// data is an array, because inventory.json contains an array with objects
var data = require('./data/inventory');

http.createServer(function(req, res){
  // if the request for home page, return all the data
  if (req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/json"});

    res.end(JSON.stringify(data));
  } else if (req.url === '/instock') {
    listInStock(res);
  } else if (req.url === '/onorder') {
    listOnBackOrder(res);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});

    res.end("Data Not Found");
  }

}).listen(3002);

console.log("Server listening on port 3002...");


// functions
function listInStock(res){
  // 'data' is an array
  var inStock = data.filter(function(item){
    return item.avail === 'In stock';
  });

  res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
  // 'data' is an array
  var onOrder = data.filter(function(item){
    return item.avail === 'On back order';
  });

  res.end(JSON.stringify(onOrder));
}
