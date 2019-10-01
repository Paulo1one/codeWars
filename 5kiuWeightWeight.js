function orderWeight(str) {
    let arr = str.split(' ')
    let arr2 = []
    for (let i of arr) {
        let sum = 0
        for (let a = 0; a < i.length; a++) {
            sum += Number(i[a])
        }
        arr2.push([sum, i])
    }
    arr2.sort((a, b) => (a[0] - b[0]))
    console.log(arr2)
    let arr3 = []
    for (i = 1; i < arr2.length; i++) {
        if (arr2[i][0] == arr2[i - 1][0]) {
            arr3.push(arr2[i])
            arr3.push(arr2[i - 1])
            console.log(arr3)
            //console.log(arr3,arr2[i][0],arr2[i+1][0])
            arr3.sort((a, b) => (a[1].localeCompare(b[1])))
            console.log(arr3)
            arr2[i-1] = arr3[0]
            arr2[i] = arr3[1]
        }
        arr3 = []
    }
    //console.log(arr2)
    for (let c = 0; c < arr2.length; c++) {
        arr3.push(arr2[c][1])
    }
    return arr3.join(' ')
}

console.log(orderWeight('99 100 150 200'))
console.log(orderWeight("103 123 4444 99 2000"))//, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))//, "11 11 2000 10003 22 123 1234000 44444444 9999")
console.log(orderWeight("31064 7920 67407 96488 34608557 71899703 1 2 200 4 4 6 6 7 7 27 18 72 81 9 91 425"))//1 2 200 4 4 6 6 7 7 27 18 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703