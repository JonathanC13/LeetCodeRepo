// https://neetcode.io/problems/count-paths

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array(m + 1).fill().map((e) => {return Array(n + 1).fill(0)})
        dp[1][1] = 1

        for (let i = 1; i < dp.length; i ++) {
            for (let j = 1; j < dp[0].length; j ++) {
                if (i === 1 && j === 1) {
                    continue
                }

                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }

        return dp[m][n]
    }
}
