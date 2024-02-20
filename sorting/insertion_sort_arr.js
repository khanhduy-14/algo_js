function swapElements(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}


function insertionSort(arr) {
    if (arr.length < 2) return arr
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
            swapElements(arr, j - 1, j)
            j--
        }
    }
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
    const sortedOutput = insertionSort(testCase)
    console.log(`Test Case ${index + 1}:`)
    console.log("Input:", testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})