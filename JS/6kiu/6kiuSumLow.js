function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    console.log(numbers[0] + numbers[1])
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
sumTwoSmallestNumbers([15, 28, 4, 2, 43])