// send a request to other server using NodeJS module "https"
// which is different from the client side sends request(using jQuery/Angular libraries) to the Node Server

var https = require('https');
var fs = require("fs");

var options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET"
}

// res is a stream 
var req = https.request(options, function(res){
  // res is the response got from the other server
  var responseBody = "";

  console.log("Response from server started...");

  console.log(`Server Status: ${ res.statusCode }`);
  console.log(`Response Headers: %j`, res.headers);

  // make sure we get text instead of binaries
  res.setEncoding("UTF-8");

  res.once("data", function(chunk){
    console.log("This is the first chunk: \n" + chunk);
  });

  // collect all the chunks and save them in the responseBody variable
  res.on("data", function(chunk){
    console.log(`---chunk--- ${ chunk.length }`);
    responseBody += chunk;
  });

  // when stop receiving chunks from the server, write the data to a file
  res.on('end', function(chunk){
    fs.writeFile("George_Washington.html", responseBody, function(err){
      if (err) {
        throw err;
      }
      console.log("File Downloaded");
    });
  });
});

req.on("error", function(err){
  console.log(`problem with request: ${ err.message }`);
});

req.end();
