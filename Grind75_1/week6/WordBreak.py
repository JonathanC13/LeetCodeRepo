"""
https://leetcode.com/problems/word-break/description/
"""

# too slow, try again later
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:

        resList = []

        lenS = len(s)

        def DFS(currList: List[str], resList: List[str], sIdx: int) -> bool:

            if (sIdx >= lenS):
                resList.append(currList[:])
                return True

            
            for word in wordDict:
                sIdxLocal = sIdx
                cont = True

                currList.append(word)

                for letter in word:

                    if (sIdxLocal >= lenS):
                        cont = False
                        break
                    elif (letter != s[sIdxLocal]):
                        cont = False
                        break
                    else:
                        sIdxLocal = sIdxLocal + 1

                if (cont == False):
                    currList.pop()
                    continue
                else:
                    cont = DFS(currList, resList, sIdxLocal)

                if (cont == True):
                    return True

                currList.pop()

            return False


        res = DFS([], resList, 0)

        print (resList)

        return res