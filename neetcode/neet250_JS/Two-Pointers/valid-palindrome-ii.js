// https://leetcode.com/problems/valid-palindrome-ii/

/*
--- brute force
iterate s
    create new Array with that character removed
    compare with reverse
    if not equal: return false

return true

---
- base case 1: if (s.length < 2) {return true}

initialize a left pointer at 0
initilaize a right pointer at the end
let n = 1 // number of removals allowed
return recursiveFunc(s, left, right, n)

*recursiveFunc(s, left, right, n) {
    - edge case 1: if (left >= right) { return true }
    - edge case 2: if (s[left] !== s[right] && n === 0) { return false }

    // if here, either s[left] === s[right] or n > 0
    if (s[left] !== s[right]) {
        n -= 1
        // 2 options, left += 1 OR right -= 1
        return this.recursiveFunc(s, left + 1, right, n) || this.recursiveFunc(s, left, right - 1, n)
    } else {
        return this.recursiveFunc(s, left + 1, right - 1, n)
    }
}

- Time: O(n)
- Space: O(n)   // recursive stack
    
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s.length < 2) {
        return true
    }

    let left = 0
    let right = s.length - 1
    let n = 1

    return rec(s, left, right, n)
};

var rec = function(s, left, right, n) {
    // console.log(left, right, n)
    if (left >= right) {
        return true
    }
    if (s[left] !== s[right] && n === 0) {
        return false
    }

    if (s[left] !== s[right]) {
        n -= 1

        return rec(s, left + 1, right, n) || rec(s, left, right - 1, n)
    } else {
        return rec(s, left + 1, right - 1, n)
    }
}