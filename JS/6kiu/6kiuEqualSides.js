function findEvenIndex(arr) {
    let arrLeft = []
    let arrRight = []
    let sumLeft = 0
    let sumRight = 0
    if (arr.reduce((a, b) => a + b) == 0) {
        return 0
    }

    for (let i = 0; i < arr.length; i++) {
        arrLeft = arr.slice(0, i)
        arrRight = arr.slice(i + 1)
        i == 0 ? sumLeft = 0 : sumLeft = arrLeft.reduce((a, b) => a + b)
        i == arr.length - 1 ? sumRight = 0 : sumRight = arrRight.reduce((a, b) => a + b)
        if (sumLeft == sumRight) {
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) //,3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))//,1, "The array was: [1,100,50,-51,1,1] \n")
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]))//,3, "The array was: [20,10,30,10,10,15,35]
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]))//,-1, "The array was: [1,2,3,4,5,6] \n")
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]))
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]))
console.log(findEvenIndex([50, 50, -100]))