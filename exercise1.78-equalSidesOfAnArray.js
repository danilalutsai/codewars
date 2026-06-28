function findEvenIndex(array) {

  for (let i = 0; i < array.length; i++) {
    const leftSum = array.slice(0, i).reduce((arr, n) => arr + n, 0)
    const rightSum = array.slice(i).reduce((arr, n) => arr + n, 0)

    if (rightSum === leftSum) {
      return i
    }
  }
  return -1
}



console.log(findEvenIndex([1,100,50,-51,1,1]))
// console.log(findEvenIndex([1,2,3,4,3,2,1]))
