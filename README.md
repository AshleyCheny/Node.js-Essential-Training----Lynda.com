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

### Serving JSON data
- api returns json object to the browser
- `JSON.stringify()`

### Collecting POST data
- the server listens on the request's 'data' event and collect the form data
- then send back the collected data

Above is a pure NodeJS tutorial (w/o using libraries like Express.js)

============================================================================

## Node Package Manger
- [npm](https://www.npmjs.com/)
### Installing npms locally
- `npm install xxx`
- will install the package under the folder
- `npm remove xxx` or simply delete the node_module folder

### Installing npms globally on a Mac
- Any module that will be used across the whole application should be installed globally
- install `node-dev` module globally `sudo npm install -g node-dev`
- add to user local folder
- `node-dev app.js`

- install `jshint` module globally `sudo npm install -g jshint`
- `jshint app.js`
- `/* jshint esnext: true */`

### Install npms globally on PC
- run the command prompt as administrator
- `npm install -g node-dev`
- `node-dev xxx.js`

### File servers with httpster
- `httpster` module helps to server static content
  - `httpster -p 3000 -d ./public/`
  - create a website server

## Web servers
- Express Framework
### The package.json file
- `npm init`
- keep track of project dependencies
- `npm install express --save`
- `CORS` stands for Cross Origin Resource Sharing
- `cors` module
- parse form variable using `body-parser` module

### Intro to Express
- use middleware `app.use()`
- `app.listen()`;
- `module.exports = app`
