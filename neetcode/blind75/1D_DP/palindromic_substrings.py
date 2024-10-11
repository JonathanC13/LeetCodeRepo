# https://neetcode.io/problems/palindromic-substrings

class Solution:
    def countSubstrings(self, s: str) -> int:
        palin_num = 0;

        # since the palindromes are counted based on index even if the contents is the same, must check odd and even starting points seperately

        for i in range(len(s)):

            # odd
            l, r = i, i
            while (l >= 0 and r < len(s) and s[l] == s[r]):
                palin_num += 1
                l = l - 1
                r = r + 1

            # even
            l, r = i, i + 1
            while (l >= 0 and r < len(s) and s[l] == s[r]):
                palin_num += 1
                l = l - 1
                r = r + 1
            
        return palin_num