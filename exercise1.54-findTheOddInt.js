function findOdd(array) {
  return array.find((number) => {
    const count = array.filter((x) => x === number).length
    return count % 2 !== 0
  })
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
