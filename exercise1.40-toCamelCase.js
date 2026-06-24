// function toCamelCase(string) {
//   if (string.length === 0) return ""
//   const array = string.split(/[-_]/)
//   for (let i = 1; i < array.length; i++)
//     return array[0] + array[i][0].toUpperCase() + array[i].slice(1) + array[i+1][0].toUpperCase() + array[i+1].slice(1)
// }
//
function toCamelCase(string) {
  if (string.length === 0) return ""
    const words = string.split(/[-_]/)
  let result = words[0]
  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1)
  }
  return result
}

console.log(toCamelCase("The-camel_case"))
