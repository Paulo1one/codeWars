package sixthKyu.PlayingWithDigits

import kotlin.math.pow

fun digPow(n: Int, p: Int): Int {
    var digits = n.toString()
    var sum = 0.00
    var power = p
    digits.map {
        sum += it.toString().toDouble().pow(power.toDouble())
        power++
    }
    return if ((sum % n.toDouble()) == 0.00) sum.toInt() / n else -1
}