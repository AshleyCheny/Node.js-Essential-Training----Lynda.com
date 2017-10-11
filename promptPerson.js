var readline = require('readline');
var fs = require("fs");

// use readline createInterface method to create an input output interface
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
  name: '',
  sayings: []
};

// run readline object rl's question() method, wait for the input
rl.question("What is the name of a real person?", function(answer){
  realPerson.name = answer;

  // create a write stream for the specific file
  var stream = fs.createWriteStream(realPerson.name + ".md");

  stream.write(`${ realPerson.name}\n====================\n\n`);

  // // TODO: Create a new Markdown File and write some contents to it
  // fs.writeFileSync(realPerson.name + ".md", `${ realPerson.name}\n====================\n\n`);

  // output a line
  rl.setPrompt(`What would ${ realPerson.name } say` );
  rl.prompt();

  // wait for an input
  rl.on('line', function(saying){

    if (saying.toLowerCase().trim() === 'exit') {
      // TODO: write to the stream
      stream.close();
      
      // close the event
      rl.close();
    } else {
      // save the sayings in the array
      realPerson.sayings.push(saying.trim());

      // // TODO: Append Sayings to that markdown file
      // fs.appendFile(realPerson.name + ".md", `* ${ saying.trim()}\n`);

      // TODO: write to the stream
      stream.write(`* ${ saying.trim()}\n`);

      // output
      rl.setPrompt(`What else would ${ realPerson.name } say? ('exit') to leave)`);
      rl.prompt();
    }

    // console.log(saying.trim());
  });
  // console.log(answer);
});

rl.on('close', function(){
  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit();
});
