const findBook = require('../utils/findBook');
const expect = require('chai').expect;

describe('findBook', function () {
  it('should return an array of objects with length 5', function () {
    return findBook().then((data) => {
      expect(data).to.have.length(5);
    });
  });
});
