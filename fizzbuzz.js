function parseNumberToFizzBuzz(number){
    let canBeDividedByThree = number % 3 === 0;
    let canBeDividedByFive = number % 5 === 0;
    let canBeDividedByThreeAndFive = number % 15 === 0;

    if (canBeDividedByThreeAndFive) return "FizzBuzz";
    if (canBeDividedByThree) return "Fizz";
    if (canBeDividedByFive) return "Buzz";
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