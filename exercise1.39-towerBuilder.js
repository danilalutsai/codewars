function towerBuilder(nFloors) {
  const tower = []

  for (let i = 0; i < nFloors; i++) {
    const stars = "*".repeat(i * 2 + 1)
    const spaces = " ".repeat(nFloors - i - 1)
    tower.push(spaces + stars + spaces)
  }
  return tower
}

console.log(towerBuilder(3))
