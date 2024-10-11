# https://neetcode.io/problems/longest-palindromic-substring

class Solution:
    def longestPalindrome(self, s: str) -> str:
        
        if not s:
            return "";

        res = s[0]
        
        l, r = 0, 0
        for i in range(len(s)):
            l = i
            r = i
            # starting range, move pointers while match initial value
            while (l - 1 >= 0 and s[l - 1] == s[i]):
                l = l - 1

            while (r + 1 < len(s) and s[r + 1] == s[i]):
                r = r + 1

            # move while same char on each side
            while (l >= 0 and r < len(s) and s[l] == s[r]):
                l -= 1
                r += 1

            if ((r - (l+1)) > len(res)):
                res = s[l+1:r];

        return res