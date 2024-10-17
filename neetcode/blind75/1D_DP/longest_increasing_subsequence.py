# https://neetcode.io/problems/longest-increasing-subsequence

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:

        dp = [1] * len(nums)

        # for starting index
        for i in range(len(nums) - 1, -1, -1):
            # for each element before, if less than starting value, it is part of a solution so in the dp index +1 to include this element in that solution
            for j in range(i, -1, -1):
                if (nums[j] < nums[i]):
                    dp[j] = max(dp[i] + 1, dp[j]) # must check max because it could be in the optimal solution

        return max(dp)


        # naive method, check every combination with a starting index and subsequence
        # max_sub = 0
        # def dfs(idx, curr_max, curr_sub):
        #     nonlocal max_sub
        #     if (idx >= len(nums)):
        #         return 0

        #     for i in range(idx, len(nums)):
        #         if (nums[i] > curr_max):
        #             dfs(i + 1, nums[i], curr_sub + 1)
        #             max_sub = max(max_sub, curr_sub + 1)

        # dfs(0, float('-inf'), 0)
        # return max_sub
