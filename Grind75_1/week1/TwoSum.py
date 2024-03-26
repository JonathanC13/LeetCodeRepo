"""
https://leetcode.com/problems/two-sum/
"""

from typing import List

class Solution:

    # O(n)
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # dictionary to contain the iterated values from array 'nums'. Value as the 'key' and index as the 'value'.
        dictNums = {}
        # to assign the difference value that will be looked for in dictNums
        iDiff = None

        # iterate the array 'nums' and find the indexes of the values that equal to the target 'target'. Appends to dictNums as it goes.
        for x in range(0, len(nums)):
            # Calculate the value that would satisfy the target
            iDiff = target - nums[x]
            if (dictNums.get(iDiff) is not None):
                # if the diff value exists in the dictNums, return the current index and the 'value' of the diff value in dictNums
                return [x, dictNums.get(iDiff)]
            else:
                # add the arr value as the 'key' and the index as the 'value'.
                # Since 2 sum, if multiple instances of same number it is OK to overwrite the index in the 'value'.
                dictNums[nums[x]] = x

        return []
    
    # Brute force, O(n^2)
    def twoSumBrute(self, nums: List[int], target: int) -> List[int]:

        res = []

        iDiff = None
        iCurrIdx = 0

        iLenNums = len(nums)

        for x in range(0, iLenNums):
            iDiff = target - nums[x]
            if (iDiff == nums[x] and nums.count(iDiff) == 1):
                # must be the same index
                pass
            elif (nums.count(iDiff) > 0):
                # find the index of the 2nd number that will sum to the target
                for y in range(0, iLenNums):
                    if (x == y):
                        pass
                    elif (nums[y] == iDiff):
                        res.append(x)
                        res.append(y)
                        return res
            else:
                pass    
        return res

  
    
