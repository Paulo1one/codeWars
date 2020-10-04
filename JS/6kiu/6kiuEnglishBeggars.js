function beggars(values, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr[i] = 0;
    for (let j = i; j < values.length; j += n) {
      newArr[i] += values[j];
    }
  }
  return newArr;
}

console.log(beggars([1, 2, 3, 4, 5], 0)); //[]
console.log(beggars([1, 2, 3, 4, 5], 1)); //[15]
console.log(beggars([1, 2, 3, 4, 5], 2)); //[9,6]
console.log(beggars([1, 2, 3, 4, 5], 3)); //[5,7,3]
console.log(beggars([1, 2, 3, 4, 5], 9)); //[1,2,3,4,5,0]
