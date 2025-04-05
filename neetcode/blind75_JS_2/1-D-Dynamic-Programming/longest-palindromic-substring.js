// https://neetcode.io/problems/longest-palindromic-substring

/*
edge case 1: 
    if (s.length === 0) {
        return ''
    }
edge case 2:
    if (s.length === 1) {
        return s[0]
    }

create a 2D Array for the DP table of rows length = s.length and cols length = s.length. Fill with false
initial state is the same char, r === c, equates to true since a char with itself is a palindrome.

iterate rows r from n - 1 to 0
    iterate cols from r + 1 to n - 1
        if s[r] === s[c] AND (check if this char continues a palindrome, s[r + 1][c - 1] OR j - i <= 2)
        // c - r <= 2 is if the same char (diff = 0) or if match with char beside itself (diff = 1, even center), or if match with char on other side of center (diff = 2, odd center) 

- Time: O(n^2)
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length === 0) {
            return ''
        }
        if (s.length === 1) {
            return s[0]
        }
        
        const dp = Array.from(new Array(s.length), (v) => new Array(s.length).fill(false))
        for (let r = 0; r < s.length; r ++) {
            dp[r][r] = true
        }

        const palinBounds = [0, 0]
        let palinLength = 1

        for (let r = s.length - 2; r >= 0; r --) {
            for (let c = r + 1; c < s.length; c ++) {
                if (s[r] === s[c] && (dp[r + 1][c - 1] === true || c - r <= 2)) {
                    if (c - r + 1 > palinLength) {
                        palinBounds[0] = r
                        palinBounds[1] = c
                        palinLength = c - r + 1
                    }
                    dp[r][c] = true
                }
            }
        }
        console.log(dp)
        return s.slice(palinBounds[0], palinBounds[1] + 1)
    }
}
