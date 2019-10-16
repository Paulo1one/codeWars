function sumDigPow(a, b) {
    let sum = 0
    let arr = []
    for (let i = a; i <= b; i++) {
        let dig = i.toString()
        let len = dig.length
        sum = 0
        for (let e = 0; e < len; e++) {
            sum = sum + Number(dig[e]) ** (e + 1)
            if (sum == Number(dig)) {
                arr.push(Number(dig))
            }
        }
    }
    return (arr)
}
// function sumDigPow(a, b) {
//     var ans = [];
//     while (a <= b) {
//         if (a.toString().split('').reduce((x, y, i) => x + (+y) ** (i + 1), 0) == a)
//             ans.push(a);
//         a++;
//     }
//     return ans;
// }


console.log(sumDigPow(1, 100))