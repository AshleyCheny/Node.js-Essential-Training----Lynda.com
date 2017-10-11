var fs = require('fs');

// TODO: check the existence of a directory
if (fs.existsSync("lib")) {
  console.log("Directory already exists.");
} else {

  // use mkdir method, the first parameter will be the name of the directory, the second parameter will be the callback function
  fs.mkdir("lib", function(err){
    if (err) {
        console.log(err);
    } else {
      console.log("Directory created");
    }

  });
}
