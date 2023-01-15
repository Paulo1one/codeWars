function listSquared(m, n) {
    arr = []
    for (let a = m; a <= n; a++) {
        let temp = 0
        for (let i = 1; i <= a; i++) {
            a % i == 0 ? temp += (i * i) : ''
        }
        if (Math.sqrt(temp) % 1 == 0) {
            arr.push([a, temp])
        }
    }
    return arr
}

console.log(listSquared(1, 250))
console.log(listSquared(42, 250))
console.log(listSquared(250, 500))
