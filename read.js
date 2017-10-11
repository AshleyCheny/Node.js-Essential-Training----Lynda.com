var fs = require("fs");
var path = require("path");

// // synchronously w UTF-8(text) encoding
// // return text
// var contents = fs.readFileSync('./lib/sayings.md', "UTF-8");
//
// // synchronously w/o UTF-8 encoding
// // return the buffer binaries
// var contents = fs.readFileSync('./lib/sayings.md');
// console.log(contents);

// asynchronously
// var contents = fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents){
//   if (err) {
//     console.log(err);
//   }
//
//   console.log(contents);
// });
//
// console.log("Reading files... \nPlease wait...");

fs.readdir('./lib', function(err, files){
  // return the name of each file in the directory in an array
  console.log(files);
  files.forEach(function(fileName){
    var filePath = path.join(__dirname, "lib", fileName);
    console.log(file);

    var stats = fs.statSync(file);

    if (stats.isFile() && fileName!== ".DS_Store") {
      fs.readFile(filePath, "UTF-8", function(err, contents){
        console.log(`File Name: ${ fileName } \nFile Content: ${ contents }`);
      });
    }
  });
});
