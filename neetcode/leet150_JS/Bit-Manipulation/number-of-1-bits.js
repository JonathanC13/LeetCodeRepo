// https://leetcode.com/problems/number-of-1-bits/?envType=study-plan-v2&envId=top-interview-150

/*
create var for count of 1 Bits

while (n not 0)
    if the first (right) bit is 1. n & 1
        count += 1

    shift right to cause right bit to fall off.

Time: O(1)
Space: O(1)
*/

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0
    while (n !== 0) {
        if (n & 1 === 1) {
            cnt += 1
        }
        n = n >> 1
    }
    return cnt
};