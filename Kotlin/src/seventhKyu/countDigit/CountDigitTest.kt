package seventhKyu.countDigit

import org.junit.Assert.*
import org.junit.Test

class CountDigitTest {
    private fun testing(actual:Int, expected:Int) {
        assertEquals(expected.toLong(), actual.toLong())
    }
    @Test
    fun test() {
        println("Fixed Tests nbDig")
        testing(countDigit(25, 1), 11)
        testing(countDigit(5750, 0), 4700)
        testing(countDigit(11011, 2), 9481)

    }
}