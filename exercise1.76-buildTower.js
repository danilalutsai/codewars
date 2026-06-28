function buildTower(floors) {
  const result = [];

  for (let i = 0; i < floors; i++) {
    const stars = "*".repeat(i * 2 + 1)
    const spaces = " ".repeat(floors - i - 1)
    result.push(spaces + stars + spaces)
  }
  return result
}

console.log(buildTower(6))
