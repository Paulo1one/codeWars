package SeventhKyu.MaxRot

fun maxRot(n: Long): Long {
    var num = n.toString()
    var maxNum: Long = n
    for (i in 0 until num.length - 1) {
        val digit = num[i]
        num = num.removeRange(i, i + 1) + digit
        maxNum = Math.max(maxNum, num.toLong())
    }
    return maxNum
}