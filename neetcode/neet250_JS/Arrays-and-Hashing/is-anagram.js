// https://neetcode.io/problems/is-anagram

/*
- edge case 1: if (s.length !== t.length) {return false} 

Maintain two Maps, one for each String that tracks the frequency of the characters

iterate the common length
    Add/increment the character in s to its Map
    Add/increment the character in t to its Map

iterate one of the Maps
    if the other Map does not have the character or the frequency does not match, return false

return true

Time: O(n)
Space: O(1)
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

        const n = s.length

        for (let i = 0; i < n; i ++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        for (let [c, cnt] of sMap.entries()) {
            if (!(tMap.get(c) === cnt)) {
                return false
            }
        }

        return true
    }
}
