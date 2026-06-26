function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i].charCodeAt(0)
    const next = array[i + 1].charCodeAt(0)

    if (next !== current + 1){
      return String.fromCharCode(current + 1)
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']))
