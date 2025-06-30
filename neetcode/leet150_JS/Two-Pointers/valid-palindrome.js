// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

/*
one pointer at the beginning
one pointer at the end

while l < r
    while (l < r and !charIsAlpha(s[l]))
        l += 1

    while (l < r and !charIsAlpha(s[r]))
        r -= 1

    if s[l] !== s[r] 
        return false

    l += 1
    r -= 1

return true

- Time: O(n)
- Space: O(1)
*/

const isAlphaNum = (c) => {
    c = c.toLowerCase()
    code = c.charCodeAt(0)

    return (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) || (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0))
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0
    let r = s.length - 1

    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) {
            l += 1
        }

        while (l < r && !isAlphaNum(s[r])) {
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