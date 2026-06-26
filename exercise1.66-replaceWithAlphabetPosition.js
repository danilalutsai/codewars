function alphabetPosition(text) {
  let result = []

  for (const char of text.toLowerCase()) {
    if (char >= "a" && char <= "z")
      result.push(char.charCodeAt(0) - 96)
  }
  return result.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
