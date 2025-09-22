// https://leetcode.com/problems/number-of-1-bits/description/

/**
if most right bit === 1
    res += 1

shift right to have right bit fall off

return res

- Time: O(m)    // m = binary length of n
- Space: (1)

 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while (n > 0) {
        if (Number(n & 1) === 1) {
            res += 1
        }
        n = n >> 1
    }

    return res
};