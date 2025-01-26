// https://neetcode.io/problems/longest-repeating-substring-with-replacement

/*
- edge case 1: if k >= s.length: return s.length

Must evaluate the entire String s with each unique character
create a Set and iterate String s to add

maxLen = 0

for each unique char
    let l = 0
    let good = 0
    for (r = 0; r < s.length; r ++) {
        if (s[r] === char) {
            good += 1

        while (l <= r && r - l + 1 - good > k) {
            too many replacments, move left ptr of the window
            if (s[l] -== char) {
                good -= 1
            }
            l += 1
        }
        

        maxLen = Math.max(maxLen, r - l + 1)
    }

- Time: O(m * n). unique chars * s leng
- Space: O(m)   // m for unique chars in Set
*/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (k >= s.length) {
            return s.length
        }

        const unique = new Set()
        for (let i = 0; i < s.length; i ++) {
            unique.add(s[i])
        }

        let maxLen = 0
        
        for (const c of unique) {
            let good = 0
            let l = 0
            for (let r = 0; r < s.length; r ++) {
                if (c === s[r]) {
                    good += 1
                }

                while (l <= r && r - l + 1 - good > k) {
                    if (s[l] === c) {
                        good -= 1
                    }
                    l += 1
                }

                maxLen = Math.max(maxLen, r - l + 1)
            }
        }

        return maxLen   
    }
}
