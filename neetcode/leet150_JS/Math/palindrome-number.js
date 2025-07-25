// https://leetcode.com/problems/palindrome-number/description/?envType=study-plan-v2&envId=top-interview-150

/*
edge case 1: if x < 0: return false

build the reverse of the number

return true if reverse === x else false

- Time: O(x.length)
- Space: O(1)
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x!=0 && x%10 === 0)) {    // edge case where x is multiple of 10, when reversed once the first digit removed x becomes 0...
        return false
    } 
    let reverse = 0
    while (x > reverse) {   // since only need to reverse half
        reverse = reverse*10 + x % 10
        x = Math.floor(x / 10)
    }
    console.log(x, reverse)
    return x === reverse || x === Math.floor(reverse / 10)     // x / 10 if it is odd length, then reverse has one extra digit
};