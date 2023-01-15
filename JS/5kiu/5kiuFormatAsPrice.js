var numberToPrice = function (number) {
    if (isNaN(number) || number == "") {
        return ('NaN')
    }
    console.log(number)
    let str = number.toString()
    let position = str.indexOf(".")
    if (position == -1) {
        str = str + ".00"
        position = str.indexOf(".")
    } else if (str.length > position + 2) {
        str = str.slice(0, position + 3)
    } else if (str.length > position + 1) {
        str = str + "0"
    }
    let count = 0
    for (let i = position; i > 0; i--) {
        if (count == 3 & i > 0 & str[i - 1] != "-") {
            str = str.slice(0, i) + "," + str.slice(i)
            count = 0
        }
        count += 1
    }
    return (str)
}

console.log(numberToPrice(1500.129))   //'1,500.12');
console.log(numberToPrice(-5))      //'-5.00');
console.log(numberToPrice(1234567.890))//'1,000,000.50');
console.log(numberToPrice(-200000.1))//'1,000,000.50');
console.log(numberToPrice(1.00))//'1,000,0005/0');
console.log(numberToPrice(100.5))//'1,000,0/0.50');
console.log(numberToPrice(232453245135.))//'1,000,000.50');
console.log(numberToPrice(12345678.00))//'1,000,000.50');
console.log(numberToPrice('@'))//'1,000,000.50');