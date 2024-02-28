// time complexity: worst case, average case, best case: O(N+M), n: size arr, m: size: count array
// auxiliary complexity: O(N+M), n: size output arr, m: size count arr;
const countingSort = (arr) => {
    let max = arr[0]

    if (arr.length < 2) return arr

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    const countArr = new Array(max + 1)
    const outputArr = new Array(arr.length)

    for (let i = 0; i < countArr.length; i++) {
        countArr[i] = 0
    }

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]]++
    }

    let cumulativeSum = 0
    for (let i = 0; i < countArr.length; i++) {
        countArr[i] += cumulativeSum
        cumulativeSum = countArr[i]
    }


    for (let i = arr.length - 1; i >= 0; i--) {
        outputArr[countArr[arr[i]] - 1] = arr[i]
        countArr[arr[i]] = countArr[arr[i]] - 1
    }
    return outputArr
}


const testCases = [
    [5, 2, 9, 1, 7],
    [3, 8, 1, 6, 4],
    [10, 5, 3, 9, 2],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [],
]


testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`)
    console.log("Input:", testCase)
    const sortedOutput = countingSort(testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})

