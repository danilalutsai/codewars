function deleteNth(array, num) {
  const result = []

  for (const number of array) {
    const count = result.filter(n => n === number).length
    console.log(count)

    if (count < num) {
      result.push(number)
    }
  }

  return result
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2))
