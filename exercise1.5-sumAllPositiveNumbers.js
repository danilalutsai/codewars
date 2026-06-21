// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren’t any positive numbers, return 0.

// Input

// const input = [1, -4, 12, 0, -3, 29, -150];
// Result
//
// 42;

const input = [1, -4, 12, 0, -3, 29, -150]

const positiveNumbers = input.filter((number) => number > 0)
const sumPositiveNumbers = positiveNumbers.reduce((arr, number) => arr + number, 0)

console.log(sumPositiveNumbers)

