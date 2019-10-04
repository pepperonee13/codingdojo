function compute(number) {
    let result = [];
    for (let key = 1; key <= number; key++) {
        let canBeDividedByThree = key % 3 === 0;
        let canBeDividedByFive = key % 5 === 0;

        if (canBeDividedByThree) result.push("Fizz");
        else if (canBeDividedByFive) result.push("Buzz");
        else if (canBeDividedByThree && canBeDividedByFive) result.push("FizzBuzz");
        else result.push(key.toString());
    }
    return result;
}

module.exports = {
    compute
}