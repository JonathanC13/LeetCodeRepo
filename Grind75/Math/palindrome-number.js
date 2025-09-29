// https://leetcode.com/problems/palindrome-number/description/

/**
Without converting to String

edge case 1:
if x < 0:
    return false

reverse the number and then compare

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let rev = 0
    let n = x
    while (n !== 0) {
        rev = rev * 10
        rev = rev + (n % 10)
        n = Math.floor(n / 10)
    }

    return rev === x
};