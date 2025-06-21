// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/?envType=study-plan-v2&envId=leetcode-75

/*
** Note: problem description clarification: transaction fee only on purchase and NOT on sale or vice versa. NOT both.

recursive dfs (prices, fee, day, buy = true/false)
    base case 1: if i >= prices.length: return 0

    const noTrade = dfs(prices, fee, day + 1, buy)
    let trade = 0

    if (buy) {
        trade = dfs(prices, fee, day + 1, false) - prices[i] - fee
    } else {
        trade = dfs(prices, fee, day + 1, true) + prices[i] - fee
    }
    return Math.max(noTrade, trade)

- Time: O(2^n)  // each day has max 2 paths, don't trade or trade
- Space: O(n)

* Use memo to reduce Time complexity
Use a Map where:
    key = {day, buy}
    value = max profit on that day. min = 0

- Time: O(n)
- Space: O(n)
*/

const dfs = (prices, fee, day, buy) => {
    if (day >= prices.length) {
        return 0
    }

    const noTrade = dfs(prices, fee, day + 1, buy)
    let trade = 0
    if (buy) {
        trade = dfs(prices, fee, day + 1, false) - prices[day]
    } else {
        trade = dfs(prices, fee, day + 1, true) + prices[day] - fee // I put fee on sell because it 'closes' the transaction.
    }

    return Math.max(noTrade, trade)
}

const dfsMemo = (prices, fee, day, buy, memo) => {
    if (day >= prices.length) {
        return 0
    }
    const key = `{${day}-${buy}}`
    if (memo.has(key)) {
        // console.log('hit: ', key)
        return memo.get(key)
    }

    const noTrade = dfsMemo(prices, fee, day + 1, buy, memo)
    let trade = 0

    if (buy) {
        trade = dfsMemo(prices, fee, day + 1, false, memo) - prices[day]
    } else {
        trade = dfsMemo(prices, fee, day + 1, true, memo) + prices[day] - fee
    }

    memo.set(key, Math.max(noTrade, trade))
    return memo.get(key)
}

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // return dfs(prices, fee, 0, true)
    const memo = new Map()
    const res = dfsMemo(prices, fee, 0, true, memo)
    // console.log(memo)
    return res
};