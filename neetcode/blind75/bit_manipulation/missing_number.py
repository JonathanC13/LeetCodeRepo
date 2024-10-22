# https://neetcode.io/problems/missing-number

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        
        res = len(nums)

        for i in range(len(nums)):
            # if the correct number in the index it will result to 0 (e.g. 1 - 1)
            # if missing, it will result in -1 (e.g. 0 - 1), therefore shifting the value by -1
            res += i - nums[i]
        # after all the shifts by -1 when the value is mismatched, it will have the value that is missing
        return res