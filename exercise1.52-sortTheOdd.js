function sortArray(array) {
  const sortedOdds = array
    .filter((number) => number % 2 !== 0)
    .sort((a, b) => a - b)


  return array.map((number) => {
    if (number % 2 !== 0) {
      return sortedOdds.shift()
    }
    return number
  })
}

console.log(sortArray([5, 8, 6, 3, 4]))
