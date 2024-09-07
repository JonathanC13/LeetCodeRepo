# https://neetcode.io/problems/duplicate-integer

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dict_vals = dict()

        for num in nums:
            if num in dict_vals:
                return True
            else:
                dict_vals[num] = 0

        return False