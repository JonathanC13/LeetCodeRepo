// https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown

/*
pattern is:
    1. start with buy or skip
    2. switches to sell or skip
    3. switches to skip
    4. repeat

recursive dfs backtracking
    base case 1: if i >= prices: return 0 since no more prices to operate on.

    2 options: skip, buy/sell
    1. skip and not perform operation on current price, skip to next
    2. perform the current phase operation of buy or sell. Can sell if previous op was buy and can buy if prev was sell
        if (buy)
            trade = rec(sell, i + 1) - prices[i] // since this phase is buy, next has to be sell and go to next price.
        else if (sell)
            trade = rec(buy, i + 2) + prices[i] // since cooldown of 1, i + 2 to the next index a buy can be performed

        return max(skip, trade)

- Time: O(2^(i))    // each phase has 2 options. i = number of prices = height of the tree forms the paths and solution.
- Space: O(i)

Reduce time with memo
create Map that will store:
    key: price index and phase operation want to perform. e.g. {0-buy}
    value: the max profit of skip, trade performed at that index

- Time: O(i)
- Space: O(i)
*/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = new Map()
        return this.dfs(prices, 0, 'buy', memo)
    }

    dfs(prices, i, op, memo) {
        if (i >= prices.length) {
            return 0
        }
        const key = `{${i}-${op}}`
        if (memo.has(key)) {
            return memo.get(key)
        }

        const skip = this.dfs(prices, i + 1, op, memo)
        let trade = 0
        if (op === 'buy') {
            trade = this.dfs(prices, i + 1, 'sell', memo) - prices[i]
        } else if (op === 'sell') {
            trade = this.dfs(prices, i + 2, 'buy', memo) + prices[i]
        }

        memo.set(key, Math.max(skip, trade))
        return memo.get(key)
    }

}
