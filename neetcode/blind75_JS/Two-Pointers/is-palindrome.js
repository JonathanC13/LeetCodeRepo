// https://neetcode.io/problems/is-palindrome

class Solution {

    /**
     * Converts string to lowercase and then returns if the string is alphanumeric or not.
     * @param {string} char
     * @return {boolean}
     */
    isAlphanumeric = (char) => {
        const charLower = (char.toString()).toLowerCase()
        return (charLower.charCodeAt(0) >= 'a'.charCodeAt(0) && charLower.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
            (charLower.charCodeAt(0) >= '0'.charCodeAt(0) && charLower.charCodeAt(0) <= '9'.charCodeAt(0))
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while (left < right) {
            while(!this.isAlphanumeric(s[left]) && (left < right)) {
                left = left + 1
            }

            while(!this.isAlphanumeric(s[right]) && (left < right)) {
                right = right - 1
            }

            if ((s[left].toString()).toLowerCase() !== (s[right].toString()).toLowerCase()) {
                return false
            }
            left = left + 1
            right = right - 1
        }

        return true
    }
}
