package sixthKyu.mutualRecursion

object MutualRecursion {
    fun f(n: Int): Int = if (n > 0) (n - m(f(n - 1))) else 1
    fun m(n: Int): Int = if (n > 0) (n - f(m(n - 1))) else 0
}