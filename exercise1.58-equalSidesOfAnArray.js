function findEvenIndex(array) {
  let totalSum = array.reduce((sum, num) => sum + num, 0)
  let leftSum = 0

  for (let i = 0; i < array.length; i++) {
    const rightSum = totalSum - leftSum - array[i]
    // console.log(rightSum)
    // console.log(leftSum)

    if (rightSum === leftSum) 
      return array[i]

    leftSum += array[i]
  }

  return -1
}

console.log(findEvenIndex([20,10,-80,10,10,15,35]))
