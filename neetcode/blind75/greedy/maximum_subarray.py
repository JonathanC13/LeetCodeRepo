# https://neetcode.io/problems/maximum-subarray

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums:
            return 0

        max_sum = nums[0]
        local_total = 0
        for n in nums:
            local_total += n
            max_sum = max(max_sum, local_total)

            # want to reset after locl_total < 0 because it is not beneficial to the result of max sum
            if (local_total < 0):
                local_total = 0

        return max_sum

        # if not nums:
        #     return 0

        # max_sum = nums[0]

        # for l in range(len(nums)):
        #     local_sum = 0
        #     for r in range(l, len(nums)):
        #         local_sum += nums[r]
        #         max_sum = max(max_sum, local_sum)

        # return max_sum