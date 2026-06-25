function longestConsec(array, k) {
  const n = array.length

  if (n === 0 || k > n || k <= 0) 
    return ""

  let longest = ""

  for (let i = 0; i <= n; i++) {
    const current = array.slice(i, i + k).join("")

    if (current.length > longest.length)
      longest = current
  }
  
  return longest
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))
