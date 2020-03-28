function orderWeight(str) {
  if (str.length === 0) return '';
  const arr = str
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ');
  const sum = x => (x.map())
  str = str
    .split(' ')
    .map(num => num.split('').reduce((acc, curr) => (acc += parseInt(curr)), 0));

  return str
    .map((elem, index) => (elem = [elem, Number(arr[index])]))
    .sort((a, b) => (a[0] === b[0] ? equalFunc(a, b) : a[0] - b[0]))
    .map(elem => elem[1])
    .join(' ');
}

function equalFunc(a, b) {
  for (let i = 0; i < Math.max(a[1].toString().length, b[1].toString().length); i++) {
    if (
      (a[1].toString()[i] === undefined && b[1].toString()[i] !== undefined) ||
      (a[1].toString()[i] !== undefined && b[1].toString()[i] === undefined)
    ) {
      return -1;
    } else if (a[1].toString()[i] > b[1].toString()[i]) {
      return 1;
    } else if (a[1].toString()[i] < b[1].toString()[i]) {
      return -1;
    }
  }
}

console.log(
  orderWeight(
    '1 200 2 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'
  )
);
