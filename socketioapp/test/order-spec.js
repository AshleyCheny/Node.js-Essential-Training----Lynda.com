var expect = require("chai").expect;
var rewire = require("rewire");
// var tools = require("../lib/order");
var sinon = require("sinon");

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

    this.console = {
      log: sinon.spy()
    };

    order.__set__("inventoryData", this.testData);
    order.__set__("console", this.console);
  });

  // write the test
  it("order an item when there are enough in stock", function(done){
    var _this = this;
    order.orderItem("CCC", 3, function(){
      expect(_this.console.log.callCount).to.equal(2);
      done();
    });
  });
});
