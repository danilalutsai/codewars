function moveZeros(array) {
  let zeros = 0
  
  let arrayNoZeros = array.filter((element) => element !== 0)

  for (let i = 0; i < array.length; i++) {
    array[i] === 0 ? zeros++ : false
  }

  for (let i = 0; i < zeros; i++) {
    arrayNoZeros.push(0)
  }

  return arrayNoZeros
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
