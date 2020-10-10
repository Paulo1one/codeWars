package sixthKyu.multiples3of5

fun solution(number: Int): Int {
    var sum = 0
    for (i in 3 until number) {
        if (i % 3 == 0 || i % 5 == 0) sum += i
    }
    return sum
}