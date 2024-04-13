"""
https://leetcode.com/problems/contains-duplicate/
"""

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dictNums = {}

        for n in nums:
            if (n not in dictNums):
                dictNums[n] = 1
            else:
                return True
        
        return False