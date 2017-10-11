var fs = require('fs');

var md = `
Sample Markdown Title
========================

Sample subtitle
------------------------

* point
* point
* point

`;

// create a new file and write content to the file 
fs.writeFile("sample.md", md.trim(), function(err){
  console.log("File Created");
});
