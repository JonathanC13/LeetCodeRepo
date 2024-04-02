"""
https://leetcode.com/problems/ransom-note/description/
"""

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dictMagazine = dict()

        # populate dictMagazine with the letters that show up in 'magazine'
        # Restriction: Each letter in magazine can only be used once in ransomNote.
        #   So, the 'value' will be the count of occurances
        for c in magazine:
            if (c not in dictMagazine):
                dictMagazine[c] = 1
            else:
                dictMagazine[c] = dictMagazine[c] + 1

        # iterate the 'ransomNote' and check against the dictMagazine
        for c in ransomNote:
            if (c not in dictMagazine):
                return False
            elif (dictMagazine[c] == 0):
                return False
            else:
                dictMagazine[c] = dictMagazine[c] - 1
        
        return True