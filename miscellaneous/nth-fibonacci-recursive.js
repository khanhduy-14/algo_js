const fibonacci = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(1))
console.log(fibonacci(9))
console.log(fibonacci(10))
