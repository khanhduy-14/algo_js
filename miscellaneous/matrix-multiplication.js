const mulMatrix = (a, b) => {
    try {
        const numRowA = a.length
        const numColA = a[0].length
        const numRowB = b.length
        const numColB = b[0].length
        if (numColA !== numRowB) {
            throw new Error('These matrices cannot be multiplied')
        }
        const resultMatrix = Array.from({ length: numRowA }, (_, __) => Array.from({ length: numColB }, () => 0))
        for (let i = 0; i < resultMatrix.length; i++) {
            for (let j = 0; j < resultMatrix[i].length; j++) {
                let resultCell = 0
                for (let k = 0; k < numColA; k++) {
                    resultCell += a[i][k] * b[k][j]
                }
                resultMatrix[i][j] = resultCell
            }

        }
        return resultMatrix
    } catch (error) {
        console.log(error)
    }
}
const mat1 = [[1, 8, 3], [9, 4, 5], [6, 2, 7]]
const mat2 = [[6, 7, 4], [1, 3, 2], [5, 9, 8]]
console.log(mulMatrix(mat1, mat2))