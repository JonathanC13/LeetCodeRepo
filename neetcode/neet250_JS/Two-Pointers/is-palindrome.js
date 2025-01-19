// https://neetcode.io/problems/is-palindrome

/*
- edge case 1: if (s.length < 2) {return true}

initialize a pointer at 0
initiliaze a pointer at the end

while (left < right)
    ensure content at left pointer is an alphanumeric value
    while left < right and char is not alphanumeric
        move left pointer right by 1

    ensure content at right pointer is an alphanumeric value
    while left < right and char is not alphanumeric
        move right pointer left by 1

    if left < right and the content at left and right do not match
        return false

    move left pointer right by 1
    move right pointer left by 1

return true

- Time: O(n)... n/2
- Space: O(1)
*/

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
        if (s.length < 2) {
            return true
        }

        s = s.toLowerCase()

        let left = 0
        let right = s.length - 1

        while (left < right) {
            while (left < right && !this.isAlphanum(s[left])) {
                left += 1
            }

            while (left < right && !this.isAlphanum(s[right])) {
                right -= 1
            }
            
            if (left < right && s[left] !== s[right]) {
                return false
            }

            left += 1
            right -= 1
        }

        return true
    }
}
