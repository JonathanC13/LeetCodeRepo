"""
https://leetcode.com/problems/valid-anagram/description/
"""

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        dictS = {}

        # populate dict with the orignal string, char as the 'key' and occurance count as the 'value'
        for c in s:
            if (c in dictS):
                dictS[c] = dictS[c] + 1
            else:
                dictS[c] = 1

        # iterate word to check if it is an anagram of string 's'
        for c in t:
            if (c in dictS):
                if (dictS[c] == 1):
                    # remove if last occurance matched
                    dictS.pop(c)
                else:
                    # subtract 1 occurance
                    dictS[c] = dictS[c] - 1
            else:
                return False

        if (len(dictS) == 0):
            # if by end the of iteration string 't', all characters matched and the dict is empty, then anagram of string 's'
            return True
        else:
            return False

        
        