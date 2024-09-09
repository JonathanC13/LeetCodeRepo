# https://neetcode.io/problems/buy-and-sell-crypto


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0

        # window_size = 1

        profit = 0

        # while window_size < len(prices):
        #     for i in range(len(prices) - window_size):
        #         j = window_size + i
        #         profit = max(profit, prices[j] - prices[i])

        #     window_size += 1

        # return profit

        buy = prices[0]
        for price in prices:
            if price < buy:
                buy = price

            profit = max(profit, price - buy)
        return profit