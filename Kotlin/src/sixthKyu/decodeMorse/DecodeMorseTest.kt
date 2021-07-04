package sixthKyu.decodeMorse

import junit.framework.Assert.assertEquals
import org.junit.Test
import sixthKyu.decodeMorse.DecodeMorse.decodeMorse

class DecodeTheMorseTest {
    @Test
    fun exampleTestCases() {
        assertEquals("HEY JUDE", decodeMorse(".... . -.--   .--- ..- -.. ."))
        assertEquals("SOS", decodeMorse("... --- ..."))
//        assertEquals("SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", fourthKiu.decodeBitsMorse.decodeMorse(".... . -.--   .--- ..- -.. ."))
    }
}