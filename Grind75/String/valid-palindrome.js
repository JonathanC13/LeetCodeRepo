// https://leetcode.com/problems/valid-palindrome/description/

/*
edge case 1: guaranteed palindrome
if s.length < 2:
    return true

isAlphaNum
    char = char.toLowerCase()
    ord = char.charCodeAt(0)

    return true if 'a'.charCodeAt(0) <= ord <= 'z'.charCodeAt(0) || '0'.charCodeAt(0) <= ord <= '9'.charCodeAt(0) else false

main
    // setup two pointers and compare the characters
    l = 0
    r = s.length - 1

    while (l < r) {
        // need to move l until valid alphanumeric
        while (l < r && isAlphaNum(s[l]) === false) {
            l += 1
        }

        // same with r
        while (l < r && isAlphaNum(s[r]) === false) {
            r -= 1
        }

        // compare the two chars, they are either both valid alphanumeric or bounded by l === r
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }

        l += 1
        r -= 1
    }

    return true

- Time: O(n)
- Space: O(1)
*/

const isAlphaNum = (char) => {
    char = char.toLowerCase()
    const ord = char.charCodeAt(0)

    return ('a'.charCodeAt(0) <= ord && ord <= 'z'.charCodeAt(0)) || ('0'.charCodeAt(0) <= ord && ord <= '9'.charCodeAt(0)) ? true : false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) {
        return true
    }

    let l = 0
    let r = s.length - 1

    while (l < r) {
        while (l < r && isAlphaNum(s[l]) === false) {
            l += 1
        }

        while (l < r && isAlphaNum(s[r]) === false) {
            r -= 1
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l += 1
        r -= 1
    }

    return true
};