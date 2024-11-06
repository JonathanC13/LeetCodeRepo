// https://neetcode.io/problems/longest-repeating-substring-with-replacement

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length <= k) {
            return s.length
        }

        let maxSubLen = 0
        const focusLetters = new Set(Array.from(s))

        for (const c of focusLetters) {
            let count = 0
            let left = 0

            for (let i = 0; i < s.length; i ++) {
                if (s[i] === c) {
                    count += 1
                }

                while ((i - left - count) >= k) {
                    if (s[left] === c) {
                        count -= 1
                    }
                    left += 1
                }

                maxSubLen = Math.max(maxSubLen, i - left + 1)
            }
        }

        return maxSubLen
    }
}
