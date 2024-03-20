const { sort } = require("../sorting/quick_sort_arr")
const binarySearch = (arr, x) => {
    let l = 0, r = arr.length - 1

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)

        if (arr[mid] === x) {
            return mid
        }
        if (arr[mid] > x) {
            r = mid - 1
        }
        if (arr[mid] < x) {
            l = mid + 1
        }
    }
    return -1
}


const testCases = [
    [[5, 2, 9, 1, 7], 3],
    [[3, 8, 1, 6, 4], 1],
    [[10, 5, 3, 9, 2], 10],
    [[1, 2, 3, 4, 5], 4],
    [[5, 4, 3, 2, 1], 4],
    [[], 1],
]

console.log("----Search-----")
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`)
    console.log("Array:", sort(testCase[0]), "Find: ", testCase[1])
    const output = binarySearch(sort(testCase[0]), testCase[1])
    console.log(`Index of ${testCase[1]} :`, output)
    console.log("------------------------")
})
