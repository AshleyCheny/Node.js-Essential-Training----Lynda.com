// use the path module and save the path object in the variable "path"
var path = require("path");
console.log(`Rock on World from ${ path.basename(__filename)}`);



// global objects for NodeJS

// console is a global object for NodeJS
// global.console.log("Hello World");
console.log("Hello World");

// NodeJS works a bit different when it comes to store variables
var var1 = "hello, this is NodeJS";
// log "undefined"
console.log(global.var1);

// every js file is a node module, any variable created in a NodeJS file is scoped only to that module
// so the variable "var1" defined on top is not scoped for global.
console.log(var1);

// use ES6 feature: back-tick
var hello = "Hello World from Node js";
var justNode = hello.slice(17);

// with back-tick
console.log(`Rock on World from ${ justNode }`);
// without back-tick
console.log("Rock on World from " + justNode);

// global objects "__dirname" and "__filename"
console.log(__dirname);
console.log(__filename);
