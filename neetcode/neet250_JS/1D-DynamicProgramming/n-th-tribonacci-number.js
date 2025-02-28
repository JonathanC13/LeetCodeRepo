// https://leetcode.com/problems/n-th-tribonacci-number/

/*
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

- edge case 1: if n < 2. return n
- edge case 2: if n === 2: return 1

DP tabulation bottom up
create dp Array of length n + 1
initial states:
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

iterate from 3 to n + 1
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

return dp[n]

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n < 2) {
        return n
    }
    if (n === 2) {
        return 1
    }

    const dp = new Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    for (let i = 3; i < dp.length; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    
    return dp[n]
};