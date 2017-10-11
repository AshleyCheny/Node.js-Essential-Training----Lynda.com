var exec = require('child_process').exec;

// exec("open http://ashleycheny.me");

// exec('open -a Terminal .');

// after execute command "ls", run the callback function
exec('ls', function(err, stdout){
  if (err) {
    throw err;
  }

  console.log("Listing Finished");
  console.log(stdout);
});

exec('git version', function(err, stdout){
  if (err) {
    throw err;
  }

  console.log("git version excuted");
  console.log(stdout);
});
