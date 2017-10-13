var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function(){
  // test the printName() function
  describe("printName()", function(){
    it("should print the last name first", function(){
      // run the tested function and save the results
      var results = tools.printName({firstname: "Alex", lastname: "Banks"});

      // compare the results with the expected outputs
      expect(results).to.equal("Banks, Alex");
    });
  });

  // another test
  describe("loadWiki()", function(){
    // this.timeout(5000);
    // create a mock server
    before(function(){
      nock("https://en.wikipedia.org")
      .get("/wiki/Abraham_Lincoln")
      .reply(200, "Mock Abraham Lincoln Page");
    });
    it("Load Abraham Lincoln's wikipedia page", function(done){
      // run the tested function
      tools.loadWiki({firstname: "Abraham", lastname: "Lincoln"}, function(html){
        expect(html).to.equal("Mock Abraham Lincoln Page");
        done();
      });
    });
  });
});
