//well.. it works..
function spiralize(size) {
  let top = 2;
  let left = 0;
  let bottom = size - 1;
  let right = size - 1;
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 1;
    }
  }
  let i = 1;
  let j = 0;
  while (true) {
    if (right - j > 1) {
      while (j < right) {
        matrix[i][j] = 0;
        j++;
      }
      j--;
      right -= 2;
    }
    if (bottom - i > 1) {
        while (i < bottom) {
            matrix[i][j] = 0;
            i++;
        }
        i--;
        bottom -= 2;
    }
    if (j - left > 1) {
        while (j > left) {
            matrix[i][j] = 0;
            j--;
        }
        j++;
        left += 2;
    }
    if (i - top > 1) {
        while (i > top + 1) {
            matrix[i][j] = 0;
            i--;
        }
        top += 2;
    }
    if (right - j <= 1 && i - top <= 1 && j - left <= 1 && bottom - i <= 1) {
        return matrix;
    }
  }
};

console.log(spiralize(5));
// spiralize(5);
// [[1, 1, 1, 1, 1],
// [0, 0, 0, 0, 1],
// [1, 1, 1, 0, 1],
// [1, 0, 0, 0, 1],
// [1, 1, 1, 1, 1]]

console.log(spiralize(8));
// [[1, 1, 1, 1, 1, 1, 1, 1],
// [0, 0, 0, 0, 0, 0, 0, 1],
// [1, 1, 1, 1, 1, 1, 0, 1],
// [1, 0, 0, 0, 0, 1, 0, 1],
// [1, 0, 1, 0, 0, 1, 0, 1],
// [1, 0, 1, 1, 1, 1, 0, 1],
// [1, 0, 0, 0, 0, 0, 0, 1],
// [1, 1, 1, 1, 1, 1, 1, 1]]