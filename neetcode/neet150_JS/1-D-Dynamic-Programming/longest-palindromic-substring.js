// https://neetcode.io/problems/longest-palindromic-substring

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) {
            return s
        }
        const n = s.length
        const dp = Array(n).fill().map((e) => {return Array(n).fill(false)})

        let resStart = 0
        let resLen = 0

        for (let r = n - 1; r >= 0; r --) {
            for (let c = r; c < n; c ++) {
                if (s[r] === s[c] && (c - r <= 2 || dp[r + 1][c - 1])) {
                    dp[r][c] = true

                    if (c - r + 1 > resLen) {
                        resLen = c - r + 1
                        resStart = r
                    }

                }
            }
        }

        return s.slice(resStart, resStart + resLen)
    }
}
