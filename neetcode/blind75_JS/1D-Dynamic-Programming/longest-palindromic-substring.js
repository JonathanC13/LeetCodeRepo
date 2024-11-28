// https://neetcode.io/problems/longest-palindromic-substring

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length === 0){
            return ''
        }
        if (s.length === 1) {
            return s
        }

        let res = ['']

        for (let i = 0; i < s.length; i ++) {
            // odd
            let left = i
            let right = i
            this.palinCheck(s, res, left, right)

            // even
            left = i
            right = i + 1
            this.palinCheck(s, res, left, right)

        }

        return res
    }

    palinCheck(s, res, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            res[0] = (right - left + 1 > res[0].length) ? s.slice(left, right + 1) : res[0]

            left -= 1
            right += 1
        }
    }
}
