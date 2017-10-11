var EventEmitter = require('events').EventEmitter;
var util = require('util');

// create the Person prototype
var Person = function(name){
  this.name = name;
};

// all the person object will have the EventEmitter object
util.inherits(Person, EventEmitter);

// export this file module 
module.exports = Person;
