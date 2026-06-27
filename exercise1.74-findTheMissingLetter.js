function findMissingLetter(array) {
  let arrayNumbers = [];
  for (const char of array) {
    if (char >= "A" && char <= "z") {
      arrayNumbers.push(char.charCodeAt(0));
      for (let i = 0; i < arrayNumbers.length - 1; i++) {
        if (arrayNumbers[i + 1] !== arrayNumbers[i] + 1) {
          return String.fromCharCode(arrayNumbers[i] + 1);
        }
      }
    }
  }
  return false;
}

console.log(findMissingLetter(["a", "b", "c", "e"]));


