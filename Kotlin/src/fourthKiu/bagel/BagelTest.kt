import fourthKiu.bagel.Bagel
import fourthKiu.bagel.bagel
import org.junit.Test

class BagelTest {
    @Test
    fun testBagel() {
        org.junit.Assert.assertEquals((bagel as Bagel).value == 4, java.lang.Boolean.TRUE)
    }
}