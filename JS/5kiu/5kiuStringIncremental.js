function incrementString(strng) {
    let arr = strng.split('')
    let numMatch = strng.match(/\d+$/)
    if (numMatch === null) {
        strng += '1'
        return strng
    }
    let newNumber = parseInt(numMatch[0]) + 1
    if (numMatch[0].length >= newNumber.toString().length) {
        arr.splice(-newNumber.toString().length, newNumber.toString().length, newNumber)
    } else {
        arr.splice(-numMatch[0].length, numMatch[0].length, newNumber)
    }
    return arr.join('')
}


console.log(incrementString("foobar000000"))// "foobar001"))
console.log(incrementString("foo"))// "foo1"))
console.log(incrementString("foobar001"))// "foobar002"))
console.log(incrementString("foobar99"))// "foobar100"))
console.log(incrementString("foobar999"))// "foobar100"))
console.log(incrementString(""))// "1")