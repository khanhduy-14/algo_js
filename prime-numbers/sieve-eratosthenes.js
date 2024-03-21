const sieveEratosthenes = (n) => {
    const markedPrimeList = Array.from({ length: n + 1 }, (_, __) => true)
    const listPrime = []
    for (let primeNum = 2; primeNum * primeNum <= n; primeNum++) {
        if (markedPrimeList[primeNum]) {
            for (let i = primeNum * primeNum; i <= n; i += primeNum) {
                markedPrimeList[i] = false
            }
        }
    }
    for (let i = 2; i < markedPrimeList.length; i++) {
        if (markedPrimeList[i]) {
            listPrime.push(i)
        }

    }
    return listPrime
}


const listPrimeLessThan100 = sieveEratosthenes(100)
console.log(listPrimeLessThan100)   