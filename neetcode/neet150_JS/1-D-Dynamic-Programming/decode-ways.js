// https://neetcode.io/problems/decode-ways

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 0 || s[0] === '0') {
            return 0
        }
        const n = s.length
        const dp = Array(n + 1).fill(0)
        dp[n] = 1

        for (let i = n - 1; i >= 0; i --) {
            if (s[i] === '0') {
                dp[i] = 0
            } else {
                dp[i] = dp[i + 1]

                if (i + 1 < n && (s.charAt(i) === '1' || (s.charAt(i) === '2' && s.charAt(i + 1) < '7'))) {
                    dp[i] += dp[i + 2]
                }
            }
        }

        console.log(dp)

        return dp[0]

    }
}
