// https://leetcode.com/problems/reverse-integer/description/

/**
- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) {
        return -1 * reverse(-1 * x)
    }

    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1

    // Assume the environment does not allow you to store 64-bit integers (signed or unsigned). Therefore, quit before it stores a value out of range.

    let result = 0;

    while (x != 0) {
        // check for overflow
        // 1. if result > max / 10. it means if the current result is shifted left to give room for new digit, it will be > max
        // 2. if result > max - x % 10. if by adding the new digit would cause > max
        if (result > max / 10 || result * 10 > max - x % 10) { 
            return 0
        }
        result = result * 10 + (x % 10) // since not overflowed, add the digit to the result
        x = Math.floor(x / 10)   // remove one's place
    }

    return result;
    
};