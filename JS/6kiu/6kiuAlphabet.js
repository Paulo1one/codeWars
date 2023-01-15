function findMissingLetter(array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let cont = 0
    if (array[0] != array[0].toLowerCase()) {
        array = array.join('').toLowerCase().split('')
        cont = 1
    }
    for (let i = 0; i < alphabet.length; i++) {
        if ((alphabet.search(array[i]) + 1) != alphabet.search(array[i + 1]) && i + 1 < array.length) {
            return(cont == 1 ? alphabet[alphabet.search(array[i])+1].toUpperCase() : alphabet[alphabet.search(array[i])+1])
        }
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))