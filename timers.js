var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

console.log("Wait for it");
function writeWaitingPercent(p){
  process.stdout.clearLine();

  process.stdout.cursorTo(0);

  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
  currentTime += waitInterval;

  // calculate the percent
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  writeWaitingPercent(percentWaited);
  // console.log(`waiting ${ currentTime / 1000} seconds...`);
}, waitInterval);

// wait for 3s and then call the callback function and DO SOMETHING
// during the waiting time, the application will be running
setTimeout(function(){
  // clear the timer in the application
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\nTime out!");
  process.stdout.write('\n\n\n');
}, waitTime);

process.stdout.write('\n\n\n');
writeWaitingPercent(percentWaited);
