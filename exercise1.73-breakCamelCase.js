function solution(string) {
  let result = [];

  const array = string.split("");
  for (const char of array) {
    if (char >= "a" && char <= "z") {
      result.push(char);
    } else if (char >= "A" && char <= "Z") {
        result.push(" ");
        result.push(char);
      }
  }
  return result.join("");
}

console.log(solution("camelCasing"));
