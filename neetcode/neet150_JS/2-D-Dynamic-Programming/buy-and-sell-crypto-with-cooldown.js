// https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0
        }

        const dp = new Set()

        return this.dfs(0, true, prices, dp)
    }

    dfs(i, buying, prices, dp) {
        if (i >= prices.length) {
            return 0    // min profit is 0
        }

        const key = `${i}-${buying}`
        if (dp.has(key)) {
            return dp[key]
        }

        const cooldown = this.dfs(i + 1, buying, prices, dp)
        if (buying) {
            const buy = this.dfs(i + 1, !buying, prices, dp) - prices[i]
            dp[key] = Math.max(buy, cooldown)
        } else {
            const sell = this.dfs(i + 2, !buying, prices, dp) + prices[i]
            dp[key] = Math.max(sell, cooldown)
        }

        return dp[key]
    }
}
