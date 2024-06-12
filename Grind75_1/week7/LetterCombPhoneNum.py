"""
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
"""

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:

        lenD = len(digits)

        if (lenD == 0):
            return []

        dictMap = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y','z']
        }

        resList = []
        #subset = []
        subset = ""

        def DFS(resList: List[List[str]], subset: List[str], idx: int):

            if (len(subset) == lenD):
                #resList.append(''.join(subset[:]))
                resList.append(subset)
                return

            for char in dictMap[digits[idx]]:
                # for each letter that is represented by the digit; add to the current subset, evaluate next digit (if end, add to result list), then remove from subset

                #subset.append(char)
                subset += char

                DFS(resList, subset, idx + 1)

                #subset.pop()
                subset = subset[:-1:]


        DFS(resList, subset, 0)

        return resList
        