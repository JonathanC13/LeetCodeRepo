# https://neetcode.io/problems/coin-change

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # unbounded due to unlimited number of each coin
        if amount == 0:
            return 0

        # amount + 1 as max val since min() is used
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for i in range(1, amount + 1):
            for c in coins:
                if i - c >= 0:
                    # possible path
                    dp[i] = min(dp[i], dp[i - c] + 1)

        # if != amount + 1, it was replaced with a path to it.
        return dp[amount] if dp[amount] != amount + 1 else -1



        # 2nd try. Recursive top down with memoization
        # max recursion depth. fail
        # dp = [amount + 1] * (amount + 1)
        # dp[0] = 0

        # def dfs(i):
        #     nonlocal amount
        #     print(i)
        #     if (i > amount):
        #         return 0

        #     for c in coins:
        #         if (i - c) >= 0:
        #             dp[i] = min(dp[i], dp[i - c] + 1)
                    
        #     dfs(i+1)
        # dfs(0)
        # print(dp)
        # return dp[amount] if dp[amount] != amount + 1 else -1


        # 1st tried and failed, recursive greedy
        # combo = [0] * (len(coins)+1)
        # coins.sort()
        # def dfs(amt, curr_combo):
        #     nonlocal combo
        #     if (amt == 0):
        #         if (len(combo) > len(curr_combo)):
        #             combo = curr_combo.copy()
        #         return True
        #     elif (amt < 0):
        #         return False

        #     for i in range(len(coins) - 1, -1, -1):
        #         curr_combo.append(coins[i]) # eval combo with this num
        #         dfs(amt - coins[i], curr_combo)
        #         curr_combo.pop()    # pop after evaled
        #     return False

        # dfs(amount, []);
        # print(combo)
        # return len(combo) if len(combo) != len(coins)+1 else -1