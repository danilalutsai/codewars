function arrayDiff(a, b) {
  return a.filter((number) => !b.includes(number))
}

console.log(arrayDiff([3, 2, 2, 2, 1], [2]))
