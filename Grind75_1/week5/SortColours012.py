"""
https://leetcode.com/problems/sort-colors/description/
"""

class Solution:

    # slow speed
    def sortColorsSelection(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        # use selection sort
        #   In-place, no extra space, and one pass

        lenNums = len(nums)

        for unsortedIdx in range(1, lenNums):
            val = nums[unsortedIdx]

            sortedIdx = unsortedIdx - 1
            while(sortedIdx >= 0 and val < nums[sortedIdx]):
                # shift right
                nums[sortedIdx + 1] = nums[sortedIdx]
                sortedIdx = sortedIdx - 1

            # place value in correct position
            nums[sortedIdx + 1] = val 

    # medium speed
    def sortColorsCounting(self, nums:List[int]) -> None:

        lenNums = len(nums)

        # first pass to count the number of each value
        lenVals = 3
        numOfValues = [0] * lenVals

        for i in range(lenNums):
            numOfValues[nums[i]] = numOfValues[nums[i]] + 1

        idx = 0
        # second pass to overwrite the original array
        for i in range(lenVals):
            while(numOfValues[i] > 0):
                nums[idx] = i
                numOfValues[i] = numOfValues[i] - 1
                idx = idx + 1

    # fast speed
    # one pass with Dutch National Flag Algorithm
    def sortColorsDNF(self, nums: List[int]) -> None:
        lenNums = len(nums)

        lowIdx = 0
        midIdx = 0
        highIdx = lenNums - 1

        # 0 to end
        while (midIdx <= highIdx):
            if (nums[midIdx] == 0):
                # swap midIdx and lowIdx
                temp = nums[midIdx]
                nums[midIdx] = nums[lowIdx]
                nums[lowIdx] = temp

                lowIdx = lowIdx + 1
                midIdx = midIdx + 1

            elif (nums[midIdx] == 1):
                midIdx = midIdx + 1

            elif (nums[midIdx] == 2):
                temp = nums[midIdx]
                nums[midIdx] = nums[highIdx]
                nums[highIdx] = temp
                
                highIdx = highIdx - 1

        
    def sortColors(self, nums: List[int]) -> None:
        #self.sortColorsSelection(nums)
        #self.sortColorsCounting(nums)
        self.sortColorsCounting(nums)