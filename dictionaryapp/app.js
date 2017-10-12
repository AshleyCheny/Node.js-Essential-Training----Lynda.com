// create an express app
// all the codes below will run line by line except those callback functions
var express = require("express");

var app = express();

// middleware

// custom middleware
// when the app is used, run the callback function
app.use(function(req, res, next){
  console.log(`${ req.method } request for ${ req.url }`);
  // we have to invoke the next() function to tell the app to go to the next
  next();
});

// any file requested under the public folder will be servered
// files under the public folder will be sent to the browser
app.use(express.static('./public'));

app.listen(3002);

console.log("Express app running on port 3002");

// export the app module for testing
module.exports = app;
