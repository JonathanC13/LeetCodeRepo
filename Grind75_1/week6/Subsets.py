"""
https://leetcode.com/problems/subsets/
"""

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        resList = [[]]

        lenNums = len(nums)

        inProc = [False] * lenNums

        def DFS(resList: List[List[int]], inProc: List[bool], tempList: List[int], idx: int):
            if (idx >= lenNums):
                return

            for i in range(idx, lenNums):
                if (inProc[i]):
                    continue
                else:
                    inProc[i] = True
                    tempList.append(nums[i])
                    resList.append(tempList[:])
                    DFS(resList, inProc, tempList, i + 1)
                    tempList.pop()
                    inProc[i] = False

            return


        DFS(resList, inProc, [], 0)

        return resList
