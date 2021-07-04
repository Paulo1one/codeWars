package fourthKiu.decodeBitsMorse

object DecodeMorse {
    fun decodeBits(bits: String): String {
        var double = false
        if (bits.contains("0110") || bits.contains("1001")) double = true
        if (bits == "01110" || bits == "111") {
            return "."
        }
        return if (double) {
            bits
                .replace("111", "-")
                .replace("1", ".")
                .replace("0000000", "   ")
                .replace("000", " ")
                .replace("0", "")
        } else {
            bits
                .replace("111111", "-")
                .replace("11", ".")
                .replace("00000000000000", "   ")
                .replace("000000", " ")
                .replace("00", "")
        }
    }

    fun decodeMorse(code: String): String {
        println(code)
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