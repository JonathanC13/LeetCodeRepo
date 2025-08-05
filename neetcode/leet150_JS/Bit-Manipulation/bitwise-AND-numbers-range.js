// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/?envType=study-plan-v2&envId=top-interview-150

/*
common prefix of the left and right number

0101
0111    get common prefix
---
0100

Time: O(1)  ~= 32
Space: O(1)

*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let res = 0
    for (let i = 31; i >= 0; i --) {
        l = left & (1 << i)
        r = right & (1 << i)
        if (l !== r) {
            break
        }
        res = res | l
    }

    return res
};