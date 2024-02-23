
const quickSort = (arr, start, end) => {
    if (end <= start) return

    const pivot = partition(arr, start, end)

    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
}

const partition = (arr, start, end) => {

    const pivot = arr[end]
    let i = start - 1

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            // swapElements(arr, arr[i], arr[j])
        }
    }
    i++
    const temp = arr[i]
    arr[i] = arr[end]
    arr[end] = temp
    return i
}

const sort = (arr) => {
    quickSort(arr, 0, arr.length - 1)
    return arr
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
    const sortedOutput = sort(testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})