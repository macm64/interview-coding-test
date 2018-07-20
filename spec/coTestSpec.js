const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 3, 6) ]);
    const productPrinter = function (product) {
      console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    };
    for (let i = 1; i <= 30; i += 1) {
      console.log(`Day ${i}`);
      console.log('name, sellIn, price');
      coTest.updatePrice().forEach(productPrinter);
      console.log('');
    }
    expect(coTest.products[0].price).equal(0);
  });

});
