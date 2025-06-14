// https://leetcode.com/problems/guess-number-higher-or-lower/description/?envType=study-plan-v2&envId=leetcode-75

/*
Use binary search to make the guesses and the feedback from the api sets the a new boundary

- Time: O(n)
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
    let l = 1
    let r = n

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)

        const fb = guess(mid)
        if (fb === 0) {
            return mid
        } else if (fb === -1) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return -1
};