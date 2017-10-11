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

var EventEmitter = require('events').EventEmitter;
var util = require('util');

// create the Person prototype
var Person = function(name){
  this.name = name;
};

// all the person object will have the EventEmitter object
util.inherits(Person, EventEmitter);

var ben  = new Person('Ben Franklin');

// create the event "speak" and its callback function
ben.on('speak', function(said){
  // this == ben
  console.log(`${ this.name }: ${ said }`);
});

// trigger the custom event
ben.emit('speak', "You may delay, but time will not.");
