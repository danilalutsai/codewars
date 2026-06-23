// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array === 0 || array.length === 0) {
    return 0
  } 
  return array.reduce((arr, number) => arr + number, 0) / array.length
}
console.log(findAverage([1, 2, 3]))
