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

        let maxSubLen = 0
        const letters = new Set()
        let left = 0

        for (let i = 0; i < s.length; i ++) {
            while (letters.has(s[i])) {
                letters.delete(s[left])
                left += 1
            }

            letters.add(s[i])
            maxSubLen = Math.max(maxSubLen, letters.size)
        }

        return maxSubLen
    }
}
