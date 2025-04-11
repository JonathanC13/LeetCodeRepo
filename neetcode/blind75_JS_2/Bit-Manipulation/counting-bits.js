// https://neetcode.io/problems/counting-bits

/*
edge case 1: if n === 0: return [0]

dp table with initial states:
    0 = 0 one bits
    1 = 1 one bit

iterate i = 2 to <= n
    the one bits at i is the equation:
        dp[Math.floor(i / 2)]   // to get its base
        +
        dp[i % 2]               // if remainder is 1 then odd number, need to add a one bit since all bases are base 2.

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if (n === 0) {
            return [0]
        }

        const res = [0, 1]

        for (let i = 2; i <= n; i ++) {
            res.push(res[Math.floor(i / 2)] + res[i % 2])
        }

        return res
    }
}
