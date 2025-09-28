// https://leetcode.com/problems/powx-n/description/

/**
Binary of n i.e. (11)10 is (1011)2
    1    0    1    1
    2^3  2^2  2^1  2^0   <-- Corresponding place values of each bit

    OR we can also write this as
    1 0 1 1
    8 4 2 1 <-- Corresponding place values of each bit

    Now, 7^8 × 7^2 × 7^1 == 7^11 as 7^(8 + 2 + 1) == 7^11
    NOTE: We have not considered 7^4 in this case as the 4th place bit is OFF

    So, 7^8 × 7^2 × 7^1 == 5764801 × 49 × 7 == 1977326743 <-- Desired Output
    Now, applying logic keeping this concept in mind
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    // Time: O(n)
    if (n < 0) {
        x = 1 / x
        n *= -1
    }

    let res = 1
    while (n !== 0) {
        if (n & 1 === 1) {  // if lsb is 1, then multiply to res. Only if 1 because 
            res = res * x
        }
        x = x * x   // maintain running total of product at bit position.
        n = n >>> 1 // need to reach 0, therefore zero fill.
    }
    return res
};

// Time: O(n)
const TLE = function(x, n) {
    let negPow = false
    if (n < 0) {
        negPow = true
        n *= -1
    }

    let res = 1
    for (let i = 0; i < n; i ++) {
        res = res * x
    }

    if (negPow === true) {
        return 1 / res
    } else {
        return res
    }
}