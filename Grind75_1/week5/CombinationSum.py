"""
https://leetcode.com/problems/combination-sum/description/
"""

class Solution:

    # medium speed
    def combinationSumUnordered(self, candidates: List[int], target: int) -> List[List[int]]:
        resList = []

        lenCand = len(candidates)

        def DFS(currList: List[int], currSum: int, idx: int) -> None:

            if (currSum == target):
                # when the current list values sum to the target add a copy to the result list
                resList.append(currList[:])
            elif (currSum < target):

                for i in range(idx, lenCand):
                    # add the value to the current list, indicates being evaluated
                    currList.append(candidates[i])

                    # evaluate next value in combination with the current list
                    # pass current index because the same index can be reused to sum to the target
                    DFS(currList, currSum + candidates[i], i)
                    
                    if (len(currList)):
                        # remove from the list, indicates evaluation is complete
                        currList.pop(len(currList) - 1)
                        

            return             

        currList = []

        DFS(currList, 0, 0)

        return resList
                        

    # about same speed as unordered candidates list
    def combinationSumOrdered(self, candidates: List[int], target: int) -> List[List[int]]:
        resList = []

        lenCand = len(candidates)

        def DFS(currList: List[int], currSum: int, idx: int) -> int:

            if (currSum == target):
                resList.append(currList[:])
                return currSum
            elif (currSum < target):
                for i in range(idx, lenCand):
                    currList.append(candidates[i])
                    print(currList)
                    ret = DFS(currList, currSum + candidates[i], i)
                    
                    if (len(currList)):
                        currList.pop(len(currList) - 1)

                    # if ordered asc, we can break once a value over shoots the target
                    if (ret > target):
                        break
                        

            return currSum

        currList = []

        DFS(currList, 0, 0)

        return resList


    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # return self.combinationSumUnordered(candidates, target)

        candidates.sort()
        candidatesOrdered = candidates[:]