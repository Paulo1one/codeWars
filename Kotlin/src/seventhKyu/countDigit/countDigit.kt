package seventhKyu.countDigit

fun countDigit(n: Int, v: Int): Int {
    var counter = 0
    for (i in 0..n) {
        (i * i).toString().forEach { str ->
            if ((str).toString() == v.toString()) {
                counter++
            }
        }
    }
    return counter
}