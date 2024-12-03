// https://neetcode.io/problems/is-palindrome

class Solution {

    isAlphanum = (char) => {
        return ('0'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0)) || 
                ('a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) 
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 0) {
            return true
        }

        s = s.toLowerCase()

        let left = 0
        let right = s.length -1

        while (left < right) {
            while (left < right && !this.isAlphanum(s[left])) {
                left += 1
            }

            while (left < right && !this.isAlphanum(s[right])) {
                right -= 1
            }

            if (left >= right) {
                break
            }
            //console.log(s[left], ' ', s[right])
            if (s[left] !== s[right]) {
                return false
            }

            left += 1
            right -= 1
        }

        return true
    }
}
