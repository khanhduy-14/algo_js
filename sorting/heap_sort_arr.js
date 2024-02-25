// left children node: 2n+1
// right children node: 2n+2
// parent node: Math.floor((n-1)/2)

// last parent node: Math.floor(size/2 -1 )

// time complexity: O(nlogn)

const heapSort = (arr) => {
    const n = arr.length
    const lastParentNode = Math.floor((n - 1) / 2)
    // create initial max-heap
    for (i = lastParentNode; i >= 0; i--) {
        heapify(arr, n, i)
    }

    for (i = n - 1; i > 0; i--) {
        const temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0)
    }
    return arr
}

const heapify = (arr, n, i) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let largest = i

    if (left < n && arr[left] > arr[largest]) { largest = left }
    if (right < n && arr[right] > arr[largest]) { largest = right }

    if (largest !== i) {
        const temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        heapify(arr, n, largest)
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
    const sortedOutput = heapSort(testCase)
    console.log("Sorted Output:", sortedOutput)
    console.log("------------------------")
})