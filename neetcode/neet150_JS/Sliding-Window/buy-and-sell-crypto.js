// https://neetcode.io/problems/buy-and-sell-crypto

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 1) {
            return 0
        }

        let max = 0
        let l = 0
        let r = 1

        while (l < prices.length && r < prices.length) {
            max = Math.max(max, prices[r] - prices[l])

            if (prices[r] < prices[l]) {
                l = r
            }

            r += 1
        }

        return max
    }
}
