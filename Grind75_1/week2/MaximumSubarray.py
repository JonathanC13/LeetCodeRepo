"""
https://leetcode.com/problems/maximum-subarray/
"""

class Solution:


    def maxSubArrayDivide(self, nums: List[int]) -> int:

        idxStart = 0
        idxEnd = 0

        def findMax(start, end) -> int:
            
            if (start > end):
                return -inf

            nonlocal idxStart, idxEnd

            leftSum = 0
            rightSum = 0
            currSum = 0
            mid = start + int((end - start) // 2)

            idxStartLocal = 0
            idxEndLocal = 0

            # get the max sum from the left of the subarray, start from the middle outward
            for x in range(mid - 1, start - 1, -1):
                currSum = currSum + nums[x]
                if (currSum > leftSum):
                    leftSum = currSum
                    idxStartLocal = x

            currSum = 0

            # get the max of the right
            for x in range(mid + 1, end + 1, 1):
                currSum = currSum + nums[x]
                if (currSum > rightSum):
                    rightSum = currSum
                    idxEndLocal = x

            # this sub array with the middle
            comb = leftSum + nums[mid] + rightSum
            #print(str(comb))
            #print('------')

            # recurse left
            left = findMax(start, mid - 1)

            # recurse right
            right = findMax(mid + 1 , end)

            if (comb > left and comb > right):
                idxStart = idxStartLocal
                idxEnd = idxEndLocal

            return max(left, right, comb)

        maxFound = findMax(0, len(nums) - 1)

        print(str(idxStart) + " : " + str(idxEnd))
        return maxFound


    # https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
    def maxSubArrayOn(self, nums: List[int]) -> int:
        
        lenArr = len(nums)

        currSubSum = 0
        maxSum = nums[0]
        idxStart = 0
        idxEnd = 0
        idxTemp = 0

        for x in range(0, lenArr):
            # add to the current sum
            currSubSum = currSubSum + nums[x]

            # if the currSubSum is greater than the overall maxSum, replace it
            if (currSubSum > maxSum):
                maxSum = currSubSum
                idxStart = idxTemp
                idxEnd = x


            # reset to currSubSum to 0 if becomes negative so the next element has a fresh start
            if (currSubSum < 0):
                currSubSum = 0
                idxTemp = x + 1

        print(str(idxStart) + " : " + str(idxEnd))

        return maxSum


    # used double pointer. Can also return the indexed
    def maxSubArrayMine(self, nums: List[int]) -> int:
        lenArr = len(nums)
        maxSum = nums[0]
        maxSubarray = 0
        idxStart = 0
        idxEnd = 0

        for i in range(0, lenArr):
            for j in range(i, lenArr):
                maxSubarray = maxSubarray + nums[j]

                if (maxSubarray > maxSum):
                    idxStart = i
                    idxEnd = j
                    maxSum = maxSubarray
            
            maxSubarray = 0

        print(str(idxStart) + " : " + str(idxEnd))
        return maxSum


    def maxSubArray(self, nums: List[int]) -> int:
        #return self.maxSubArrayMine(nums)
        return self.maxSubArrayOn(nums)
        #return self.maxSubArrayDivide(nums)