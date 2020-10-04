package SixthKyu.BouncingBalls

fun bouncingBall(h: Double, bounce: Double, window: Double): Int {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1
    var newH = h
    var bounceCount = 1
    while (newH > window) {
        newH *= bounce
        if (newH > window) bounceCount += 2
    }
    return bounceCount
}