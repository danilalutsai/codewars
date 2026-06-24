function uniqueInOrder(array) {
  const result = []
  for (const item of array) {
    if (item !== result[result.length - 1])
      result.push(item)
  }
  return result
}

console.log(uniqueInOrder([1,2,2,3,3]))
console.log(uniqueInOrder("abbcccd"))

