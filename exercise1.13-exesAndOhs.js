// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const lower = str.toLowerCase()
    let amountExes = 0
    let amountOhes = 0

    for (const letter of lower) {
        if (letter === "x") amountExes++;
        if (letter === "o") amountOhes++;
    }

    return amountExes === amountOhes
}

console.log(XO("zpzpzp"))
