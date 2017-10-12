// create an express app
// all the codes below will run line by line except those callback functions
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

// create an array of objects, want to use the data for the api
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

// middleware
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// custom middleware
// when the app is used, run the callback function
app.use(function(req, res, next){
  console.log(`${ req.method } request for ${ req.url } - ${ JSON.stringify(req.body)}`);
  // we have to invoke the next() function to tell the app to go to the next
  next();
});

// any file requested under the public folder will be servered
// files under the public folder will be sent to the browser
app.use(express.static('./public'));

// use cors middleware, so that any domain can make request to the following api
app.use(cors());
// set up a get route
app.get('/dictionary-api', function(req, res){
  res.json(skierTerms);
});

// set up a post route
app.post('/dictionary-api', function(req, res){
  skierTerms.push(req.body);
  res.json(skierTerms);
});

// set up a delete route
app.delete('/dictionary-api/:term', function(req, res){
  // use array filter function
  skierTerms = skierTerms.filter(function(definition){
    return definition.term.toLowerCase() !== req.params.term.toLowerCase();
  });

  res.json(skierTerms);
});
app.listen(3002);

console.log("Express app running on port 3002");

// export the app module for testing
module.exports = app;
