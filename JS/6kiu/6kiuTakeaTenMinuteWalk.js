function isValidWalk(walk) {
  const arr = [0, 0];
  walk.map(curr => {
    switch (curr) {
      case 'n':
        arr[0] += 1;
        break;
      case 's':
        arr[0] -= 1;
        break;
      case 'e':
        arr[1] += 1;
        break;
      case 'w':
        arr[1] -= 1;
        break;
    }
  });

  return arr[0] === 0 && arr[1] === 0 && walk.length === 10;
}

//some test cases for you...

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); //,'should return true'

isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']); //,  'should return false'

isValidWalk(['w']); //, 'should return false')

isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); //,  'should return false';
