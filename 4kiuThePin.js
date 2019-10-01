function getPINs(observed) {
    // TODO: This is your job, detective!
    let digits = {
        1: ['1', '2', '4'],
        2: ['1', '2', '3', '5'],
        3: ['2', '3', '6'],
        4: ['1', '4', '5', '7'],
        5: ['2', '4', '5', '6', '8'],
        6: ['3', '5', '6', '9'],
        7: ['4', '7', '8'],
        8: ['5', '7', '8', '9', '0'],
        9: ['6', '8', '9'],
        0: ['8', '0']
    }
    let arr = observed.split('').map(a => digits[a])
    function combinations(arr) {
        if (arr.length == 1) {
            return arr[0]
        } else {
            let combinators = []
            let combinatorsPartial = combinations(arr.slice(1))
            for (let i = 0; i < combinatorsPartial.length; i++) {
                for (let j = 0; j < arr[0].length; j++) {
                    combinators.push(arr[0][j] + combinatorsPartial[i])
                }
            }
            return combinators
        }
    }
    return combinations(arr)
}

console.log(getPINs('8'))
console.log(getPINs('11'))
console.log(getPINs('369'))