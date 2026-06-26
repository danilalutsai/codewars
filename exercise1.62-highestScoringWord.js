function high(string) {
  let highestWord = "";
  let highestScore = 0;

  const words = string.split(" ");

  for (let word of words) {
    let score = 0;

    for (let letter of word) {
      score += letter.charCodeAt(0) - 96;
      // console.log(word)
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

console.log(high("man i need a taxi up to ubud"))
