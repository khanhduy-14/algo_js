const linearSearch = (arr, n, x) => {
    if (arr.length <= 0) return -1
    for (let i = 0; i < n; i++) {
        if (arr[i] == x) return i
    }
    return -1
}




const testCases = [
    [[5, 2, 9, 1, 7], 5, 3],
    [[3, 8, 1, 6, 4], 5, 1],
    [[10, 5, 3, 9, 2], 5, 10],
    [[1, 2, 3, 4, 5], 3, 4],
    [[5, 4, 3, 2, 1], 3, 4],
    [[], 2, 1],
]


testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`)
    console.log("Array:", testCase[0], "Length: ", testCase[1], "Find:", testCase[2])
    const output = linearSearch(testCase[0], testCase[1], testCase[2])
    console.log(`Index of ${testCase[2]} :`, output)
    console.log("------------------------")
})


