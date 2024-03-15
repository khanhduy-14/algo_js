
const getMax = (arr) => {
    let max = arr[0]
    for (const item in arr) {
        if (item > max) max = item
    }
    return max
}

const countSort = (arr, exp) => {
    const count = new Array(10)
    const output = new Array(arr.length)
    for (let i = 0; i < 10; i++) {
        count[i] = 0
    }

    for (let i = 0; i < arr.length; i++) {
        const x = Math.floor(arr[i] / exp) % 10
        count[x]++
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        const x = Math.floor(arr[i] / exp) % 10
        output[count[x] - 1] = arr[i]
        count[x]--
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i]
    }

}

const radixSort = (arr) => {
    const max = getMax(arr)
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp)
    }
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
    const sortedOutput = radixSort(testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})