var fs = require("fs");

// // move directories/folder using renameSync()
// fs.renameSync("./assets/logs", "./logs");
// console.log("Directory moved");

// // remove directories
// fs.rmdir("./assets", function(err){
//   if (err) {
//     // throw an err will cause the app to stop
//     throw err;
//   }
//
//   console.log("Assets directory removed");
// });

// TODO: find all the files under the directory and then remove all the files found

fs.readdirSync('./logs').forEach(function(fileName){

  // remove files
  fs.unlinkSync("./logs/" + fileName);
});

// cant remove a directory which is not empty
fs.rmdir("./logs", function(err){
  if (err) {
    throw err;
  }

  console.log("Logs directory removed");
});
