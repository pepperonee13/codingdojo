const assert = require('assert');
const fizzBuzzResult = require("./result");
const { compute } = require('./fizzbuzz');

function assertLastItemEquals(computeMaxValue, expectedValue){

    assert.equal(compute(computeMaxValue)[computeMaxValue - 1], expectedValue);
}

describe('FizzBuzz tests', function () {
    it('should return FizzBuzz for every number which can be divided with 3 and 5', function () {
        assertLastItemEquals(15, "FizzBuzz");
    });
    it('should return Fizz for 3', function () {
        assertLastItemEquals(3, "Fizz");
    });
    it('should return Buzz for 5', function () {
        assertLastItemEquals(5, "Buzz");
    });
    it('should be Fizz if contains 3', function () {
        assertLastItemEquals(13, "Fizz");
    });
    it('should be Buzz if contains 5', function () {
        assertLastItemEquals(52, "Buzz");
    });

    it("should work up to 36 numbers", () => {
        const computeCollection = compute(36);
        assert.equal(computeCollection.join(", "), fizzBuzzResult);
    });

});