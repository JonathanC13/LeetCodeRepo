// https://neetcode.io/problems/climbing-stairs

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n
        }

        const dpTable = Array(n + 1).fill(0)
        dpTable[1] = 1
        dpTable[2] = 2

        for (let i = 3; i < n + 1; i ++) {
            dpTable[i] = dpTable[i - 1] + dpTable[i - 2]
        }

        return dpTable[n]
    }
}
