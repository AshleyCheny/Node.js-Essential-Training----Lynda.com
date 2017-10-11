// var events = require('events');
//
// var emitter = new events.EventEmitter();
//
// // event constructor
// emitter.on('customEvent', function(message, status){
//   console.log(`${ status}: ${ message}`);
// });
//
// // emit a custom event
// emitter.emit('customEvent', "Hello World", 200);

// include the custom module
var Person = require("./lib/Person");

var ben  = new Person('Ben Franklin');
var george = new Person('George Washington');

// create the event "speak" and its callback function
ben.on('speak', function(said){
  // this == ben
  console.log(`${ this.name }: ${ said }`);
});

// create the event "speak" and its callback function
george.on('speak', function(said){
  // this == ben
  console.log(`${ this.name } --> ${ said }`);
});

// trigger the custom event
ben.emit('speak', "You may delay, but time will not.");

// trigger the custom event
george.emit('speak', "It is far better to be alone, than to be in bad company");
