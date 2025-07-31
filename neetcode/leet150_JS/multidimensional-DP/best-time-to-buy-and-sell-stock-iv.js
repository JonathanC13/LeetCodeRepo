// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/?envType=study-plan-v2&envId=top-interview-150

/*
You may complete at most k transactions. Where one transaction is buy -> sell. Therefore 2 is *k.

memo Map 
    key = {i-'buy/sell'}
    val = the max current profit

rec
    base case 1: if (i >= prices) {
        return 0
    }

    base case 2: if transactions >= k
        return 0

    key = {i-buy/sell-trans}
    base case 2: if (memo.has(key)) {
        return memo.get(key)
    }

    noTrade = dfs(prices, i + 1, op, memo, k)
    trade = 0
    if (op === buy) {
        trade = dfs(prices, i + 1, 'sell', transactions, memo, k) - prices[i]
    } else {
        trade = dfs(prices, i + 1, 'buy', transactions + 1, memo, k) + prices[i]
    }

    memo.set(key, Math.max(noTrade,trade))
    return memo.get(key)

- Time: O(n^2)  // without dp, O(2^n) each price has at most 2 options: noTrade, trade
- Space: O(n^2)
*/

const dfs = function(prices, i, op, trans, memo, k) {
    if (i >= prices.length || trans >= k) {
        return 0
    }
    const key = `{${i}-${op}-${trans}}`
    if (memo.has(key)) {
        // console.log('hit')
        return memo.get(key)
    }
    
    const noTrade = dfs(prices, i + 1, op, trans, memo, k)
    let trade = 0
    if (op === 'buy') {
        trade = dfs(prices, i + 1, 'sell', trans, memo, k) - prices[i]
    } else {
        trade = dfs(prices, i + 1, 'buy', trans + 1, memo, k) + prices[i]
    }
    memo.set(key, Math.max(noTrade, trade))
    return memo.get(key)
}

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const memo = new Map()
    return dfs(prices, 0, 'buy', 0, memo, k)   // since 1 <= k <= 100 and 0 <= prices[i] <= 1000, the recursive dfs DP will not TLE
};