function duplicateEncoder(string) {
  const chars = [...string.toLowerCase()]
  console.log(chars)
  return chars
    .map((char) => chars.indexOf(char) === chars.lastIndexOf(char) ? "(" : ")")
    .join("")
}

// const array = ["a", "b", "c", "c", "d"]

// console.log(array.map((letter) => array.indexOf(letter) === array.lastIndexOf(letter)))

console.log(duplicateEncoder("Success"))

