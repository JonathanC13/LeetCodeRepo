// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/?envType=study-plan-v2&envId=leetcode-75

/*

since positive int, iterate 0 to < 31. 31st is sign
    if c bit at i === 0
       if both a and b bits are 1 then +2
       else if one is 1 then + 1
    else // i === 1
        if both 0: add 1


- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0
    for (let i = 0; i < 31; i ++) {
        const mask = 1 << i
        // console.log(a & mask, b & mask, c & mask)
        if ((c & mask) === 0) {
            if ((a & mask) > 0 && (b & mask) > 0) {
                flips += 2
            } else if ((a & mask) > 0 || (b & mask) > 0) {
                flips += 1
            }
        } else if ((a & mask) === 0 && (b & mask) === 0) {
            flips += 1
        }
    }
    return flips
};