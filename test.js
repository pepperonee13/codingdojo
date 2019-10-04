const assert = require('assert');
const { compute } = require('./fizzbuzz');

describe('FizzBuzz tests', function () {
    it('should return correct string for 5', function () {
        assert.deepEqual(['1', '2', 'Fizz', '4', 'Buzz'], compute(5));
    });
});