// https://neetcode.io/problems/is-palindrome

/*
edge case 1: if s.length < 2: return true

create a function to true if character is alphanumeric else false

create left pointer to index 0
create right pointer to index s.length -1

compare the value at both pointers, if not equal return false else left pointer moves up 1 and right pointer moves down 1. Continues until left >= right
case insensitive so force char to lower case

if made it to the end, return true since no mismatch could be found

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
            // move left pointer until valid alphanumeric char
            while (l < r && !this.isAlphanumeric(s[l])) {
                l += 1
            }

            // same with right pointer
            while (l < r && !this.isAlphanumeric(s[r])) {
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

    isAlphanumeric(c) {
        return ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) ||
            ('a'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
            ('A'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0))
    }
}
