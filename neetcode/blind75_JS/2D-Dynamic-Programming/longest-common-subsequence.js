// https://neetcode.io/problems/longest-common-subsequence

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length === 0 || text2.length === 0){
            return 0
        }

        const t1Len = text1.length
        const t2Len = text2.length

        const dp = Array(t1Len + 1).fill().map(() => {return Array(t2Len + 1).fill(0)})

        for (let r = 1; r <= t1Len; r ++){
            for (let c = 1; c <= t2Len; c ++) {
                if (text1[r-1] === text2[c-1]) {
                    dp[r][c] = 1 + dp[r-1][c-1]
                } else {
                    dp[r][c] = Math.max(dp[r-1][c], dp[r][c-1])
                }
            }
        }

        return dp[t1Len][t2Len]

    }
}
