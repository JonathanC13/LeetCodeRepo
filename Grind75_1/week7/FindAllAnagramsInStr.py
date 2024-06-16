"""
https://leetcode.com/problems/find-all-anagrams-in-a-string/
"""

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        lenP = len(p)
        
        # mark currently used in a substring that could be an anagram of p
        used = [False] * lenP

        currAna = ""
        retList = []

        usedFlag = False

        for i in range(len(s)):

            if (s[i] in p):
                
                for j in range(lenP):
                    if (s[i] == p[j]):
                        if (not used[j]):
                            usedFlag = True
                            used[j] = True
                            currAna += s[i]

                            if (len(currAna) == lenP):
                                print(currAna)
                                retList.append(i - (lenP - 1))
                                # reset
                                used = [False] * lenP
                                currAna = ""

                                # keep current, since it could lead into next anagram
                                used[j] = True
                                currAna += s[i]
                            
                            break

                if (not usedFlag):
                    # reset
                    used = [False] * lenP
                    currAna = ""

                    # but keep current, since it could lead into next anagram
                    used[dictP[s[i]]] = True
                    currAna += s[i]
                else:
                    usedFlag = True

            else:
                # reset
                used = [False] * lenP
                currAna = ""

        return retList