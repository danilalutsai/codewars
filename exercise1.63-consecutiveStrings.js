function longestConsec(array, repeat) {
  const length = array.length

  if (length === 0 || repeat > length || repeat <= 0)
    return ""

  let longest = ""

  for (let i = 0; i <= length; i++) {
    const current = array.slice(i, i + repeat).join("")

    if (current.length > longest.length) 
      longest = current
  }
  return longest
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))
