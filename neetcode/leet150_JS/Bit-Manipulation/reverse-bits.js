// https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150

/**
create res var, init to 0
iterate 32 times for the 32 bits
    bit = get the right bit with mask, & 1
    res = bit left shifted 31 - i times to put into reversed position OR Operation with current res binary value
        e.g.    bit 1 shifted left 3 times = 1000
                res = 101
                updated res = 1101

    shift n right by 1 to make right bit fall off.

Time: O(1)  32 ~= 1
Space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i ++) {
        res = ((n & 1) << (31 - i)) | res
        n = n >> 1
    }
    return res
};