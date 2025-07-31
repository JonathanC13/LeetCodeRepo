// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/?envType=study-plan-v2&envId=top-interview-150

/*
You may complete at most two transactions. Where one transaction is buy -> sell. Therefore 2 is x2.

memo Map 
    key = {i-'buy/sell'}
    val = the max current profit

rec
    base case 1: if (i >= prices) {
        return 0
    }

    base case 2: if transactions >= 2
        return 0

    key = {i-buy/sell-trans}
    base case 2: if (memo.has(key)) {
        return memo.get(key)
    }

    noTrade = dfs(prices, i + 1, op, memo)
    trade = 0
    if (op === buy) {
        trade = dfs(prices, i + 1, 'sell', transactions, memo) - prices[i]
    } else {
        trade = dfs(prices, i + 1, 'buy', transactions + 1, memo) + prices[i]
    }

    memo.set(key, Math.max(noTrade,trade))
    return memo.get(key)

- Time: O(n^2)  // without dp, O(2^n) each price has at most 2 options: noTrade, trade
- Space: O(n^2)
*/

const dfs = function(prices, i, op, trans, memo) {
    if (i >= prices.length || trans >= 2) {
        return 0
    }
    const key = `{${i}-${op}-${trans}}`
    if (memo.has(key)) {
        // console.log('hit')
        return memo.get(key)
    }
    
    const noTrade = dfs(prices, i + 1, op, trans, memo)
    let trade = 0
    if (op === 'buy') {
        trade = dfs(prices, i + 1, 'sell', trans, memo) - prices[i]
    } else {
        trade = dfs(prices, i + 1, 'buy', trans + 1, memo) + prices[i]
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
    // return dfs(prices, 0, 'buy', 0, memo)    // TLE because 0 <= prices[i] <= 10^5
    return maxProfitKeon(prices)
};

// Thanks Keon. https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/3897443/100-beat-easiest-to-understand-most-readable-javascript-solution-here-with-simple-explanation/?envType=study-plan-v2&envId=top-interview-150
// Time: O(n)   2n ~= n
var maxProfitKeon = function(prices) {
    let maxReverse = 0;
    let maxProfitReverse = 0;
    let maxProfitReverseArray = new Array(prices.length).fill(0);

    let min = Infinity;
    let maxProfit = 0;
    let maxTotalProfit = 0;

    //iterating backwards to fill up "maxProfitReverseArray" with right side profit for each index
    for (let i = prices.length - 1; i >= 0; i--) {
        let currentPrice = prices[i];
        if (currentPrice > maxReverse) {
            maxReverse = currentPrice;
        }
        let profit = maxReverse - currentPrice;
        if (profit > maxProfitReverse) {
            maxProfitReverse = profit;
        }
        maxProfitReverseArray[i] = maxProfitReverse;
    }
    //iterating forwardsto calculate max profit on the left side and then adding right side, returning maximum possible sum as answer.
    for (let k = 0; k < prices.length; k++) {
        let currentPrice = prices[k];
        if (currentPrice < min) {
            min = currentPrice;
        }
        let profit = currentPrice - min;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        let totalProfit = maxProfit + maxProfitReverseArray[k];
        if (totalProfit > maxTotalProfit) {
            maxTotalProfit = totalProfit;
        }
    }

    return maxTotalProfit;
};