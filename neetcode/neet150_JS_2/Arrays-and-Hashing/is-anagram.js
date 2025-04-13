// https://neetcode.io/problems/is-anagram

/*
edge case 1: if s.length !== t.length: return false

Create a Map for s and t
    key: the char
    val: the frequency of the char

iterate to populate the Maps

iterate to compare

- Time: O(n)    n = length of s and t
- Space: O(n)
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

        const sMap = new Map()
        const tMap = new Map()

        for (let i = 0; i < s.length; i ++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        for (let [key, val] of sMap.entries()) {
            if (val !== tMap.get(key)) {
                return false
            }
        }

        return true
    }
}
