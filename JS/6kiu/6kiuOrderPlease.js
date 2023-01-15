/*function order(words) {
    let words1 = words.split(' ')
    let words2 = []
    for (let a = 0; a < words1.length; a++) {
        for (let i = 0; i < words1.length; i++) {
            if (words1[a].match((i + 1).toString())) {
                words2[i] = words1[a]
            }
        }
    }
    console.log(words2.join(' '))
}*/
function order(words) {
    return words.split(' ').sort((a, b)=> a.match(/\d/) - b.match(/\d/)).join(' ');
}

console.log(order("Thi1s is2 T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))