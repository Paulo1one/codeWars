package sixthKyu.HelpTheBookseller

object StockList {
    fun stockSummary(lstOfArt: Array<String>, lstOfCat: Array<String>): String {
        val elements = mutableMapOf<String, Int>()
        if (lstOfArt.isEmpty() || lstOfCat.isEmpty()) return ""
        lstOfCat.forEach { elements[it] = 0 }
        lstOfArt.forEach {
            if (elements.containsKey(it[0].toString())) {
                val num = it.split(" ")[1].toInt()
                elements[it[0].toString()] = elements[it[0].toString()]!!.plus(num)
            }
        }
        var rstString = ""
        elements.forEach { (it, value) ->
            rstString = if (rstString.isEmpty()) "(${it} : ${value})" else "$rstString - ($it : $value)"
        }
        return rstString
    }
}