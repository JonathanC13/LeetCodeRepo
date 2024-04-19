"""
https://leetcode.com/problems/longest-substring-without-repeating-characters/
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        lenOfs = len(s)
        leftP = 0
        charDict = {}

        maxLengthSub = 0
        indexesSub = [0, 0]

        for rightP in range(0, lenOfs):
            if(s[rightP] not in charDict or charDict[s[rightP]] < leftP):
                # if not in charDict it means new character
                # if charDict[s[rightP]] < left it means the previous occurance is not in this substring that is being evaluated
                charDict[s[rightP]] = rightP

                if ((rightP - leftP) + 1 > maxLengthSub):
                    # assigning maxlength here since the else below will always have a lesser substring length due to moving the left pointer forward
                    maxLengthSub = (rightP - leftP) + 1
                    indexesSub = [leftP, rightP]
                
            else:
                # move starting of the substring to 1 after the dup char position.
                leftP = charDict[s[rightP]] + 1
                # update index for the char
                charDict[s[rightP]] = rightP

        print(indexesSub)
        print(s[indexesSub[0]:indexesSub[1] + 1])

        return maxLengthSub