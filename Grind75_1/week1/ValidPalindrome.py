"""
https://leetcode.com/problems/valid-palindrome/
"""

class Solution:
    def isPalindrome(self, s: str) -> bool:

        # lowercase all characters for consistency when comparing
        s = s.lower()

        # array for the filters characters from string 's'. only alpha and numbers
        arrClean = []

        # filter and only append alpha and numbers to array arrClean.
        for c in s:
            if ((ord(c) >= 97 and ord(c) <= 122) or (ord(c) >= 48 and ord(c) <= 57)):
                arrClean.append(c)

        # if empty, return True
        if (len(arrClean) == 0):
            return True
        #print(arrClean)
        
        fullLen = len(arrClean)
        halfLen = floor(fullLen / 2)

        # iterate up to half of the array while checking its opposite character from the other end.
        for x in range(0, halfLen, 1):
            if (arrClean[x] != arrClean[fullLen - x - 1]):
                return False

        return True