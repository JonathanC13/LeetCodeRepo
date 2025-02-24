// https://leetcode.com/problems/guess-number-higher-or-lower/description/

/*
- Time: O(log n)
- Space: O(1)
*/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0
    let right = n

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        const guessResult = guess(mid)

        if (guessResult === 0) {
            return mid
        } else if (guessResult === -1) {
            // go left
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
};