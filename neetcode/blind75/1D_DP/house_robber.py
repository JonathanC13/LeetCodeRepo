# https://neetcode.io/problems/house-robber
# https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems

class Solution:
    def rob(self, nums: List[int]) -> int:
        if (not nums):
            return 0

        dp_table = [0] * (len(nums) + 1)
        dp_table[0] = 0
        dp_table[1] = nums[0] 

        for i in range(1, len(nums)):
            # if choose to rob the curr house can only add the total value from -2 (i-1)
            # if does not rob the house, can take the value of -1 (i)
            dp_table[i+1] = max(nums[i] + dp_table[i-1], dp_table[i])

        return dp_table[len(nums)]

        # ineff
        # max_val = 0

        # def dfs(idx, curr_sum):
        #     nonlocal max_val
        #     if ((idx-1 >= 0 and nums[idx-1] == -1) or nums[idx] == -1 or (idx+1 < len(nums) and nums[idx+1] == -1)):
        #         return

        #     curr_sum += nums[idx]
        #     max_val = max(max_val, curr_sum)
        #     val = nums[idx]
        #     nums[idx] = -1
        #     for i in range(idx+1, len(nums)):
        #         dfs(i, curr_sum)

        #     nums[idx] = val

        #     return

        # dfs(0, 0)

        # return max_val