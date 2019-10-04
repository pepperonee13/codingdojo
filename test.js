const assert = require('assert');
const fizzBuzzResult = require("./result");
const { compute } = require('./fizzbuzz');

describe('FizzBuzz tests', function () {
    it('should return correct string for 5', function () {
        assert.deepEqual(['1', '2', 'Fizz', '4', 'Buzz'], compute(5));
    });
    it('should return FizzBuzz for every number which can be divided with 3 and 5', function () {
        const computeCollection = compute(15);
        assert.equal(computeCollection[14], 'FizzBuzz');
    });
    it('should be Fizz if contains 3', function () {
        const computeCollection = compute(13);
        assert.equal(computeCollection[12], 'Fizz');
    });
    it('should be Buzz if contains 5', function () {
        const computeCollection = compute(52);
        assert.equal(computeCollection[51], 'Buzz');
    });

    it("should work up to 36 numbers", () => {
        const computeCollection = compute(36);
        assert.equal(computeCollection.join(", "), fizzBuzzResult);
    });

});