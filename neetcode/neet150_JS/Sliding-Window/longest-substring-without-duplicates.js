// https://neetcode.io/problems/longest-substring-without-duplicates

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) {
            return s.length
        }

        let max = 0
        let l = 0
        let r = 1

        const sub = new Set()
        sub.add(s[l])

        while (l < s.length && r < s.length) {
            while (l < s.length && sub.has(s[r])) {
                sub.delete(s[l])
                l += 1
            }

            sub.add(s[r])

            max = Math.max(max, sub.size)

            r += 1
        }

        return max
    }
}
