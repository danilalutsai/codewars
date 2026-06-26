function uniqueInOrder(string) {
  let result = []
  for (let i = 0; i < string.length; i++) {
    string[i] !== string[i + 1] ? result.push(string[i]) : false
    
  }
  return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
