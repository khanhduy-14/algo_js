const pascalTriangle = (n) => {
    for (let line = 0; line < n; line++) {
        let lineStr = ''
        for (let i = 0; i <= line; i++) {
            lineStr += `${binomialCoeff(line, i)} `
        }
        console.log(lineStr)
    }
}

const binomialCoeff = (n, k) => {
    let res = 1

    for (let i = 0; i < k; i++) {
        res *= (n - i)
        res /= (i + 1)
    }
    return res
}

pascalTriangle(7)  