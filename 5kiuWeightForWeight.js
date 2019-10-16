function orderWeight(str) {
    let weights = str.split(' ').map(e => parseInt(e, 10))
    for (let i = 0; i < weights.length; i++) {
        
    }
}

console.log(orderWeight('99 100 150 200'))
// console.log(orderWeight("103 123 4444 99 2000"))//, "2000 103 123 4444 99")
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))//, "11 11 2000 10003 22 123 1234000 44444444 9999")
// console.log(orderWeight("31064 7920 67407 96488 34608557 71899703 1 2 200 4 4 6 6 7 7 27 18 72 81 9 91 425"))//1 2 200 4 4 6 6 7 7 27 18 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703