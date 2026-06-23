
function incrementer(string) {
  const array = string.split("")
  console.log(+array.at(-1))
  return array
}

console.log(incrementer("foo1"))
