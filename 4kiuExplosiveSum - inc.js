function sum(num) {
  let arr = [];
  let count = 0;
  for (let i = num; i > 0; i--) {
    arr = [];
    arr[0] = i;
    if (arr[0] < num) {
      for (let j = num - arr[0]; j > 0; j--) {
        arr.push(1);
      }
    }
    console.log(arr);
    arr.length >= 2 ? (count += values(arr)) : count++;
  }
  console.log(count);
}
function values(arrnum) {
  let count = 0
  return 0;
}

sum(1); // 1
sum(2); // 2
sum(3); // 3
sum(4); // 5
sum(5); // 7
sum(10); //42

//condições count
//arr maior ou igual a 2
//começar com primeiro dígito-1

//7
//6+1
//5+2
//5+1+1
//4+3
//4+2+1
//4+1+1+1
//3+3+1
//3+2+2
//3+2+1+1
//3+1+1+1+1
//2+2+2+1
//2+2+1+1+1
//2+1+1+1+1+1
//1+1+1+1+1+1+1

//8
//7+1
//6+2
//6+1+1
//5+3
//5+2+1
//5+1+1
//4+4
//4+3+1
//4+2+2
//4+1+1+1+1
//3+5
//3+3+2
//3+3+1+1
//3+2+2+1
//3+2+1+1+1
//3+1+1+1+1+1
//2+2+2+2
//2+2+2+1+1
//2+2+1+1+1+1
//2+1+1+1+1+1+1
//1+1+1+1+1+1+1+1
