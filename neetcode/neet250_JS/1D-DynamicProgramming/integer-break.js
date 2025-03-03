// https://leetcode.com/problems/integer-break/

/*
create dp Array of length n + 1. fill with -1
initial state dp[1] = 1

max_prod = 0
iterate i from 2 to dp.length
    l = i   // start i at 1 as the first number in the sum
    r = i - 1   // i - 1 because in the sum for i = 2, l = 1 and r = 1. therefore 1 + 1 = 2 = i
    while (l <= r) {
        // determine if this combination is > than previously calculated max prod
        // choose the max of l or dp[l] because if dp[l] is greater it means that it had a combination > l itself.
        max_prod = Math.max(max_prod, Math.max(l, dp[l]) * Math.max(r, dp[r]))

        // logically, the max prod will be the center values of the sum
        l += 1
        r -= 1
    }
    dp[i] = max_prod

return dp[n]

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1
    let max_prod = 0

    for (let i = 2; i < dp.length; i ++) {
        let l = 1
        let r = i - 1
        while (l <= r) {
            max_prod = Math.max(max_prod, Math.max(l, dp[l]) * Math.max(r, dp[r]))
            l += 1
            r -= 1
        }
        dp[i] = max_prod
    }

    return dp[n]
};