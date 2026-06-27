function high(string) {
  let scores = 0
  let highest = 0
  let highestWord = ""

  const words = string.split(" ")

  for (const word of words) {
    for (const letter of word) {
      scores += letter.charCodeAt(0) - 96
      if (scores > highest) {
        highest = scores
        highestWord = word
      }
    }
    scores = 0
  }
  return highestWord
}

console.log(high("a abad taxi"))
