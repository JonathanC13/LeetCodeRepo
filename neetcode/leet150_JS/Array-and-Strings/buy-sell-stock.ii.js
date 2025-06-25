// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
* linear
public int maxProfit(int[] prices) {
    int i = 0, buy, sell, profit = 0, N = prices.length - 1;
    while (i < N) {
        while (i < N && prices[i + 1] <= prices[i]) i++;
        buy = prices[i];

        while (i < N && prices[i + 1] > prices[i]) i++;
        sell = prices[i];

        profit += sell - buy;
    }
    return profit;
}


* backtracking dfs
    base case 1: if i >= prices.length
        return 0
    
    2 paths
    1. no trade = rec(prices, i + 1, buy)

    2.
    if buy
        trade = rec(prices, i + 1, buy = false) - prices[i]
    else    // sell
        trade = rec(prices, i + 1, buy = true) + prices[i]

    return max(trade, noTrade)


rec(prices, i, buy = true)  // since must start with a buy in order to sell
- Time: O(2^n)  // n = length of prices
- Space: O(n)

* reduce time complexity with DP memo
memo = new Map to store:
    key = {i,buy}
    val = max profit

- Time: O(n)
- Space: O(n)
*/

const rec = (prices, i, buy, memo) => {
    if (i >= prices.length) {
        return 0
    }
    const key = `{${i}-${buy}}`
    if (memo.has(key)) {
        return memo.get(key)
    }

    const noTrade = rec(prices, i + 1, buy, memo)
    let trade = 0

    if (buy) {
        trade = rec(prices, i + 1, false, memo) - prices[i]
    } else {
        trade = rec(prices, i + 1, true, memo) + prices[i]
    }

    memo.set(key, Math.max(noTrade, trade))
    return memo.get(key)
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const memo = new Map()
    return rec(prices, 0, true, memo)
};