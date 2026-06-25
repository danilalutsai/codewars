function pigIt(string) {
  return string
    .split(" ")
    .map((word) => {
      if (/^[A-Za-z]+$/.test(word)) {
        return word.slice(1) + word[0] + "ay"
      }
      return word

    })
    .join(" ")
}

console.log(pigIt("Pig latin is cool"))
