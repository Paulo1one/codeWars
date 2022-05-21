package seventhKyu.MaxRot

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test


class MaxRotateTest {
    private fun testing(actual:Long, expected:Long) {
        assertEquals(expected, actual)
    }
    @Test
    fun test() {
        println("Fixed Tests maxRot")
        testing(maxRot(38458215), 85821534)
        testing(maxRot(195881031), 988103115)
        testing(maxRot(896219342), 962193428)

    }
}