# https://neetcode.io/problems/decode-ways

class Solution:
    def numDecodings(self, s: str) -> int:

        # Dynamic programming bottom up with tabulation
        dp = {len(s): 1}

        for i in range(len(s) - 1, -1, -1):
            if (s[i] == '0'):
                dp[i] = 0
            else:
                dp[i] = dp[i + 1]

            if (i + 1 < len(s) and (s[i] == '1' or (s[i] == '2' and s[i + 1] in '0123456'))):
                dp[i] += dp[i + 2]

        return dp[0]


        # Recursive DFS with memoization
        # the value is how many ways to get there
        # dp_dict = {len(s): 1}

        # def dfs(idx):
        #     if (idx in dp_dict):
        #         # if exists, there is a way to that index
        #         return dp_dict[idx]
        #     elif (s[idx] == '0'):
        #         # should not eval due to leading 0 is invalid
        #         return 0

        #     # dfs with single steps first
        #     result = dfs(idx + 1)

        #     # if eval 2 digits, check if within length and contains valid numbers
        #     # 1 - 19, 20 - 26
        #     if idx + 1 < len(s) and (s[idx] == '1' or (s[idx] == '2' and s[idx + 1] in '0123456')):
        #         result += dfs(idx + 2)

        #     dp_dict[idx] = result
        #     return result

        # return dfs(0)
        

        # tried and failed
        # recursive dfs
        # count = 0

        # def dfs(idx):
        #     nonlocal count
        #     if (idx == len(s)):
        #         count += 1
        #         return
        #     elif (idx > len(s)):
        #         return
        #     elif (s[idx] == '0'):
        #         return

        #     dfs(idx + 1)

        #     if (idx + 1 < len(s) and (s[idx] == '1' or s[idx] == '2') and s[idx+1] in '0123456'):
        #         dfs(idx + 2)

        #     return

        # dfs(0)
        # return count
            