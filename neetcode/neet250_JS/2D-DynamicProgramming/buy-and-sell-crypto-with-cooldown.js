// https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown

/*
Decision tree
Start with looking to buy since cannot sell without owning a coin
2 choices, buy at current price or do not buy
if do not buy, continue looking to buy
if buy, look to sell
    when selling, 2 choices 
        sell
        do not sell

to be more general
1. do not complete the operation and move on
2. complete the operation

Method 1: recursive dfs
    track the current operation that can be done, buy or sell
    track next buy index, j

    base case 1: if i === prices.length
        return 0    // 0 since if do nothing, no loss, no gain

    //do nothing = no change in profit and operation stays the same
    notTrade = this.dfs(buying=true/false, i + 1)

    if (buying and i >= j) {
        trade = -prices[i] + this.dfs(buying=false, i + 1)
    } else {
        trade = prices[i] + this.dfs(buying=true, i + 1)
    }

    return Math.max(notTrade, trade)

    -Time: O(2^n)
    -Space: O(n)

Method 2. Refactor into dfs top down with memoization
    create a Map to hold the keys of index-buy or index-sell so that the value of the keys has the already calculated max profit ahead

    -Time: O(n)
    -Space: O(n)

Method 3. bottom up with tabulation
    create a 2D Array of length n + 1 fill with [0, 0]. 
    dp[n] is needed for the boundary to stop the transactions
    [0, 0] is the [sellMaxProfit, buyMaxProfit] at the price indext
    The answer will be finally stored in dp[0][1] since the first operation is buy

    iterate prices from the end because to determine the max profit of a path the ahead profit must be known
        for each price calculate if bought at and sold at

    -Time: O(n)
    -Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // return this.initDFS(prices, 0, true, 0, false)
        // return this.topDown(prices)
        return this.bottomUp(prices)
    }

    bottomUp(prices) {
        const n = prices.length
        const dp = new Array(n + 1).fill().map((e) => new Array(2).fill(0))

        for (let i = n - 1; i >= 0; i --) {
            for (let buying = 1; buying >= 0; buying --) {
                if (buying === 1) {
                    // if buying at this index, the max profit is -prices[i] + maxProfit of sell in i+1
                    const buy = -1 * prices[i] + dp[i+1][0]
                    // if not trade get the max profit of buy from i + 1 since still in buy mode
                    const notTrade = dp[i+1][1]
                    dp[i][1] = Math.max(buy, notTrade)
                } else {
                    // if sell at this index, the max profit is prices[i] + the next buy allowed at i + 2
                    const sell = prices[i] + (i + 2 < n ? dp[i+2][1] : 0)
                    const notTrade = dp[i+1][0] // still in sell mode
                    dp[i][0] = Math.max(sell, notTrade)
                }
            }
        }
        return dp[0][1]
    }

    topDown(prices) {
        const memo = new Map()
        // j can be removed, I could just i + 2 when sell to go directly to next buy
        // don't need canSell because first trade is always a buy
        return this.dfs(prices, 0, true, memo)
    }

    dfs(prices, i, buying, memo) {
        if (i >= prices.length) {
            return 0
        }

        const key = `${i}-${buying}`

        if (memo.get(key)) {
            return memo.get(key)
        }

        const notTrade = this.dfs(prices, i + 1, buying, memo)

        let trade = 0
        if (buying) {
            trade = -1 * prices[i] + this.dfs(prices, i + 1, false, memo)
        } else {
            trade = prices[i] + this.dfs(prices, i + 2, true, memo)
        }

        memo.set(key, Math.max(notTrade, trade))
        return memo.get(key)
    }

    initDFS(prices, i, buying, j, canSell) {
        if (i === prices.length) {
            return 0
        }

        const notTrade = this.initDFS(prices, i + 1, buying, j, canSell)

        let trade = 0
        if (buying && i >= j) {
            trade = -1 * prices[i] + this.initDFS(prices, i + 1, false, j, true)
        } else if (canSell) {
            // sell
            trade = prices[i] + this.initDFS(prices, i + 1, true, i + 2, false)
        }

        return Math.max(notTrade, trade)
    }
}
