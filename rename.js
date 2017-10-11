var fs = require('fs');

// TODO: rename file synchronously
fs.renameSync('./lib/project-config.js', './lib/config.json');

console.log("Config json file renamed.");

// move file asynchronously
fs.rename('./lib/notes.md', './notes.md', function(err){
  if (err) {
    console.log(err);
  }

  console.log("note.md moved successfully");
});
