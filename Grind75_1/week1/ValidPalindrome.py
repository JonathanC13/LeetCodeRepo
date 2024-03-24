"""
https://leetcode.com/problems/valid-palindrome/
"""

class Solution:
    def isPalindrome(self, s: str) -> bool:

        s = s.lower()

        arrClean = []

        for c in s:
            if ((ord(c) >= 97 and ord(c) <= 122) or (ord(c) >= 48 and ord(c) <= 57)):
                arrClean.append(c)

        if (len(arrClean) == 0):
            return True
        #print(arrClean)
        
        fullLen = len(arrClean)
        halfLen = floor(fullLen / 2)

        for x in range(0, halfLen, 1):
            if (arrClean[x] != arrClean[fullLen - x - 1]):
                return False

        return True