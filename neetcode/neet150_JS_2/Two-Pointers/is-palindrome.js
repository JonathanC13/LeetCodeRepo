// https://neetcode.io/problems/is-palindrome

/*
edge case 1: if s.length < 2: return true

create helper func to check if alphanumeric char

create 2 pointers:
    First at beginning
    Second at end

while L < R
    keep moving L until valid alpha char

    keep moving R until valid alpha char

    if case insensitive char !== 
        return false

return true

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length < 2) {
            return true
        }

        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.alphanumeric(s[l])) {
                l += 1
            }

            while (l < r && !this.alphanumeric(s[r])) {
                r -= 1
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l += 1
            r -= 1
        }

        return true
    }

    alphanumeric(char) {
        const c = char.toLowerCase()
        return ('a'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
            ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0))
    }
}
