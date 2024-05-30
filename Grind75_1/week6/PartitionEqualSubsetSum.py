"""
https://leetcode.com/problems/partition-equal-subset-sum/
"""

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        
        lenNums = len(nums)

        totalSum = 0
        for num in nums:
            totalSum = totalSum + num

        # if the sum is odd, then apparently it can never be partitioned exactly in 2
        #   to equal
        # Would have never come to this conclusion without googling
        #   https://www.geeksforgeeks.org/partition-problem-dp-18/
        # I feel so tired.
        if (totalSum % 2 != 0):
            return False

        targetSum = int(totalSum / 2)
        dpTable = [[False] * (targetSum + 1) for _ in range(lenNums + 1)]

        # This took way too long to understand. TLE, do something else
        def DFSMemo(currSum: int, dpTable: List[List[int]], subLen: int) -> bool:
            
            if (currSum == 0):
                return True
            elif (subLen == 0 and currSum != 0):
                return False
            elif (dpTable[subLen][currSum] != False):
                return dpTable[subLen][currSum]
            elif (nums[subLen - 1] > currSum):
                return DFSMemo(currSum, dpTable, subLen - 1)
            else:
                dpTable[subLen][currSum] = (DFSMemo(currSum, dpTable, subLen - 1)) or (DFSMemo(currSum - nums[subLen - 1], dpTable, subLen - 1))

                return dpTable[subLen][currSum]


        return DFSMemo(targetSum, dpTable, lenNums)