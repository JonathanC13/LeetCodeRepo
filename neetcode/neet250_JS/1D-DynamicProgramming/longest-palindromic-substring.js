// https://neetcode.io/problems/longest-palindromic-substring

/*
- edge case 1: if s.length < 2: return s.length

At every index, call func to get the longest palindrome. 2 pointer solution.
- Time: O(n^2), each n, go left and right = n
- Space: O(1)

DP, bottom up soln
- Time: O(n^2)
- Space: O(n^2)

idea is i and j are a palindrome if:
characters are equal AND (could be even or odd center so j - i <= 2 OR otherwise if the characters at i + 1 and j - 1 are a palindrome)
Building off of prev palindrome.


    longestPalindrome(s) {
        let resIdx = 0, resLen = 0;
        const n = s.length;

        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && 
                    (j - i <= 2 || dp[i + 1][j - 1])) {
                        
                    dp[i][j] = true;
                    if (resLen < (j - i + 1)) {
                        resIdx = i;
                        resLen = j - i + 1;
                    }
                }
            }
        }

        return s.slice(resIdx, resIdx + resLen);
    }
*/

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length < 2) {
            return s
        }

        let maxPal = ''
        for (let i = 0; i < s.length; i ++) {
            const pal = this.evalPal(i, s)
            if (pal.length > maxPal.length) {
                maxPal = pal
            }
        }

        return maxPal
    }

    evalPal(i, s) {
        let left = i
        let right = i

        let palin = s[i]
        
        // assume palin center is even
        right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palin = s.slice(left, right + 1)
            left -= 1
            right += 1
        }

        // reset
        left = i - 1
        right = i + 1
        // assume palin center is odd.
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > palin.length) {
                palin = s.slice(left, right + 1)
            }
            left -= 1
            right += 1
        }

        return palin
    }
}
