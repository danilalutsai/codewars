function comp(a, b) {
  if (!a || !b || a.length !== b.length) {
    return false
  }

  const squaredA = a.map(num => num * num).sort((a, b) => a - b)
  const sortedB = b.sort((a, b) => a - b)

  return squaredA.every((num, index) => num === sortedB[index])
}

console.log(comp(
  [121, 144, 19, 161, 19, 144, 19, 11], 
  [121, 14641, 20736, 361, 25921, 361, 20736, 361],
))
