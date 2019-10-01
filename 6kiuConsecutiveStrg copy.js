function longestConsec(strarr, k) {
    let lth = 0
    let longer = []
    strarr.map((a) => {
        if (a.length > lth) {
            lth = a.length
            longer = a
        }
    })
    let pos = strarr.indexOf(longer)
    let str = []
    if (k <= 0 || k > strarr.length) {
        return ''
    }
    if (pos + 1 == strarr.length && pos - k + 1 >= 0) {
        str = strarr.splice(pos - k + 1, k)
    } else if (pos > 0 || pos + 1 < strarr.length) {
        strarr[pos + 1].length < strarr[pos - 1].length ? str = strarr.splice(pos - k + 1, k) : str = strarr.splice(pos, k)
    }
    return `${str.join('')}`
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) //abigailtheta
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
//oocccffuucccjjjkkkjyyyeehh
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
//wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2))
//wlwsasphmxxwiaxujylentrklctozmymu
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) //
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)) //ixoyx3452zzzzzzzzzzzz
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15))//
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))//