package fifthKyu.prodfib

fun productFib(prod: Long): LongArray {
    var (prev, post) = longArrayOf(0, 1)
    while (prev * post < prod) {
        val curr = prev + post
        prev = post
        post = curr
    }
    return longArrayOf(prev, post, if (prev * post == prod) 1L else 0L)
}