// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/*
    subset problem
    since you can only hold at most one share at any time, once you buy you must sell next.
    buy -> 2 options; 1. hold. 2. sell
    sell -> 2 options; 1. hold. 2. buy

    recursive function to swap between buying and selling.

    Time: O(n * 2^n)
    Space: O(n)


    * To increase performance, introduce hashing of the subsets already solved
    create Map of key: `${index}-{buying}`, value: maxProf

    Time: O(n)
    Space: O(n)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = new Map()
    return rec(prices, 0, true, dp)
};

// return max profit from index i forward
var rec = function(prices, i, buying, dp) {
    if (i >= prices.length) {
        return 0
    }

    if (dp.has(`${i}-${buying}`)) {
        return dp.get(`${i}-${buying}`)
    }

    // hold
    let maxProf = rec(prices, i + 1, buying, dp)

    if (buying) {
        let buy = rec(prices, i + 1, !buying, dp) - prices[i]
        maxProf = Math.max(maxProf, buy)
    } else {
        // sell
        let sell = rec(prices, i + 1, !buying, dp) + prices[i]
        maxProf = Math.max(maxProf, sell)
    }

    dp.set(`${i}-${buying}`, maxProf)
    return dp.get(`${i}-${buying}`)
}
