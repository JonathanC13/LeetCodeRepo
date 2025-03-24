// https://neetcode.io/problems/buy-and-sell-crypto

/*
edge case 1: if prices.length < 2: return 0

max = 0
create pointer for buyIdx at = 0
create pointer for sellIdx = 1
while (sellIdx < prices.length) {

    get the max at the current sell and buy price
    max = Math.max(max, prices[sellIdx] - prices[buyIdx])
    
    if encounter a buy price that is lower than the current, move the pointer
        buy = i
        
    sellIdx += 1
}

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0
        }

        let max = 0
        let buyIdx = 0
        let sellIdx = 1

        while (sellIdx < prices.length) {
            max = Math.max(max, prices[sellIdx] - prices[buyIdx])
            if (prices[sellIdx] < prices[buyIdx]) {
                buyIdx = sellIdx
            }
            sellIdx += 1
        }

        return max
    }
}
