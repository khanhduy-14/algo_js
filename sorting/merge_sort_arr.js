const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const middleIndex = Math.ceil(arr.length / 2)
    let array1 = arr.slice(0, middleIndex)
    let array2 = arr.slice(middleIndex)

    array1 = mergeSort(array1)
    array2 = mergeSort(array2)


    return merge(array1, array2)
}

const merge = (arr1, arr2) => {
    const arr = []
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] > arr2[0]) {
            arr.push(arr2[0])
            arr2.shift()
        }
        else {
            arr.push(arr1[0])
            arr1.shift()
        }
    }
    while (arr1.length > 0) {
        arr.push(arr1[0])
        arr1.shift()
    }
    while (arr2.length > 0) {
        arr.push(arr2[0])
        arr2.shift()
    }
    return arr
}

const testCases = [
    [5, 2, 9, 1, 7],
    [3, 8, 1, 6, 4],
    [10, 5, 3, 9, 2],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1, 4],
    [],
]

testCases.forEach((testCase, index) => {
    const sortedOutput = mergeSort(testCase)
    console.log(`Test Case ${index + 1}:`)
    console.log("Input:", testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})