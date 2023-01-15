function longestPalindrome(string) {
    let PalinLength = 0
    let oddPalin = ''
    let evenPalin = ''

    if (string.length == '0') { return 0 }
    if (string.length == '1') { return 1 }

    function finder(left, right, string) {
        while (left >= 0 && string[right] == string[left]) {
            left -= 1
            right += 1
        }
        return (string.slice(left + 1, right))
    }

    for (let i = 0; i < string.length - 1; i++) {
        oddPalin = finder(i - 1, i + 1, string)
        evenPalin = finder(i, i + 1, string)
        if (oddPalin.length > PalinLength || evenPalin.length > PalinLength) {
            PalinLength = Math.max(oddPalin.length, evenPalin.length)
        }
    }
    return PalinLength
}

console.log(longestPalindrome("a"))
console.log(longestPalindrome("aa"))
console.log(longestPalindrome("baa"))
console.log(longestPalindrome("aab"))
console.log(longestPalindrome("zyabyz"))
console.log(longestPalindrome("baabcdh"))
console.log(longestPalindrome("racecars"))
console.log(longestPalindrome("baablkj1akjdhfliauyfkwjerhluvd12345654321d"))
