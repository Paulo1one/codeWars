function sortByName(ary) {
  ary = ary.map(x => {
    switch (x.toString().length) {
      case 1:
        return oneDigit(x);
      case 2:
        return twoDigit(x);
      case 3:
        return threeDigit(x);
    }
  });
  // return ary.sort((a, b) => a[1].localeCompare(b[1])).map(x => x[0]);
  return ary.sort((a, b) => a[1].localeCompare(b[1]));
}

function numberName(num, digit) {
  const numbers = {
    0: ['zero'],
    1: ['one', 'ten'],
    2: ['two', 'twenty'],
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
    19: ['nineteen']
  };
  return numbers[num][digit];
}

function oneDigit(num) {
  return [num, numberName(num, 0)];
}

function twoDigit(num) {
  const numb = num.toString();
  if (num > 19) {
    if (num % 10 === 0) {
      return [num, numberName(numb[0], 1)];
    }
    return [num, `${numberName(numb[0], 1)} ${numberName(numb[1], 0)}`];
  }
  return [num, numberName(num, 0)];
}

function threeDigit(num) {
  const numb = num.toString();
  //100,200,300,400..
  if (num % 100 === 0) {
    return [num, `${numberName(numb[0], 0)} hundred`];
    //105,206,307,401...
  } else if (Number(numb[1]) === 0) {
    return [num, `${numberName(numb[0], 0)} hundred ${numberName(numb[2], 0)}`];
    //110,120,130,150...
  } else if (Number(numb[1] + numb[2]) % 10 === 0) {
    return [num, `${numberName(numb[0], 0)} hundred ${numberName(numb[1], 1)}`];
    //111,112,113,119...
  } else if (Number(numb[1] + numb[2]) >= 11 && Number(numb[1] + numb[2]) <= 19) {
    return [
      num,
      `${numberName(num.toString()[0], 0)} hundred ${numberName(
        Number(num.toString()[1] + num.toString()[2]),
        0
      )}`
    ];
    //121,131,175,188
  } else if (Number(num.toString()[1] + num.toString()[2]) > 19) {
    return [
      num,
      `${numberName(num.toString()[0], 0)} hundred ${numberName(
        Number(num.toString()[1]),
        1
      )} ${numberName(num.toString()[2], 0)}`
    ];
  }
}

// console.log(sortByName([1, 2, 3, 4, 10]));
console.log(sortByName([882, 894, 806, 504, 528, 97, 796, 677, 673, 239]));
