package seventhKyu.middleString

object Middle {
    fun getMiddle(word: String): String {
        return when (true) {
            word.length < 3 -> word
            word.length % 2 == 0 -> "${word[(word.length / 2) - 1]}${word[(word.length / 2)]}"
            word.length % 2 == 1 -> "${word[(word.length / 2)]}"
            else -> word
        }
    }
}