function findOutlier(integers) {
  const oddNumbers = integers.filter((number) => number % 2 !== 0)
  const evenNumbers = integers.filter((number) => number % 2 === 0)
  
  if (oddNumbers.length === 0) {
    return 1
  } else if (
    evenNumbers.length === 0
  ) {
    return 1
  }

  return oddNumbers.length > 1 ? +evenNumbers.join("") : +oddNumbers.join("")
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([0, 2]))
console.log(findOutlier([1]))
