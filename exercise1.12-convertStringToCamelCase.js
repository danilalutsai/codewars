// Complete the method/function so that it converts dash/underscore delimited words into 
// camel casing. The first word within the output should be capitalized only 
// if the original word was capitalized (known as Upper Camel Case, 
// also often referred to as Pascal case). The next words should be always capitalized.

// Examples
//
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    // If we have multiple conditions in .split() method we need to use regex /[]/ and 
    // conditions are written in square brackets
    //
    // const splittedArray = str.split(/[-_]/)
    // const capitalizedArray = splittedArray.map((word) => word[0].toUpperCase() + word.slice(1))
    // let result = capitalizedArray.join("")
    const words = str.split(/[-_]/)
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join("")
}

console.log(toCamelCase("the-stealth_warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
