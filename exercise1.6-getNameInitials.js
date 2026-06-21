// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// Input
// const input = "George Raymond Richard Martin";   
//
// Output
// "GRRM"

const input = "George Raymond Richard Martin"

const array = input.split(" ")
console.log(array)

const firstLetter = array.map(function (letter) { 
    return letter[0]
})
console.log(firstLetter)

const sumFirstLetters = firstLetter.join("")
console.log(sumFirstLetters)

