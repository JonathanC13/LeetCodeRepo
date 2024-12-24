// https://neetcode.io/problems/palindromic-substrings

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (s.length <= 1) {
            return s.length
        }
        const n = s.length
        let numPal = 0

        const palins = []

        const dp = Array(n).fill().map((e) => {return Array(n).fill(false)})

        for (let r = n - 1; r >= 0; r --) {
            for (let c = r; c < n; c ++) {
                if (s[r] === s[c] && (c - r <= 2 || dp[r + 1][c - 1])) {
                    dp[r][c] = true
                    
                    numPal += 1
                    palins.push([s.slice(r, c + 1)])
                }
            }
        }
        console.log(palins)
        return numPal
    }
}
