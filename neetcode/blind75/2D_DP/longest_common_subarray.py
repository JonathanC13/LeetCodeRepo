# https://leetcode.com/problems/maximum-length-of-repeated-subarray/

class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        len_1 = len(nums1)
        len_2 = len(nums2)

        dp = [[0] * (len_2 + 1) for _ in range(len_1 + 1)]
        max_len = 0
        for r in range(len_1):
            for c in range(len_2):
                if (nums1[r] == nums2[c]):
                    dp[r+1][c+1] = dp[r][c] + 1

                max_len = max(max_len, dp[r+1][c+1])
                # else:
                    # since common subarray, don't need to propagate just keep track for max. Since all elements are initialized at 0, don't need to change.

        return max_len