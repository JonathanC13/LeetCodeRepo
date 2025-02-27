// https://neetcode.io/problems/climbing-stairs

/*
1D dynamic with tabulation
Build the solution from the beginning and the answer is the final result.

at step 1, there is 1 distinct way, take 1 step
at step 2, there are 2 distinct ways. 1 + 1 or 2
at step 3, there are 3 distinct ways
    1 + 1 + 1
    2 + 1
    1 + 2
at step 4, there are 5 distinct ways
    1 + 1 + 1 + 1
    2 + 1 + 1
    1 + 2 + 1
    1 + 1 + 2
    2 + 2

the pattern is dp[ith step] = dp[i - 1] + dp[i - 2]

- edge case 1: if n === 1: return 1
- edge case 2: if n === 2: return 2

create a dp table of size n + 1 fill with 0
set initial states. 
    dp[1] = 1
    dp[2] = 2

iterate from 3 to dp.length
    dp[i] = dp[i -2] + dp[i - 1]

return dp[n]

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 3) {
            return n
        }

        const dp = new Array(n + 1).fill(0)
        dp[1] = 1
        dp[2] = 2

        for (let i = 3; i < dp.length; i ++) {
            dp[i] = dp[i - 2] + dp[i - 1]
        }

        return dp[n]
    }
}
