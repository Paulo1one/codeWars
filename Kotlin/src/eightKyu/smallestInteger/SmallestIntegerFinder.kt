package eightKyu.smallestInteger

class SmallestIntegerFinder {

    fun findSmallestInt(nums: List<Int>): Int {
        return nums.minOf { num -> num }
    }
}