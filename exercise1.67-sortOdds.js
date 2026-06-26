function sortArray(array) {
  const odds = array
    .filter(number => number % 2 !== 0)
    .sort((a, b) => a - b);


  return array.map((number) => {
    if (number % 2 !== 0) {
      return odds.shift()
    }
    return number;
  });
};

console.log(sortArray([5, 8, 6, 3, 4]));
