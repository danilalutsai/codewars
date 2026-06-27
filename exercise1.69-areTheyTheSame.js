function comparison(array1, array2) {
  const sortedArray1 = array1.sort((a, b) => a - b)
  const sortedArray2 = array2.sort((a, b) => a - b)

  if (array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (sortedArray1[i] * sortedArray1[i] === sortedArray2[i]) {
        return true
      } else if (sortedArray2[i] * sortedArray2[i] === sortedArray1[i]) {
        return true
      } else {
        return false
      }
    }
  }
  return false
}

console.log(comparison(
  [121, 14641, 20736, 361, 25921, 361, 20736, 361],
  [121, 144, 19, 161, 19, 144, 19, 11], 
))
