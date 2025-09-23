// https://leetcode.com/problems/reverse-bits/

/**
res = 0

since 32 bits, iterate 32 times
    extract the most right bit from n and shift n >> 1 to make the bit fall off

    shift res << 1, and OR the new bit

return res

- Time: O(1)
- Space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i ++) {
        res = res << 1
        res = res | (n & 1)

        n = n >> 1
    }

    return res
};