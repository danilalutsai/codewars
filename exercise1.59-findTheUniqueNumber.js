function findUnique(array) {
  const [a, b, c] = array
  const common = a === b || a === c ? a : c
  return array.find((number) => number !== common)
}

console.log(findUnique([1, 1, 1, 2, 1, 1]))
