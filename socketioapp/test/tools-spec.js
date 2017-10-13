var expect = require("chai").expect;
var tools = require("../lib/tools");

// test the printName() function
describe("printName()", function(){
  it("should print the last name first", function(){
    // run the tested function and save the results
    var results = tools.printName({firstname: "Alex", lastname: "Banks"});

    // compare the results with the expected outputs
    expect(results).to.equal("Banks, Alex");
  });
});
