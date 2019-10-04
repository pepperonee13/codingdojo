const assert = require('assert');
const { compute } = require('./fizzbuzz');

describe('FizzBuzz tests', function () {
    it('should return correct string for 5', function () {
        assert.deepEqual(['1', '2', 'Fizz', '4', 'Buzz'], compute(5));
    });
    it('should return FizzBuzz for every number which can be divided with 3 and 5', function () {
        let computeCollection = compute(15);
        assert.equal(computeCollection[14], 'FizzBuzz');
    });
    it('should be Fizz if contains 3', function () {
        let computeCollection = compute(13);
        assert.equal(computeCollection[12], 'Fizz');
    })
});