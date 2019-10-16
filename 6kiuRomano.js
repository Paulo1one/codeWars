function solution(roman) {
    let nums = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let value = 0
    for (let i = 0; i < roman.length; i++) {
        if (nums[roman[i]] < nums[roman[i + 1]]) {
            value = value - nums[roman[i]]
        } else {
            value = value + nums[roman[i]]
        }
    }
    // complete the solution by transforming the
    // string roman numeral into an integer
    return value
}
// function solution(roman) {
//     var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

//     return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
// }
console.log(solution('XXI'))
console.log(solution('I'))
console.log(solution('IV'))
console.log(solution('MMVIII'))
console.log(solution('MDCLXVI'))