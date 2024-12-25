// https://neetcode.io/problems/word-break

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (s.length === 0) {
            return false
        }

        const n = s.length
        const dp = Array(n + 1).fill(false)
        dp[n] = true

        for (let i = n - 1; i >= 0; i --) {
            for (let word of wordDict) {
                if (word.length <= n - i && word === s.slice(i, i + word.length)) {
                    dp[i] = dp[i + word.length]
                }

                if (dp[i]) {
                    break   // since no need to keep checking if link established
                }
            }
        }
        
        return dp[0]
    }
}
