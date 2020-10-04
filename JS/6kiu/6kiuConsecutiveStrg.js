function longestConsec(strarr, k) {
    if (k == 0 || k < 0 || k > strarr.length) {
        return ''
    }
    let length = 0
    let string = ''
    for (let i = 0; i <= strarr.length - k; i++) {
        if (length < strarr.slice(i, k+i).join('').length) {
            length = strarr.slice(i, k+i).join('').length
            string = strarr.slice(i, k+i).join('')
        }
    }
    return string
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))//6
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))