# NodeTraining
[This is a course from Lynda.com]()

## What is Node.js?
### Node.js history
- 2009: Node.js created
- 2011: NPM created
- September 14, 2015: Node.js 4.0 released

### How Node.js works?
- Single Thread (multi-tasks)
  - do not wait (asynchronous)

## Installing Node.js
[nodejs.org](https://nodejs.org/en/)
### Upgrading Node
- `node -v`
- Check versions in the website

## Node Core
- Run NodeJS app in the Terminal using `node xx.js`
### The global object
- [global object](https://nodejs.org/api/globals.html)

### Argument Variables with process.argv
- useful when want to specify certain file for the app in the beginning

### Standard input and Standard output
- `stdout`
- `stdin`
- ways to communicate with process

### Global timing functions
- `setTimeout()`
- `setInterval()`
- `clearInterval()`
- `clearTimeout()`

## Node Modules
### Core modules
- use `require()` method to include a module into the app
#### `path` module
  - `path.basename()`
  - `path.join()`
#### `util` module
  -  `util.log()`

### Readline Module
  - `readline.createInterface()`
  - `rl.question()`
  - `rl.setPrompt()`
  - `prompt()`
  - `on()`

### Handling events with EventEmitter
  - create custom events and their responding callbacks
  - trigger the events
  - `util.inherits()`
  - `on()`
  - `emit()`

### Exporting custom modules
- Every JavaScript file is a module
- Export the module so that other module can require it
- Easier to reuse the module

### Creating child process with exec
- communicate with external process/execute external processes
- `require('child_process')`

### Creating child process with spawn
- `spawn` for longer ongoing processes
