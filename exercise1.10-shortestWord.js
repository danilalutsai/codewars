// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(words){
    return Math.min(...words.split(" ").map((words) => words.length))
}

console.log(findShort("Hello word"))
