function longestConsec(array, n) {
  let longest = ""

  if (array.length === 0 || !array) {
    return ""
  }

  for (let i = 0; i < array.length; i++) {
    let current = array.slice(i, i + n).join("")
    if (current.length > longest.length) {
      longest = current
    }
  }
  return longest
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3))
