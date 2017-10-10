var path = require('path');
var util = require('util');
var v8 = require('v8');

// path.basename() method returns the last portion of a path
console.log(__filename);
console.log(path.basename(__filename));

// create a long path using path.join()
var dirUploads = path.join(__dirname, "wwww", "files", 'uploads');
console.log(dirUploads);

util.log(dirUploads);

util.log(v8.getHeapStatistics());
