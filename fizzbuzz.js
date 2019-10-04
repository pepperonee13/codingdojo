function parseNumberToFizzBuzz(number){
    let canBeDividedByThree = number % 3 === 0;
    let canBeDividedByFive = number % 5 === 0;

    if (canBeDividedByThree) return "Fizz";
    else if (canBeDividedByFive) return "Buzz";
    else return number.toString();
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