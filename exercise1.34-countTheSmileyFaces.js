// Given an array (arr) as an argument complete the function countSmileys 
// that should return the total number of smiling faces.
//
// Rules for a smiling face:
//
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// function countSmileys(array) {
//   let count = 0
//
//   for (const smile of array) {
//     if (smile.length === 2) {
//       if 
//       ((":;").includes(smile[0]) && 
//       (")D").includes(smile[1])) count++
//     } else if (smile.length === 3) {
//       if ((":;").includes(smile[0]) && 
//         ("-~").includes(smile[1]) && 
//         (")D").includes(smile[2])) count++
//     } 
//   }
//   return count
// }
  
function countSmileys(array) {
  return array.filter((smile) => /^[:;][-~]?[)D]$/.test(smile)).length
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
console.log(countSmileys(['']))
