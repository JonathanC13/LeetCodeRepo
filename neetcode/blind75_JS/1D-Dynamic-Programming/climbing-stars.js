// https://neetcode.io/problems/climbing-stairs

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1 || n === 2) {
            return n
        }

        const dpTable = new Array(n + 1).fill(0)
        // at step 0, 0 distinct ways to reach
        // at step 1, 1 distinct ways to reach  , climb 1
        // at step 2, 2 distinct ways to reach  , climb 2 or 1, 1
        dpTable[1] = 1
        dpTable[2] = 2

        // each step >= 3, the distinct ways to reach are the (ways to reach i - 1) + (ways to reach i - 2)
        for (let i = 3; i < dpTable.length; i ++) {
            dpTable[i] = dpTable[i - 1] + dpTable[i - 2]
        }
        return dpTable[n]
    }
}
