// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
/*
maxProf = 0

buyPrice = prices[0]
iterate prices
    prof = prices[i] - buyPrice
    maxProf = max(maxProf, prof)

    if (nums[i] < buyPrice) {   // since lower, it makes sense to instead buy at this time
        buyPrice = prices[i]
    }

return maxProf

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProf = 0
    let buy = prices[0]
    for (let i = 1; i < prices.length; i ++) {
        const prof = prices[i] - buy
        maxProf = Math.max(maxProf, prof)

        if (prices[i] < buy) {
            buy = prices[i]
        }
    }

    return maxProf
};