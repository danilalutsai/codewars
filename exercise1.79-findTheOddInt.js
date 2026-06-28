function findOdd(array) {
  const counts = {}

  for (const num of array) {
    counts[num] = (counts[num] || 0) + 1
    console.log(counts[num])
  }

  for (const num of array) {
    if (counts[num] % 2 !== 0) {
      return num
    }
  }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
