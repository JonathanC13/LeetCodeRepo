// https://neetcode.io/problems/climbing-stairs

/*
if n <= 2: return n

At step 1 there is 1 way:
    1. 1 step
At step 2 there are 2 ways:
    1. 1 1
    2. 2 steps
At step 3 there are 3 ways
    ways to get to step 1 + ways to get to step 2 because:
        Adding another 2 steps to way to step 1 doesn't increase the number of distinct ways, just changes it
        Adding another 1 step to way to step 2 doesn't increase the number of distinct ways, just changes it

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n
        }

        const dp = new Array(n + 1).fill(0)
        dp[1] = 1
        dp[2] = 2

        for (let i = 3; i <= n; i ++) {
            dp[i] = dp[i - 1] + dp[i - 2]
        }

        return dp[n]
    }
}
