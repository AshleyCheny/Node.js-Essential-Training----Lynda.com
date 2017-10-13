var expect = require("chai").expect;
var rewire = require("rewire");
// var tools = require("../lib/order");
// create the use the order module object
var order = rewire("../lib/order");

// use testing data instead of real inventory data
describe("Ordering Items", function(){
  // set up the test data
  beforeEach(function(){
    this.testData = [
      {
        sku: "AAA",
        qty: "10"
      },
      {
        sku: "BBB",
        qty: "0"
      },
      {
        sku: "CCC",
        qty: "3"
      }
    ];

    order.__set__("inventoryData", this.testData);
  });

  // write the test
  it("order an item when there are enough in stock", function(done){
    order.orderItem("CCC", 3, function(){
      done();
    });
  });
});
