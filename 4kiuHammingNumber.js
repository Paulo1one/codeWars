function hamming(n) {
    if (n == 1) {
        return "\"hamming(1) should be 1\""
    }
    let inicial = n
    while (true) {
        if (test(n) != test(inicial-1) & Number.isInteger(test(n))) {
            return `"hamming(${inicial}) should be ${test(n)}"`
        }
        n+=1
    }
}

function test(number) {
    let numberControl = number
    while (number % 2 == 0 || number % 3 == 0 || number % 5 == 0) {
        if (number % 2 == 0) {
            number /= 2
        } if (number % 3 == 0) {
            number /= 3
        } if (number % 5 == 0) {
            number /= 5
        } if (number == 1) {
            return numberControl
        }
    }
    return 0
}

console.log(hamming(1))// == 1 "console.log(hamming(1)) should be 1");
console.log(hamming(2))// == 2 "console.log(hamming(2)) should be 2");
console.log(hamming(3))// == 3 "console.log(hamming(3)) should be 3");
console.log(hamming(4))// == 4 "console.log(hamming(4)) should be 4");
console.log(hamming(5))// == 5 "console.log(hamming(5)) should be 5");
console.log(hamming(6))// == 6 "console.log(hamming(6)) should be 6");
console.log(hamming(7))// == 8 "console.log(hamming(7)) should be 8");
console.log(hamming(8))// == 9 "console.log(hamming(8)) should be 9");
console.log(hamming(9)) //== 10 "console.log(hamming(9)) should be 10");
console.log(hamming(10)) //== 12 "console.log(hamming(10)) should be 12");
console.log(hamming(11)) //== 15 "console.log(hamming(11)) should be 15");
console.log(hamming(12)) //== 16 "console.log(hamming(12)) should be 16");
console.log(hamming(13)) //== 18 "console.log(hamming(13)) should be 18");
console.log(hamming(14)) //== 20 "console.log(hamming(14)) should be 20");
console.log(hamming(15)) //== 24 "console.log(hamming(15)) should be 24");
console.log(hamming(16)) //== 25 "console.log(hamming(16)) should be 25");
console.log(hamming(17)) //== 27 "console.log(hamming(17)) should be 27");
console.log(hamming(18)) //== 30 "console.log(hamming(18)) should be 30");
console.log(hamming(19)) //== 32 "console.log(hamming(19)) should be 32");