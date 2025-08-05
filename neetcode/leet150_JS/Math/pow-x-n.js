// https://leetcode.com/problems/powx-n/description/?envType=study-plan-v2&envId=top-interview-150

/*

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return Math.pow(x, n)

    // TLE
    if (n === 0) {
        return 1
    }

    let pow = Math.abs(n)
    let prod = 1
    for (let i = 0; i < pow; i ++) {
        prod = prod * x
    }

    return n < 0 ? 1/prod : prod

    // TLE
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    let res = 1

    while (n !== 0) {
        if (n & 1 === 1) {
            res = res * x
        }
        x = x * x
        n = n >> 1
    }
    return res
};