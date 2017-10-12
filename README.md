# NodeTraining
[This is a course from Lynda.com](https://www.lynda.com/Node-js-tutorials/Renaming-removing-files/417077/454447-4.html)

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

## The File System
### Listing directory files
- `fs` module to interact with the file system
- asynchronously vs synchronously reading file

### Reading files
- read the text file or read the file as binaries

### Writing and appending files
-  `fs.writeFile()`
- `fs.writeFileSync()`
- `fs.appendFile()`

### Directory creation
- `fs.mkdir()`
- `fs.existsSync()`

### Renaming and removing files
- `fs.renameSync()`
- `fs.rename()`
- `fs.unlinkSync()`
- `fs.unlink()`

### Renaming and removing directories
- `fs.readdirSync()`
- `fs.unlinkSync()`
- `fs.rmdir()`

### Readable file streams
- `fs.createReadStream()`
- `stream.once()`
- `stream.on('data')`
- `stream.on('end')`

### Writable file streams
- `fs.createWriteStream()`
-  `stream.write()`
- `stream.close()`

## The HTTP Module
### Making a request
- `https/http` Module
- `https.request()`

### Build a web server
- HTTP Web Server vs HTTPS Web Server
- using `http` or `https` module

### Serving files
- respond the file back to the browser
