var spiralize = function (size) {
    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix[i] = []
        for (let j = 0; j < size; j++) {
            matrix[i][j] = 1
        }
    }
    let i = 1
    let j = 0
    while (true) {
        while (j + 2 < size) {
            if (j + 2 == 0) {
                break
            }
            matrix[i][j] = 0
            j++
        } //hd
        j--
        while (i < size - 2) {
            matrix[i + 1][j] = 0
            i++
        } //vd
        while (j > 0) {
            matrix[i][j] = 0
            j--
        } //he
        j++
        while (i - 2 != 0) {
            matrix[i][j] = 0
            i--
        } //vs
    }
    console.log(matrix)
    console.log('')
}
change1 1 0
change2 -1 0
change3 

spiralize(5)
// [[1, 1, 1, 1, 1],
// [0, 0, 0, 0, 1],
// [1, 1, 1, 0, 1],
// [1, 0, 0, 0, 1],
// [1, 1, 1, 1, 1]]
spiralize(8)
    // [[1, 1, 1, 1, 1, 1, 1, 1],
    // [0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 1, 1, 1, 1, 1, 0, 1],
    // [1, 0, 0, 0, 0, 1, 0, 1],
    // [1, 0, 1, 0, 0, 1, 0, 1],
    // [1, 0, 1, 1, 1, 1, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1]]