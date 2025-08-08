// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
set initial buy prices at prices[i0

iterate i in the prices
    maxProfit = max(maxProfit, prices[i] - buy)

    if the current price at i is < current bought price
        buy = prices[i]     // replace with the lower price as buy

return max(0, maxProfit)

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0
    }

    let buy = prices[0]
    let maxProf = 0
    for (let i = 1; i < prices.length; i ++) {
        maxProf = Math.max(maxProf, prices[i] - buy)

        if (prices[i] < buy) {
            buy = prices[i]
        }
    }

    return maxProf
};