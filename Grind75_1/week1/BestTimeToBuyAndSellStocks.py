"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
"""

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0

        arrLen = len(prices)
        currMinBuy = None
        if (prices is not None):
            currMinBuy = prices[0]
        else:
            return maxProfit

        for x in range(arrLen):
            if (prices[x] < currMinBuy):
                currMinBuy = prices[x]
            else:
                if (prices[x] - currMinBuy > maxProfit):
                    maxProfit = prices[x] - currMinBuy

        return maxProfit