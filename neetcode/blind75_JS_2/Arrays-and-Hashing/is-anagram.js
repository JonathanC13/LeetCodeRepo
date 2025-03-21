// https://neetcode.io/problems/is-anagram

/*
edge case 1: if s.length !== t.length: return false

create an Array of length 26 fill with 0, since strings only contain lowercase letters 26 indexes
iterate String s
    for the ascii value - ascii value('a') increment the value at the index in the Array

iterate String t
    for the ascii value - ascii value('a')
    if index value === 0: return false
    else
        decrement

finally, iterate Array
    if value !== 0: return false

return true

- Time: O(m + n)    // m + n + 26
- Space: O(1)       // 26
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const arr = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
            arr[idx] += 1
        }

        for (let i = 0; i < t.length; i ++) {
            const idx = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (arr[idx] <= 0) {
                return false
            } else {
                arr[idx] -= 1
            }
        }

        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] !== 0) {
                return false
            }
        }

        return true
    }
}
