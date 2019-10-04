function parseNumberToFizzBuzz(number){
    const canBeDividedByThree = number % 3 === 0;
    const canBeDividedByFive = number % 5 === 0;

    const numberAsString = number.toString();

    if (canBeDividedByFive && canBeDividedByThree) return "FizzBuzz";
    if (canBeDividedByFive || numberAsString.includes('5')) return "Buzz";
    if (canBeDividedByThree || numberAsString.includes("3")) return "Fizz";
    return number.toString();
}

function compute(maxValue) {
    const result = [];

    for (let number = 1; number <= maxValue; number++) {
        result.push(parseNumberToFizzBuzz(number));
    }

    return result;
}

module.exports = {
    compute
}