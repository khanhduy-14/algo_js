const bucketSort = (arr) => {
    if (arr.length < 2) return arr
    const bucketSize = 5
    let minValue = arr[0]
    let maxValue = arr[0]
    const resultArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    const bucketsLength = Math.floor((maxValue - minValue) / bucketSize) + 1
    const buckets = new Array(bucketsLength)
    for (let i = 0; i < bucketsLength; i++) {
        buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
    }

    for (const bucket of buckets) {
        insertionSort(bucket)
        for (const el of bucket) {
            resultArr.push(el)
        }

    }
    return resultArr
}

const insertionSort = (arr) => {
    if (arr.length < 2) return arr

    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
            const temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
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
    console.log(`Test Case ${index + 1}:`)
    console.log("Input:", testCase)
    const sortedOutput = bucketSort(testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})
