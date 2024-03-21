const lcs_recursive = (string1, string2, m, n) => {
    if (m === 0 || n === 0) {
        return 0
    }
    if (string1[m - 1] === string2[n - 1]) {
        return 1 + lcs_recursive(string1, string2, m - 1, n - 1)
    }
    else {
        return max(lcs_recursive(string1, string2, m - 1, n), lcs_recursive(string1, string2, m, n - 1))
    }
}

const max = (a, b) => a > b ? a : b

//4 GTAB
console.log(lcs_recursive('GAYTAB', 'GXTXAYB', 'GAYTAB'.length, 'GXTXAYB'.length))

//3 B2D
console.log(lcs_recursive('B12D', 'AB2CD', 'B12D'.length, 'AB2CD'.length))

