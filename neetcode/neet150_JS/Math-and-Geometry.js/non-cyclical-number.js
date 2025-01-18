// https://neetcode.io/problems/non-cyclical-number

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        if (n === 0) {
            return false
        }

        const seen = new Set()
        while (!seen.has(n)) {
            seen.add(n)
            let sum = 0
            while (n !== 0) {
                sum += (n % 10) ** 2
                n = Math.floor(n / 10)
            }
            console.log(sum)
            if (sum === 1) {
                return true
            }
            n = sum
        }

        return false
    }
}
