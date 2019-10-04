function parseNumberToFizzBuzz(number){
    const canBeDividedByThree = number % 3 === 0;
    const canBeDividedByFive = number % 5 === 0;
    const canBeDividedByThreeAndFive = number % 15 === 0;

    const numberAsString = number.toString();
 
    const itContainThree = numberAsString.includes("3");

    if (canBeDividedByThreeAndFive) return "FizzBuzz";
    if (canBeDividedByThree) return "Fizz";
    if (canBeDividedByFive) return "Buzz";
    if(itContainThree) return "Fizz";
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