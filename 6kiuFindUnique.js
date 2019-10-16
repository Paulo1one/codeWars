function findUniq(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

console.log(findUniq([1, 0, 0]))
console.log(findUniq([2, 2, 2, 1, 2, 2, 2]))
console.log(findUniq([3, 10, 3, 3, 3]))
console.log(findUniq([3, 3, 3, 3, 10]))