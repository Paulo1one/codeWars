function longestSlideDown(pyramid) {
    let a = pyramid.length
    let arr = []
    let arrIndex = []
    for (let i = 0; i < a; i++) {
        if (i == 0) {
            arr.push(pyramid[0][0])
            arrIndex[0] = 0
        } else if (arr.length == 1) {
            arr.push(Math.max(pyramid[i][arr.indexOf(arr[0])], pyramid[i][arr.indexOf(arr[0]) + 1]))
            arrIndex.push(pyramid[i].indexOf(arr[i]))
        } else {
            if(pyramid[i][arrIndex[i - 1]]>=pyramid[i][arrIndex[i - 1] + 1]){
                arr.push(pyramid[i][arrIndex[i - 1]])
                arrIndex.push(arrIndex[i-1])
            }else{
                arr.push(pyramid[i][arrIndex[i - 1]+1])
                arrIndex.push(arrIndex[i-1]+1)
            }
        }
    }
    console.log(arrIndex)
    console.log(arr)
    console.log(arr.reduce((a, b) => (a + b)))
}

longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])
longestSlideDown(
    [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]])