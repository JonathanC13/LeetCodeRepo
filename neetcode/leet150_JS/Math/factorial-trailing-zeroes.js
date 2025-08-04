// https://leetcode.com/problems/factorial-trailing-zeroes/description/?envType=study-plan-v2&envId=top-interview-150

/**
https://www.purplemath.com/modules/factzero.htm


*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let trailing = 0
    let x = 1

    while (n / Math.pow(5, x) > 0) {
        trailing += Math.floor(n / Math.pow(5, x))
        x += 1
    }

    return trailing

};