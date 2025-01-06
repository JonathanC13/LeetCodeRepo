// https://neetcode.io/problems/longest-common-subsequence

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length === 0 && text2.length === 0) {
            return 0
        }

        const t1 = text1.length
        const t2 = text2.length
        const dp = Array(t1 + 1).fill().map((e) => {return Array(t2 + 1).fill(0)})

        for (let r = 1; r < dp.length; r ++) {
            for (let c = 1; c < dp[0].length; c ++) {
                if (text1[r-1] === text2[c-1]) {
                    dp[r][c] = 1 + dp[r-1][c-1]
                } else {
                    dp[r][c] = Math.max(dp[r-1][c], dp[r][c-1])
                }
            }
        }

        // get the common subsequence
        let r = t1
        let c = t2
        const res = []
        let currCnt = dp[r][c]
        while (r > 0 && c > 0 && dp[r][c] === currCnt) {
            while (Math.max(dp[r-1][c], dp[r][c-1]) === currCnt) {
                if (dp[r-1][c] > dp[r][c-1]) {
                    r -= 1
                } else {
                    c -= 1
                }
            }
            res.push(text1[r-1])

            // move to next char
            r -= 1
            c -= 1
            currCnt -= 1
        }
        console.log(res.reverse().join())

        return dp[t1][t2]
    }
}
