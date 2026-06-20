function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([10, 5, 42, 2]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
