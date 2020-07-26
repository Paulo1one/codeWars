function calculate(string) {
  let newArr = string.split(' ');
  function operate(num1, operator, num2) {
    switch (operator) {
      case '*':
        return Number(num1) * Number(num2);
      case '/':
        return Number(num1) / Number(num2);
      case '+':
        return Number(num1) + Number(num2);
      case '-':
        return Number(num1) - Number(num2);
      default:
        return null;
    }
  }
  while (newArr.length > 1) {
    while (newArr.includes('*') || newArr.includes('/')) {
      if (newArr.includes('*') && newArr.includes('/')) {
        let index = Math.min(
          newArr.findIndex((e) => e === '*'),
          newArr.findIndex((e) => e === '/')
        );
        let newNum = operate(
          newArr[index - 1],
          newArr[index],
          newArr[index + 1]
        );
        newArr.splice(index - 1, 3, newNum);
      } else if (newArr.includes('*')) {
        let index = newArr.findIndex((e) => e === '*');
        let newNum = operate(
          newArr[index - 1],
          newArr[index],
          newArr[index + 1]
        );
        newArr.splice(index - 1, 3, newNum);
      } else if (newArr.includes('/')) {
        let index = newArr.findIndex((e) => e === '/');
        let newNum = operate(
          newArr[index - 1],
          newArr[index],
          newArr[index + 1]
        );
        newArr.splice(index - 1, 3, newNum);
      }
    }
    if (newArr.length > 1) {
      let newNum = operate(newArr[0], newArr[1], newArr[2]);
      newArr.splice(0, 3, newNum);
    }
  }
  return newArr[0];
}

// calculate.evaluate('127'); //, 127);
// calculate('2 + 3'); //, 5);
calculate('2 - 3 - 4'); // -5);
calculate('10 * 5 - 1 / 2'); //, 25);
