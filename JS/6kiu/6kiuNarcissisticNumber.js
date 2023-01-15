function narcissistic(value) {
  let arrValue = value.toString().split('').map(Number);
  return (value ===arrValue.reduce((tot, curr) => {return tot + Math.pow(curr, arrValue.length)}, 0));
}

narcissistic(7); //, true, '7 is narcissistic');
narcissistic(371); //, true, '371 is narcissistic');