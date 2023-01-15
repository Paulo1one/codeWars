package sixthKyu.decodeMorse

object DecodeMorse {

    fun decodeMorse(code: String): String {
        val morseLetters = mapOf<String, String>(
            ".-" to "A",
            "-..." to "B",
            "-.-." to "C",
            "-.." to "D",
            "." to "E",
            "..-." to "F",
            "--." to "G",
            "...." to "H",
            ".." to "I",
            ".---" to "J",
            "-.-" to "K",
            ".-.." to "L",
            "--" to "M",
            "-." to "N",
            "---" to "O",
            ".--." to "P",
            "--.-" to "Q",
            ".-." to "R",
            "..." to "S",
            "-" to "T",
            "..-" to "U",
            "...-" to "V",
            ".--" to "W",
            "-..-" to "X",
            "-.--" to "Y",
            "--.." to "Z",
            ".-.-.-" to ".",
            "--..--" to ",",
            "..--.." to "?",
            "-.-.--" to "!",
            "...---..." to "SOS"
        )
        var decoded = ""
        code.trim().split("   ").forEach { word ->
            if (decoded.isNotEmpty()) decoded += " "
            word.split(' ').forEach { letter ->
                decoded += morseLetters[letter]
            }
        }
        return decoded
    }
}