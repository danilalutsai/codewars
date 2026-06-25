function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false
  if (arr1.length === 0 || arr2.length === 0) return false

  const squaredA = arr1.map((element) => element * element).sort((a, b) => b - a)
  const sortedB = arr2.sort((a, b) => b - a)

  for (let i = 0; i < squaredA.length; i++) {
    if (squaredA[i] !== sortedB[i]) return false
  }
  return true
}

console.log(comp([1, 2, 3],[1, 4, 9]))
