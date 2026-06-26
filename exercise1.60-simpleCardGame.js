function winner(deckSteve, deckJosh) {
  const cardValue = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
  }

  let pointsSteve = 0
  let pointsJosh = 0
  for (let i = 0; i < deckSteve.length; i++) {
    if (cardValue[deckSteve[i]] > cardValue[deckJosh[i]]) {
      pointsSteve++
    } else if (cardValue[deckSteve[i]] < cardValue[deckJosh[i]]) {
      pointsJosh++
    } else {
      false
    }
  }

  if (pointsSteve === pointsJosh)
    return "Tie"

  if (pointsSteve > pointsJosh) 
    return `Steve wins ${pointsSteve} to ${pointsJosh}`

  if (pointsSteve < pointsJosh)
    return `Josh wins ${pointsJosh} to ${pointsSteve}`

}

console.log(winner(['A'], ['A']))
