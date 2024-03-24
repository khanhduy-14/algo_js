const maximumSubArray = (arr) => {
    let maxSum = Number.MIN_SAFE_INTEGER
    let cumulativeSum = 0
    let start = 0
    let end = 0
    let supportStart = 0
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i]
        if (cumulativeSum > maxSum) {
            maxSum = cumulativeSum
            start = supportStart
            end = i
        }
        if (cumulativeSum < 0) {
            cumulativeSum = 0
            supportStart = i + 1
        }
    }
    const resultArr = []
    for (let i = start; i <= end; i++) {
        resultArr.push(arr[i])
    }
    console.log('Maximum sub array:', resultArr)
    console.log('Total', maxSum)
}

maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])