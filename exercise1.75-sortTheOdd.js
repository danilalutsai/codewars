function sortArray(array) {
  const sortedOdds = array
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOdds.shift()
    }
  }
  return array
}

console.log(sortArray([5, 8, 6, 3, 4]))
