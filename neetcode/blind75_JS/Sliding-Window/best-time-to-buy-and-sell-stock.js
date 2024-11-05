// https://neetcode.io/problems/buy-and-sell-crypto

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0

        if (prices.length < 2) {
            return maxProf
        }

        // DP that just tracks the minBuy price
        let minBuy = prices[0]

        prices.forEach((sell, i) => {
            maxProf = Math.max(maxProf, sell - minBuy)
            minBuy = Math.min(minBuy, sell)
        })

        return maxProf

        // Two pointer soln
        // let left = 0
        // let right = 1

        // while (right < prices.length) {
        //     if (prices[left] > prices[right]) {
        //         // assigning left to the lowest found by sliding up to it
        //         left = right
        //     } else {
        //         maxProf = Math.max(maxProf, prices[right] - prices[left])
        //     }
        //     right += 1
        // }

        // return maxProf
    }
}
