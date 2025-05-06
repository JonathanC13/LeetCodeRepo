// https://neetcode.io/problems/climbing-stairs

/*
step:   0, 1, 2, 3, 4
ways:   0, 1, 2, 3, 5

dp[i] = dp[i - 1] + dp[i - 2] since extending the combo to get to ith step from i - 1 and i - 2 doesn't make an additional new combo.

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n + 1).fill(0)
        dp[1] = 1
        dp[2] = 2

        for (let i = 3; i < dp.length; i ++) {
            dp[i] = dp[i - 1] + dp[i - 2]
        }

        return dp[n]
    }
}
