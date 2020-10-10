package seventhKyu.PeopleInTheBus

fun people(busStops: Array<Pair<Int, Int>>): Int {
    var total = 0
    busStops.forEach { total += it.first - it.second }
    return total
}
//fun people(busStops: Array<Pair<Int, Int>>) = busStops.sumBy { it.first - it.second }