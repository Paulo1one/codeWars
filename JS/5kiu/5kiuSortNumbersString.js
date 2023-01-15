function sortByName(ary) {
  let numbers = {
    0: ['zero'],
    1: ['one'],
    2: ['two'],
    3: ['three', 'thirty'],
    4: ['four', 'forty'],
    5: ['five', 'fifty'],
    6: ['six', 'sixty'],
    7: ['seven', 'seventy'],
    8: ['eight', 'eighty'],
    9: ['nine', 'ninety'],
    10: ['ten'],
    11: ['eleven'],
    12: ['twelve'],
    13: ['thirteen'],
    14: ['fourteen'],
    15: ['fifteen'],
    16: ['sixteen'],
    17: ['seventeen'],
    18: ['eighteen'],
    19: ['nineteen'],
    20: ['twenty']
  };
  let name = '';
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].toString().length === 1) {
      name = numbers[ary[i]][0];
      ary.splice(i, 1, [ary[i], name]);
      ary.sort((a, b) => {
        if (a[1] < b[1]) {
          return -1;
        }
        if (a[1] > b[2]) {
          return 1;
        }
        return 0;
      });
    }
    /////////////ver isso aqui maluco
    else if (ary[i].toString().length === 2) {
      numbers[ary[i]][0]
        ? (name = numbers[ary[i]][0])
        : (name = numbers[ary[i].toString()[0]][1]);
      ary.splice(i, 1, [ary[i], name]);
      ary.sort((a, b) => {
        if (a[1] < b[1]) {
          return -1;
        }
        if (a[1] > b[2]) {
          return 1;
        }
        return 0;
      });
    }
  }
  return ary;
}

console.log(sortByName([1, 2, 3, 4]));
console.log(sortByName([15, 99, 2, 3, 4]));
