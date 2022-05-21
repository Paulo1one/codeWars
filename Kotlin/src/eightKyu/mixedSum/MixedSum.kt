package eightKyu.mixedSum
class MixedSum {
    fun sum(list: List<Any>): Int {
        var sum = 0
        list.map { num ->
            if (num is String) {
                sum += num.toInt()
            } else if (num is Int) {
                sum += num
            }
        }
        return sum
    }
}