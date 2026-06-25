function tribonacci(signature, n) {
  let arr = signature.slice(0, n)

  while (arr.length < n) {
    arr.push(arr.at(-1) + arr.at(-2) + arr.at(-3))
  }

  return arr
}


console.log(tribonacci([1, 2, 4], 1))

