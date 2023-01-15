package fourthKiu.decompose

object Decompose {
    fun decompose(n: Long): String {
        var doublePower = n * n
        var countUp = 1L
        var countDown: Long = n - 1
        val counter = mutableListOf<Long>()
        if (n < 5L) {
            return "null"
        }

        if (doublePower % 2 != 0L) {
            doublePower -= countUp
            counter.add(countUp)
            ++countUp
        }

        while (countUp != countDown) {
            val countDownPower = countDown * countDown
            val countUpPower = countUp * countUp
            if (doublePower > countDownPower) {
                counter.add(countDown)
                doublePower -= countDownPower
            }
            if (doublePower > countUpPower) {
                counter.add(countUp)
                doublePower -= countUpPower
            }
            --countDown
            ++countUp
        }
        counter.sort()
        return if (counter.isNotEmpty()) counter.joinToString(" ") else "null"
    }
}