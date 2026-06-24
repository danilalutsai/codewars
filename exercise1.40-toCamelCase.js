function toCamelCase(string) {
  if (string.length === 0) return ""
  const array = string.split(/[-_]/)
  for (let i = 1; i < array.length; i++)
    return array[0] + array[i][0].toUpperCase() + array[i].slice(1) + array[i+1][0].toUpperCase() + array[i+1].slice(1)
}

console.log(toCamelCase(""))
