# https://neetcode.io/problems/two-integer-sum

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return nums

        dict_int = dict()

        for i in range(len(nums)):
            if (nums[i] in dict_int):
                # if the curr value exists in the dict, it means a pair exists to satify the target
                return [dict_int[nums[i]], i]
            else:
                # store the value needed to satify the target as the key, the value is the index
                diff = target - nums[i]
                dict_int[diff] = i

        return []