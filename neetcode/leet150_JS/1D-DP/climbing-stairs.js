// https://leetcode.com/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-interview-150

/*
if n <= 2: return n

create dp table with Array of length n
initial states
    dp[0] = 1
    dp[1] = 1   // can jump 2 steps

for i = 2 to < n
    // to determine the distinct ways to get to the nth step, it is to add the distinct ways to get to (i - 2) step + (i - 1) step because:
    // 1st step = 1 way. 
        1
    // 2nd step = 2 ways.
        1 + 1
        2
    // for the 3rd step, it is purely add ways to 1st step + ways to 2nd step because by extending the combination at the specific step does not increate the distinct ways.
        from 1st step:
            (1) + 1     // still 1 way to 3rd
        from 2nd step:
            (1 + 1) + 1
            (2) + 1
        but together to 3rd are 3 ways.

    dp[i] = dp[i - 1] + dp[i - 2]

- Time: O(n)
- Space: O(n)   // OR instead of DP table, just save the i-1 and i-2 values in variables which will make the Space: O(1)
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n
    }

    let s1 = 1
    let s2 = 2
    let curr = 0
    for (let i = 2; i < n; i ++) {
        curr = s1 + s2
        s1 = s2
        s2 = curr
    }

    return curr
};