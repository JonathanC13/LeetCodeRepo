// https://neetcode.io/problems/longest-palindromic-substring

/*
edge case 1:
    if s.length <= 1 {
        return s
    }

2D dynamic

rows and cols of s.length.fill with false

iterate rows, len - 1 to 0. Start from end because start with the smallest substring as the center to check if palindrome, and then the other substrings can extend if also palindrome.
    iterate cols, r to len
        if r === c: arr[r][c] = true since same index char is a palindrome

        compare forward char (c index) to the current char (r index). 
        If True AND pre char is also a palindrome
            1. (r + 1, c - 1). r + 1 because if smaller substring end chars (c-1) that are inside of this substring are itself a palindrome or not. If true, then this is extending an existing palindrome.
            2. [r][c - 1] because the middle of the palindrome can be an even number of chars

            save if longer than current palindrome. s.slice(r, c + 1)

- Time: O(n^2)  r * c, since r === c then n^2
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) {
            return s
        }

        const tab = new Array(s.length).fill().map((e) => new Array(s.length).fill(false))
        let longestPalin = ''

        for (let r = s.length - 1; r >= 0; r --) {
            for (let c = r; c < s.length; c ++) {
                if (s[r] === s[c] && (c - r < 2 || tab[r + 1][c - 1] === true)) {
                    tab[r][c] = true
                    if (c - r >= longestPalin.length) {
                        longestPalin = s.slice(r, c + 1)
                    }
                }
            }
        }
        return longestPalin
    }
}
