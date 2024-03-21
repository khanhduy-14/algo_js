const naivePatternSearching = (string, search) => {
    for (let i = 0; i <= string.length - search.length; i++) {
        for (let j = 0; j < search.length; j++) {
            if (string[i + j].toLowerCase() !== search[j].toLowerCase()) {
                break
            }
            if (j === search.length - 1) {
                console.log(`Pattern found at index ${i} \n`)
            }

        }
    }
}

naivePatternSearching('THIS IS A TEST TEXT', 'test')
naivePatternSearching('AABAACAADAABAABA', 'AABA')

