// https://neetcode.io/problems/buy-and-sell-crypto

/*
- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0

        let buy = 0

        for (let sell = buy + 1; sell < prices.length; sell ++) {
            max = Math.max(max, prices[sell] - prices[buy])

            if (prices[sell] < prices[buy]) {
                // move buy forward for the lower price
                buy = sell
            }
        }

        return max
    }
}
