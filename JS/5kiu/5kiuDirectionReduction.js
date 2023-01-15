function dirReduc(arr) {
  let i = 0;
  while (i < arr.length - 1) {
    if (
      (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
      (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH')
    ) {
      arr.splice(i, 2);
      i = -1;
    }
    if (
      (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
      (arr[i] === 'WEST' && arr[i + 1] === 'EAST')
    ) {
      arr.splice(i, 2);
      i = -1;
    }
    i++;
  }
  console.log(arr);
  return arr;
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); //, ["WEST"])
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST', 'EAST', 'EAST', 'WEST', 'EAST']); //, ["NORTH", "WEST", "SOUTH", "EAST"])
dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']); //, [])
