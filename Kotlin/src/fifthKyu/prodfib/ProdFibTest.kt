package fifthKyu.prodfib

import org.junit.Assert.*
import org.junit.Test

class ProdFibTest {
    @Test
    fun test1() {
        val r = longArrayOf(55, 89, 1)
        assertArrayEquals(r, productFib(4895))
    }
    @Test
    fun test2() {
        val r = longArrayOf(89, 144, 0)
        assertArrayEquals(r, productFib(5895))
    }

}