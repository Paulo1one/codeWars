package fourthKiu.decompose

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class DecompTest {
    @Test
    fun basicTests() {
        assertEquals("null", Decompose.decompose(2))
        assertEquals("null", Decompose.decompose(4))
        assertEquals("1 2 3 7 9", Decompose.decompose(12))
        assertEquals("1 2 4 10", Decompose.decompose(11))

    }
}