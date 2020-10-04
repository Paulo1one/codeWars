function tickets(peopleInLine) {
  let j = { 100: 0, 50: 0, 25: 0 };
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      j[25]++;
    } else if (peopleInLine[i] === 50) {
      j[25]--;
      j[50]++;
    } else if (peopleInLine[i] === 100) {
      if (j[25] >= 1 && j[50] >= 1) {
        j[25]--;
        j[50]--;
      } else if (j[25] >= 3) {
        j[25] -= 3;
      } else {
        j[25]--;
        j[50]--;
      }
    }
    if (j[100] < 0 || j[50] < 0 || j[25] < 0) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(tickets([25, 25, 50, 50])); //, 'YES');
console.log(tickets([25, 100])); //, 'NO');
console.log(
  tickets([
    25,
    25,
    50,
    100,
    25,
    25,
    50,
    100,
    25,
    25,
    25,
    100,
    25,
    25,
    25,
    100,
    25,
    25,
    50,
    100,
  ])
); //,  'YES'
