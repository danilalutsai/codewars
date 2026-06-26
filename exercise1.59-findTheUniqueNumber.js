function findUnique(array) {
  // const [a, b, c] = array
  // const common = a === b || a === c ? a : c
  // return array.find((number) => number !== common)
  array.sort((a, b) => a - b)
  if (array[0] === array[1]) {
    return array.pop()
  } else {
    return array[0]
  }
}

console.log(findUnique([1, 1, 1, 2, 1, 1]))
