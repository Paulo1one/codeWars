package sixthKyu.Tribonacci

fun tribonacci(signature: DoubleArray, n: Int): DoubleArray {
    val a = DoubleArray(n)
    for (i in 0 until n) {
        if (i < 3) a[i] = signature[i] else a[i] = a[i - 3] + a[i - 2] + a[i - 1]
    }
    return a
}