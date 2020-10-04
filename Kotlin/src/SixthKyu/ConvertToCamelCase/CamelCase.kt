package SixthKyu.ConvertToCamelCase

fun toCamelCase(str: String): String {
    var arr = (if (str.contains("-")) str.split("-").toMutableList() else str.split("_")).toMutableList()
    var newStr = ""
    for(i in 0 until arr.size){
        if(i>0){
            arr[i]=arr[i].capitalize()
        }
        newStr+=arr[i]
    }
    return newStr
}

//fun toCamelCase(str: String) =
//    str.split('-', '_').mapIndexed { i, it -> if (i != 0) it.capitalize() else it }.joinToString("")