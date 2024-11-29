// https://neetcode.io/problems/count-paths

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        if (m === 0 || n === 0) {
            return 0
        }

        const dp = Array(m+1).fill().map(() => {return Array(n+1).fill(0)})
        dp[0][1] = 1

        for (let r = 1; r <= m; r ++){
            for (let c = 1; c <= n; c ++) {
                dp[r][c] = dp[r][c - 1] + dp[r - 1][c] 
            }
        }

        return dp[m][n]
    }
}
