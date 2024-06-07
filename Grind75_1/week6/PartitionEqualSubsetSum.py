"""
https://leetcode.com/problems/partition-equal-subset-sum/
"""

class Solution:
    # TLE
    def canPartitionFirst(self, nums: List[int]) -> bool:
        
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

        # This took way too long to understand. Exceeded time
        def DFSMemo(currSum: int, dpTable: List[List[int]], subLen: int) -> bool:
            
            if (currSum == 0):
                return True
            elif (subLen == 0 and currSum != 0):
                return False
            elif (dpTable[subLen][currSum] != False):
                return dpTable[subLen][currSum]
            elif (nums[subLen - 1] > currSum):
                # go to next value
                return DFSMemo(currSum, dpTable, subLen - 1)
            else:
                # either the next value in nums equates to the currSum or substract the next value from the currSum. Goal is for currSum to = 0
                dpTable[subLen][currSum] = (DFSMemo(currSum, dpTable, subLen - 1)) or (DFSMemo(currSum - nums[subLen - 1], dpTable, subLen - 1))

                return dpTable[subLen][currSum]


        return DFSMemo(targetSum, dpTable, lenNums)


    def canPartitionSec(self, nums: List[int]) -> bool:

        lenNums = len(nums)

        sum = 0
        for num in nums:
            sum = sum + num

        if (sum % 2 != 0):
            return False

        targetSum = int(sum / 2)

        dpTable = [[False] * (targetSum + 1) for _ in range(lenNums + 1)]
        # dpTable[lenNums][targetSum] will hold the final answer

        # index 0, 0 is always True since 0 can sum to 0
        dpTable[0][0] = True

        # first row, excluding 0,0, always False since no index in num
        for i in range(1, targetSum + 1):
            dpTable[0][i] = False

        # first column, excluding 0,0, always True since 0 sum is the goal
        for i in range(1, lenNums + 1):
            dpTable[i][0] = True

        # iterate the table
        for i in range(1, lenNums + 1):
            for j in range(1, targetSum + 1):

                # initial bool value is from the row before because a value may have resulted in that sum before
                dpTable[i][j] = dpTable[i - 1][j]

                if (j >= nums[i - 1]):
                    # if the current sum, j, being evaluated is >= that the value being evaluated, num[i - 1], check if it is part of the solution by checking if it results in sum 0 or collaborates with another value
                    dpTable[i][j] = (dpTable[i][j] or dpTable[i - 1][j - nums[i - 1]])

        # the answer of if it can be partitioned equally is confidently at dpTable[lenNums][targetSum] because all values must participate in the answer
        return dpTable[lenNums][targetSum]

    
    def canPartition(self, nums: List[int]) -> bool:
        # return self.canPartitionFirst(nums)
        return self.canPartitionSec(nums)