const isPalindrome = (str) => {
    if (str.length <= 1) return true
    let left = 0, right = str.length - 1
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true


}

console.log(isPalindrome("mada1m"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("1234a321"));



