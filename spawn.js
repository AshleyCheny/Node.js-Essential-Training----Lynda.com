var spawn = require("child_process").spawn;

var cp = spawn("node", ["alwaysTalking"]);

// get the output data from the alwaysTalking file
cp.stdout.on("data", function(data){
  // get the output data and do something here
  console.log(`STDOUT: ${ data.toString() }`);
});

cp.on("close", function(){
  console.log("Child process has ended");
  process.exit();
});

// input "stop" to stop the alwaysTalking
setTimeout(function(){
  cp.stdin.write("stop");
}, 4000);
