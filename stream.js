var fs = require('fs');

// // read the file and save the file content in a variable
// // may cause memory issue for large files
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
//   console.log(`File Read ${ chatlog.length }`);
// });

// create a readable stream with multiple chunks
var stream = fs.createReadStream('./chat.log', 'UTF-8');

var data = '';

// start reading(stream)
stream.once("data", function(){
  console.log('\n\n\n\n');
  console.log('Started Reading File');
  console.log('\n\n\n\n');
});

// read chunks
stream.on("data", function(chunk){
  process.stdout.write(`chunk: ${ chunk.length } |`);
  // concatinate all the chunks together will be the data
  data += chunk;
});

// finish the stream 
stream.on("end", function(){
  console.log('\n\n\n\n');
  console.log(`Finished Reading File ${ data.length}`);
  console.log('\n\n\n\n');
});
