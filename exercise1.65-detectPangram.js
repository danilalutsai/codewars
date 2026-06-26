function isPangram(string) {
  let letters = new Set()
  
  for (const char of string.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      letters.add(char);
    }
  }
  return letters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
