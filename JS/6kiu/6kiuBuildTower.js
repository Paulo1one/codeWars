function towerBuilder(nFloors) {
  let newArr = [];
  let count = 1;
  for (let i = 1; i <= nFloors; i++) {
    newArr.push(
      ' '.repeat(nFloors - i) + '*'.repeat(count) + ' '.repeat(nFloors - i)
    );
    count += 2;
  }
  return newArr;
}
towerBuilder(1);
towerBuilder(2);
