function iqTest(numbers) {
    const nums = numbers.split(' ').map(Number)
    let countEven = 0
    let countOdd = 0
    for (i in nums) {
        if (nums[i] % 2 == 0) {
            countEven += 1
        } else {
            countOdd += 1
        }
    }
    if (countOdd === 1) {
        let oddNumber = 0
        nums.forEach(function (element) {
            if (element % 2 != 0) {
                oddNumber = nums.indexOf(element)
            }

        })
        return oddNumber + 1
    }
    if (countEven === 1) {
        let evenNumber = 0
        nums.forEach(function (element) {
            if (element % 2 == 0) {
                evenNumber = nums.indexOf(element)
            }

        })
        return evenNumber + 1
    }
}

console.log(iqTest("2 4 7 8 10"))
console.log(iqTest("1 2 2"))