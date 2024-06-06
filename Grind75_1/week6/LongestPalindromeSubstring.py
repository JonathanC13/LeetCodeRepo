"""
https://leetcode.com/problems/longest-palindromic-substring/
"""

class Solution:
    def longestPalindromeMine(self, s: str) -> str:
        
        if (len(s) == 0):
            return s

        resLongest = s[0]

        lenS = len(s)
        dpTable = [[False] * lenS for _ in range(lenS)]

        # diagonal is always True since same character is a valid palindrome
        j = 0
        for i in range(lenS):
            dpTable[i][j] = True
            j = j + 1

        # determine palindromes
        j = 1
        for k in range(1, lenS):
            j = k
            for i in range(0, lenS - k):
                temp = ""
                if (k == 1):
                    # 2nd diagonal special case, could be 2 char palindrome like "aa"
                    if (s[i] == s[j] and dpTable[i][j-1] == True):
                        dpTable[i][j] = True
                        temp = s[i:j+1]                

                elif (s[i] == s[j] and dpTable[i+1][j-1] == True):
                    
                    # if the left diagonal is True then it is a valid palindrome
                    dpTable[i][j] = True
                    temp = s[i:j+1]


                if (len(temp) > len(resLongest)):
                    resLongest = temp

                j = j + 1


        #for i in range(len(dpTable)):
        #    print(dpTable[i])

        return resLongest


    def longestPalindromeExpandCenter(self, s:str) -> str:

        lenS = len(s)

        if (lenS <= 1):
            return s

        retStr = s[0]

        def centerExpand(left: int, right: int) -> str:
            while(left >= 0 and right < lenS and s[left] == s[right]):
                
                left = left - 1
                right = right + 1
                
            return s[left + 1: right]

        left = 0
        right = 0
        for i in range(0, lenS - 1):
            # for each character, expand both directions around the center

            # must treat the center as even and odd
            oddPalin = centerExpand(i, i)
            evenPalin = centerExpand(i, i + 1)

            if (len(oddPalin) > len(retStr)):
                retStr = oddPalin

            if (len(evenPalin) > len(retStr)):
                retStr = evenPalin
                    
        return retStr
                

    def longestPalindrome(self, s: str) -> str:
        #return self.longestPalindromeMine(s)
        return self.longestPalindromeExpandCenter(s)
