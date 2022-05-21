package seventhKyu.middleString

import kotlin.test.assertEquals
import org.junit.Test
import seventhKyu.middleString.Middle.getMiddle
import java.util.Random

class MiddleTest {
    @Test
    fun basicTest() {
        assertEquals("es", getMiddle("test"));
        assertEquals("dd", getMiddle("middle"));
        assertEquals("t", getMiddle("testing"));
        assertEquals("A", getMiddle("A"));
    }


}// Testclass