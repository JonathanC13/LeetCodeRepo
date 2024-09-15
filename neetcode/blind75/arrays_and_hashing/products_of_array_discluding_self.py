# https://neetcode.io/problems/products-of-array-discluding-self

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        if len(nums) == 0:
            return nums

        output = [1] * len(nums)

        for i in range(1, len(nums)):
            output[i] = output[i-1] * nums[i-1]

        postfix_sum = 1
        for i in range(len(nums)-1, -1, -1):
            output[i] *= postfix_sum
            postfix_sum *= nums[i]
        
        return output

        # left = [1] * len(nums)
        # right = [1] * len(nums)

        # for i in range(1, len(nums)):
        #     left[i] = left[i-1] * nums[i-1]

        # for i in range(len(nums)-2, -1, -1):
        #     right[i] = right[i+1] * nums[i+1]

        # for i in range(len(nums)):
        #     output[i] = right[i] * left[i]

        # return output