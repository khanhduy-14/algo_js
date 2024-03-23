const gcd = (a, b) => {
    if (a === 0) return b
    return gcd(b % a, a)
}
//2
console.log(gcd(38, 16))

//2
console.log(gcd(16, 38))

//1
console.log(gcd(38, 15))
