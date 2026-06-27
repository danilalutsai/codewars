function solution(string) {
  let array = [];
  for (let i = 0; i < string.length; i += 2) {
    let sliced = string.slice(i, i + 2);
    if (sliced.length < 2) {
      sliced += "_";
    }
    array.push(sliced);
  }
  return array;
}

console.log(solution("abc"));
