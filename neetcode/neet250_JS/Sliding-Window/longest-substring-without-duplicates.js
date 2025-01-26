// https://neetcode.io/problems/longest-substring-without-duplicates

/*
- edge case 1: if s.length < 2: return s.length

create left pointer at 0
maxLen = 0
create Set for the chars in the current window

for (let r = 0; r < s.length; r ++){
    while (Set.has(s[r])) {
        Set.delete(s[l])
        l += 1
    }

    // after there is not dup of the current char, add it
    Set.add(s[r])

    maxLen = Math.max(maxLen, r - l + 1)
}

return maxLen
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) {
            return s.length
        }

        let l = 0
        let maxLen = 0
        const chars = new Set()

        for (let r = 0; r < s.length; r ++) {
            while (chars.has(s[r])) {
                chars.delete(s[l])
                l += 1
            }

            chars.add(s[r])

            maxLen = Math.max(maxLen, r - l + 1)
        }

        return maxLen
    }
}
