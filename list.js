// list the content of lib directory
var fs = require('fs');

// synchronously get the file which will block the next execution
// var file = fs.readdirSync('./lib');

// asynchronously by using callback function. It won't block the following execution
fs.readdir('./lib', function(err, files){
  if (err) {
    throw err;
  }

  console.log(files);
});

console.log("Reading Files...");
