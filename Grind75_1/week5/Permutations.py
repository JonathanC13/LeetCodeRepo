"""
https://leetcode.com/problems/permutations/
"""

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        resultList = []

        lenNums = len(nums)

        # must keep track which values are still available for use in the current permutations
        valUsedList = [False] * lenNums

        def DFS(currPermPath, valUsed, resultList):

            if (len(currPermPath) == lenNums):
                # if lengths equal, it indicates all values were used
                resultList.append(currPermPath[:])

            for idx, value in enumerate(nums):
                # enumerate the values so that it is easier to index in the valUsedList
                # loop to pick each value in the permutation

                if (valUsedList[idx]):
                    # if used already, go to the next value
                    continue

                # add the unused value in the currPermPath
                currPermPath.append(value)
                valUsedList[idx] = True

                # recursive call to the next value
                DFS(currPermPath, valUsedList, resultList)

                # when returned, remove so it can be used in another permutation
                currPermPath.pop(len(currPermPath) - 1) # of just pop(). default is last item
                valUsedList[idx] = False


        DFS([], valUsedList, resultList)

        return resultList