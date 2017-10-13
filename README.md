# NodeTraining
[This is a course from Lynda.com](https://www.lynda.com/Node-js-tutorials/Renaming-removing-files/417077/454447-4.html)

- A Express Node Server includes the following:
  - node_module (Libraries)
  - Express App (using the Libraries)
  - Static files (servered to the front end)
    - Eg. Angular App
  - DB

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
- `cors` module: any domain can make a request to the api
- parse form variable using `body-parser` module

### [Intro to Express](http://expressjs.com/en/api.html)
- Check the DOCUMENTATION to understand the usage of different methods (all based on JavaScript)
- use middleware `app.use()`
- `app.listen()`;
- `module.exports = app`

### Express routing and CORS
- `app.get()`
- `app.use(cors())`

### Express post bodies and params
- `body-parser`

## WebSockets
### Create a WebSocket server
- Long Polling (check if the server info has changed)
vs.
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
  - Create a two way connection to a socket
  - Sync data to all open connections, so client can easily broadcast changes to all connections
  - Not even web client but also any other application
-  `WS` module to create the WebSocket server

### Broadcast messages with WebSockets
- the client sends message to the server
- the server gets the message and broadcast it to all its connected clients

### Creating WebSockets with Socket.io
- Not all browsers support WebSocket
- `socket.io` is a module that help to build WebSocket
- roll back to "long polling" when the browser does not support web socket
- server side: use `socket.io` module
- client side: use socket.io client library

## Testing and Debugging*
### Testing with mocha and Chai Testing Frameworks
- [mocha](https://mochajs.org/) (unit testing)
  - install `mocha` globally
  - run `mocha`
  - create test folder
  - test-driven environment
    - run the test first
    - watch the test failure
    - write the files to make the test pass

### Asynchronous mocha testing
- downloading a file
- callback functions

### Mocking a server with Nock
- Eg. mock wikipedia server so whiling testing there is no need to wait
- `nock` module

### Injecting dependencies with rewire
- `rewire` module
- Eg. inject fake data instead of using the real data

### Advanced testing Sinon Spies*
- `sinon` module
- inject a mock up console.log without showing the text on the terminal

### Advanced testing Sinon stubs*

### Code coverage with Istanbul
- `npm install -g istanbul --save-dev`
- `istanbul cover _mocha`

### Testing HTTP endpoints with Supertest

### Checking server responses with Cheerio

## Automation and Deployment
### Hinting codes with Grunt
- JavaScript Task Runner
- `grunt-cli` module
- `grunt` module
- `grunt-contrib-jshint` module
