function suggestedChallenge(a, b) {
  return a.filter((element) => !b.includes(element))
}

console.log(suggestedChallenge([1, 2, 2, 3], [2]))
