// https://neetcode.io/problems/longest-repeating-substring-with-replacement

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length < 2) {
            return s.length
        }

        let max = 0
        const unique = new Set()
        for (let c of s) {
            unique.add(c)
        }
        
        for (let c of unique) {
            let count = 0
            let l = 0

            for (let r = l; r < s.length; r ++) {
                if (s[r] === c) {
                    count += 1
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count -= 1
                    }
                    l += 1
                }

                max = Math.max(max, r - l + 1)
                console.log(max)
            }
        }
        return max
    }
}
