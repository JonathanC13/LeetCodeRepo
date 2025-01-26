// https://neetcode.io/problems/buy-and-sell-crypto

/*
create max to track max profit
buy = prices[0]

for (right = 0; right < prices.length; right ++)
    max = math.max(max, prices[i] - buy)

    if the price at right < buy, buy = prices[right]

return max

- Time: O(n)
- Space: O(1)

*/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0
        let buy = prices[0]

        for (let r = 0; r < prices.length; r ++) {
            maxProf = Math.max(maxProf, prices[r] - buy)

            if (prices[r] < buy) {
                buy = prices[r]
            }
        }

        return maxProf
    }
}
