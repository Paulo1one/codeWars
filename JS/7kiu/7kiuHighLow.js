function highAndLow(numbers) {
    let nums = numbers.split(' ')
    nums = nums.map(Number)
    console.log(nums)
    return (`${Math.max(...nums)} ${Math.min(...nums)}`)
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")