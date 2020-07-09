const distributeEvenly = (array) => {
  let newArr = [];
  let max = 0;
  array.forEach((element) => {
    if (!newArr.flat().includes(element)) {
      newArr.push(array.filter((element1) => element1 === element));
    }
  });

  newArr.forEach((element) => {
    if (element.length > max) {
      max = element.length;
    }
  });
  let organizedArr = [];
  for (let i = 0; i < max; i++) {
    newArr.forEach((element) => {
      if (element[i]) {
        organizedArr.push(element[i]);
      }
    });
  }
  console.log(organizedArr);
  return organizedArr;
};

distributeEvenly([
  'one',
  'one',
  'two',
  'two',
  'three',
  'three',
  'four',
  'one',
  'one',
]);
distributeEvenly([
  'a',
  'j',
  'f',
  'e',
  'j',
  'i',
  'g',
  'e',
  'f',
  'c',
  'd',
  'f',
  'i',
  'e',
  'a',
  'k',
  'i',
  'b',
  'b',
  'd',
  'i',
  'b',
  'c',
  'h',
  'i',
  'i',
  'c',
  'd',
  'b',
  'a',
]);
