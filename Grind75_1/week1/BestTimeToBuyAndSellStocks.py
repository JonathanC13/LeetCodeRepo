"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
"""

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0

        arrLen = len(prices)
        currMinBuy = None
        if (prices is not None):
            # Starting at index 0
            currMinBuy = prices[0]
        else:
            return maxProfit

        # iterate the array to determine the max profit margin
        for x in range(arrLen):
            if (prices[x] < currMinBuy):
                # reassign the buy price if lower than the current min buy price
                currMinBuy = prices[x]
            else:
                if (prices[x] - currMinBuy > maxProfit):
                    # if greater max profit found, reassign value
                    maxProfit = prices[x] - currMinBuy

        return maxProfit