function validBraces(braces) {
  const stack = []
  const validBraces = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  for (const brace of braces) {
    if (brace === "(" || brace === "[" || brace === "{") {
      stack.push(brace)
    } else {
      if (stack.pop(brace) !== validBraces[brace]) {
        return false
      }
    }
  }

return stack.length === 0
}

console.log(validBraces("[{}]"))
