// We need a function that can transform a string into a number. 
// What ways of achieving this do you know?
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

function stringToNumber(str) {
    return +str
}

console.log(stringToNumber("1234"))
