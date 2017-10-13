var https = require("https");

module.exports = {
  // define the printName function
  printName(person){
    return `${ person.lastname}, ${ person.firstname}`
  },

  // the callback will only will invoked when the it returns the page
  loadWiki(person, callback){
    var url = `https://en.wikipedia.org/wiki/${person.firstname}_${person.lastname}`;

    https.get(url, function(res){
      var body = "";

      res.setEncoding("UTF-8");
      
      res.on("data", function(chunk){
        body += chunk;
      });

      res.on("end", function(){
        callback(body);
      });
    });

  }
}
