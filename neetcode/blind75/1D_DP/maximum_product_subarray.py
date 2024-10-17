# https://neetcode.io/problems/maximum-product-subarray

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]

        # Kadane for product
        # https://www.geeksforgeeks.org/maximum-product-subarray/
        max_prod = nums[0]
        curr_max, curr_min = nums[0], nums[0]

        for i in range(1, len(nums)):
            n = nums[i]
            # hold old curr_max
            tmp = curr_max
            print('-')
            # depending on the max and min, it is the new 'start' of the sub array for the max_prod
            # if current element, prev max * curr element, prev min * curr element (since -ive * -ive = +ive)
            curr_max = max(n, curr_max * n, curr_min * n)
            # if current element, prev max * curr element (-ive and +ive), prev min * curr element (-ive and +ive)
            curr_min = min(n, tmp * n, curr_min * n)
            max_prod = max(curr_max, max_prod)

        return max_prod



        # Kadane for sum
        # max_end, max_sum = nums[0], nums[0]

        # for i in range(1, len(nums)):
        #     max_end = (max_end + nums[i], nums[i])

        #     max_sum = max(max_sum, max_end)

        # return max_sum


        # step 2. Recursive
        # max_prod = float('-inf')
        # def dfs(i):
        #     nonlocal max_prod
        #     if (i >= len(nums)):
        #         return float('-inf')

        #     curr_prod = 1
        #     for idx in range(i, len(nums)):
        #         curr_prod *= nums[idx]
        #         max_prod = max(max_prod, curr_prod)

        #     return max(max_prod, dfs(i + 1))

        # return dfs(0)


        # step 1. Recursive relation
        # 1. can only add the value of i + 1 to the current prod
        #   curr_prod = max(curr_prod, curr_prod + add[i + 1])
        # Base cases:
        # if i >= len(nums): return float('inf')